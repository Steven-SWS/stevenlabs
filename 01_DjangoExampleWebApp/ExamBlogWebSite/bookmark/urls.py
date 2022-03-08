#-*- coding: utf-8 -*-

from django.urls import path, re_path
from . import views


app_name = 'bookmark'
urlpatterns = [

    # http://localhost:8000/bookmark/
    path('', views.BookmarkLV.as_view(), name='index'),

    # http://localhost:8000/bookmark/favorite/
    path('favorite/', views.BookmarkLV.as_view(), name='bookmark_list'),

    # http://localhost:8000/bookmark/favorite/$99/
    path('favorite/<int:pk>/', views.BookmarkDV.as_view(), name='bookmark_detail'),

]
