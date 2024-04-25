from django.db import models



class Dealer(models.Model):
    name = models.TextField()
    city = models.TextField()
    address = models.TextField()
    description = models.TextField()
    image = models.TextField()
    phone_number = models.TextField()


class DealerCar(models.Model):
    brand = models.TextField()
    model = models.TextField()
    year = models.IntegerField()
    color = models.TextField()
    description = models.TextField()
    price = models.IntegerField(default=0)
    image = models.TextField(null=True)
    liked = models.BooleanField()
    dealer = models.ForeignKey(Dealer, on_delete=models.CASCADE, related_name='dealer_cars')
