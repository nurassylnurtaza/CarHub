from django.urls import path
from .views import DealerDetailView, DealersAPIView, DealerCarsAPIView, DelaerCarsDetailView

urlpatterns = [
    path('dealers/', DealersAPIView.as_view()),
    path('dealers/<int:id>/', DealerDetailView.as_view()),
    path('dealers/<int:id>/cars/', DealerCarsAPIView.as_view()),
]
