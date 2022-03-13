#-*- coding: utf-8 -*-

from django.urls import path, re_path
from . import views


app_name = 'blog'
urlpatterns = [

    # http://localhost:8000/blog/
    path('', views.PostLV.as_view(), name='index'),

    # http://localhost:8000/blog/post/ (same as /blog/)
    path('post/', views.PostLV.as_view(), name='post_list'),

    # http://localhost:8000/blog/post/$django-example/
    re_path(r'^post/(?P<slug>[-\w]+)/$', views.PostDV.as_view(), name='post_detail'),

    # http://localhost:8000/blog/archive/
    path('archive/', views.PostAV.as_view(), name='post_archive'),

    # http://localhost:8000/blog/archive/$2022/
    #path('archive/<int:year>/', views.PostYearAV.as_view(), name='post_year_archive'),
    re_path(r'^archive/(?P<year>[0-9]{4})/$', views.PostYearAV.as_view(), name='post_year_archive'),

    # http://localhost:8000/blog/archive/$2022/$nov/
    #path('archive/<int:year>/<str:month>/', views.PostMonthAV.as_view(), name='post_month_archive'),
    re_path(r'^archive/(?P<year>[0-9]{4})/(?P<month>[-\w]+)/$', views.PostMonthAV.as_view(), name='post_month_archive'),

    # http://localhost:8000/blog/archive/$2022/$nov/$10/
    #path('archive/<int:year>/<str:month>/<int:day>/', views.PostDayAV.as_view(), name='post_day_archive'),
    #re_path(r'^archive/(?P<year>\d{4})/(?P<month>[a-z]{3})/(?P<day>\d{1,2})/$', views.PostDayAV.as_view(), name='post_day_archive'),
    re_path(r'^archive/(?P<year>[0-9]{4})/(?P<month>[-\w]+)/(?P<day>[0-9]{2})/$', views.PostDayAV.as_view(), name='post_day_archive'),

    # http://localhost:8000/blog/archive/today/
    path('archive/today/', views.PostTodayAV.as_view(), name='post_today_archive'),

    # http://localhost:8000/blog/tag/
    #path('tag/', views.TagCloudTV.as_view(), name='tag_cloud'),

    # http://localhost:8000/blog/tag/$tagkey/
    #path('tag/<str:tagkey>/', views.TaggedObjectLV.as_view(), name='tagged_object_list'),

    # http://localhost:8000/blog/search/
    path('search/', views.SearchFormView.as_view(), name='search'),

]
