from django.urls import path
from . import views

urlpatterns = [
    path('cultures/', views.get_cultures, name='get_cultures'),
    path('cultures/add/', views.add_culture, name='add_culture'),
    path('cultures/delete/<int:pk>/', views.delete_culture, name='delete_culture'),
]
