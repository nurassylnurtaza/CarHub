from django.db import models

from django.contrib.auth import get_user_model

User = get_user_model()


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class Car(models.Model):
    brand = models.TextField()
    model = models.TextField()
    year = models.IntegerField()
    color = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='cars')
    description = models.TextField()
    price = models.IntegerField(default=0)
    image = models.TextField(null=True)
    liked = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')


class MyCar(models.Model):
    brand = models.TextField()
    model = models.TextField()
    year = models.IntegerField()
    color = models.TextField()
    description = models.TextField()
    price = models.IntegerField(default=0)
    image = models.TextField(null=True)
    is_for_sale = models.BooleanField(default=True)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)

class Favorites(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
