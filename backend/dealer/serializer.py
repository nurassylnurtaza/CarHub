from rest_framework import serializers

from django.shortcuts import get_object_or_404

from .models import Dealer, DealerCar



class DealerSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()
    description = serializers.CharField()
    image = serializers.URLField()
    phone_number = serializers.CharField()

    def create(self, validated_data):
        return Dealer.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.image)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.save()
        return instance


class DealerCarSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    brand = serializers.CharField()
    model = serializers.CharField()
    year = serializers.IntegerField()
    color = serializers.CharField()
    description = serializers.CharField()
    price = serializers.IntegerField()
    image = serializers.CharField()
    liked = serializers.BooleanField()
    dealer_id = serializers.PrimaryKeyRelatedField(queryset=Dealer.objects.all())

    def create(self, validated_data):
        return DealerCar.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.brand = validated_data.get('brand', instance.brand)
        instance.model = validated_data.get('model', instance.model)
        instance.year = validated_data.get('year', instance.year)
        instance.color = validated_data.get('color', instance.color)
        instance.category = validated_data.get('category', instance.category)
        instance.description = validated_data.get('description', instance.description)
        instance.price = validated_data.get('price', instance.price)
        instance.image = validated_data.get('image', instance.image)
        instance.liked = validated_data.get('liked', instance.liked)
        instance.dealer_id = validated_data.get('dealer_id', instance.dealer_id)
        instance.save()
        return instance
