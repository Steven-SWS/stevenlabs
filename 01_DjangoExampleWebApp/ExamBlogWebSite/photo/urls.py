#-*- coding: utf-8 -*-

from django.urls import path, re_path
from . import views


app_name = 'photo'
urlpatterns = [

    # http://localhost:8000/photo/
    path('', views.AlbumLV.as_view(), name='index'),

    # http://localhost:8000/photo/album/ (same as /photo/)
    path('album', views.AlbumLV.as_view(), name='album_list'),

    # http://localhost:8000/photo/album/$99/
    path('album/<int:pk>/', views.AlbumDV.as_view(), name='album_detail'),

    # http://localhost:8000/photo/photo/$99/
    path('photo/<int:pk>/', views.PhotoDV.as_view(), name='photo_detail'),

]
