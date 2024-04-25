from django.contrib import admin

from .models import Dealer, DealerCar

# Register your models here.
admin.site.register(Dealer)
admin.site.register(DealerCar)