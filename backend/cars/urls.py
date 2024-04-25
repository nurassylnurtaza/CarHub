from django.urls import path

from .views import CategoryAPIView, CarAPIView, CarPostView, CarDetailView, MyCarsAPIView, FavoritesAPIView
from .views import getCategoryByName, getCarsByModel

urlpatterns = [
    path('categories/', CategoryAPIView.as_view()),
    path('categories/<int:id>/', getCategoryByName),
    path('cars/', CarAPIView.as_view()),
    path('cars/create/', CarPostView.as_view()),
    path('cars/<int:id>/', CarDetailView.as_view()),
    path('cars/<str:model>/', getCarsByModel),
    path('cars/my/', MyCarsAPIView.as_view()),
    path('cars/favorites/', FavoritesAPIView.as_view())
]