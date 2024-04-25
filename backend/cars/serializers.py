from rest_framework import serializers
from .models import Category, Car, MyCar, Favorites

from django.shortcuts import get_object_or_404


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

    def create(self, validated_data):
        return Category.objects.create(**validated_data)


class CarSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    brand = serializers.CharField()
    model = serializers.CharField()
    year = serializers.IntegerField()
    color = serializers.CharField()
    category = CategorySerializer()
    description = serializers.CharField()
    price = serializers.IntegerField()
    image = serializers.CharField()
    liked = serializers.BooleanField()

    def create(self, validated_data):
        car = Car.objects.create(**validated_data)
        return car

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.save()
        return instance


class MyCarSerializer(serializers.ModelSerializer):

    class Meta:
        model = MyCar
        fields = "__all__"

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.price = validated_data.get('price', instance.price)
        instance.save()
        return instance


class FavoritesSerializer(serializers.Serializer):
    car = CarSerializer()

    class Meta:
        model = Favorites
        fields = "__all__"
