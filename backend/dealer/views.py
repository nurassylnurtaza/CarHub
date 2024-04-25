from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Dealer, DealerCar
from .serializer import DealerSerializer, DealerCarSerializer


# Create your views here.
class DealersAPIView(APIView):
    def get(self, request):
        dealers = Dealer.objects.all()
        serializer = DealerSerializer(dealers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class DealerCarsAPIView(APIView):
    def get(self, request, id):
        dealer = Dealer.objects.get(id=id)
        cars = dealer.dealer_cars.all()
        serializer = DealerCarSerializer(cars, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class DealerDetailView(APIView):
    def get(self, request, id):
        try:
            dealer = Dealer.objects.get(id=id)
        except Dealer.DoesNotExist as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        serializer = DealerSerializer(dealer)
        return Response(serializer.data, status=status.HTTP_200_OK)


class DelaerCarsDetailView(APIView):
    def get(self, request, model):
        car = DealerCar.objects.get(model=model)
        serializer = DealerCarSerializer(car)
        return Response(serializer.data, status=status.HTTP_200_OK)
