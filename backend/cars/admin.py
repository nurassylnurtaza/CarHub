from django.contrib import admin
from .models import Category, Car, MyCar

# Register your models here.
admin.site.register(Category)
admin.site.register(Car)
admin.site.register(MyCar)