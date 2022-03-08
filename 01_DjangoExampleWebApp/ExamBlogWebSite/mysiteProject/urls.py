#-*- coding: utf-8 -*-

"""mysiteProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
#from django.conf.urls import include, url
from django.urls import path, include
from mysiteProject import views


urlpatterns = [

    # http://localhost:8000/admin/
    path('admin/', admin.site.urls),

    # http://localhost:8000/accounts/
    path('accounts/', include('django.contrib.auth.urls')),

    # http://localhost:8000/accounts/register/
    path('accounts/register/', views.UserCreateView.as_view(), name='register'),

    # http://localhost:8000/accounts/register/done/
    path('accounts/register/done/', views.UserCreateDoneTV.as_view(), name='register_done'),

    # http://localhost:8000/
    path('', views.HomeView.as_view(), name='home'),

    # http://localhost:8000/polls/
    path('polls/', include('polls.urls')),

    # http://localhost:8000/books/
    path('books/', include('books.urls')),

    # http://localhost:8000/bookmark/
    path('bookmark/', include('bookmark.urls')),

    # http://localhost:8000/blog/
    path('blog/', include('blog.urls')),

    # http://localhost:8000/photo/
    path('photo/', include('photo.urls')),

    # http://localhost:8000/insta/
    path('insta/', include('insta.urls')),

    # http://localhost:8000/eqpInfo/
    path('eqpInfo/', include('eqpInfo.urls')),

] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
