from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Category, Car, MyCar, Favorites
from .serializers import CategorySerializer, CarSerializer, MyCarSerializer, FavoritesSerializer


# Create your views here.
class CategoryAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


class CarAPIView(APIView):
    def get(self, request):
        cars = Car.objects.all()
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)


class CarPostView(APIView):
    def post(self, request):
        try:
            category = Category.object.get(pk=request.data.get('category_id'))
        except Category.DoesNotExist as e:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = MyCarSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(category=category)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CarDetailView(APIView):
    def put(self, request, id):
        car = Car.objects.get(pk=id)
        serializer = CarSerializer(car, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        car = Car.objects.get(pk=id)
        serializer = CarSerializer(car)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, id):
        car = Car.objects.get(pk=id)
        car.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', ])
def getCategoryByName(request, id):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"], )
def getCarsByModel(request, model):
    try:
        cars = Car.objects.get(model=model)
    except Car.DoesNotExist as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    if request.method == "GET":
        serializer = CarSerializer(cars)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MyCarsAPIView(APIView):
    def get(self, request):
        cars = MyCar.objects.all()
        serializer = MyCarSerializer(cars, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class FavoritesAPIView(APIView):
    def get(self, request):
        favourites = Favorites.objects.filter(user=request.user)
        cars = [favourite.car for favourite in favourites]
        serializer = FavoritesSerializer(cars, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
