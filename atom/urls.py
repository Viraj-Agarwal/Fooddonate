from django.contrib import admin
from . import views
from django.urls import path

urlpatterns = [
    path('', views.home, name='home'),
    path('open_blog', views.open_blog),
    path('back_to', views.home),
    path('cases', views.cases),
    path('map', views.givefood),
]