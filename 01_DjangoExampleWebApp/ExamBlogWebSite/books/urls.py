#-*- coding: utf-8 -*-

from django.urls import path, re_path
from . import views    # 동일 경로에 있는 view.py 파일을 import


app_name = 'books'    # namespace 설정 (HttpResponseRedirect(reverse())에서 사용 -> ex. books:book_detail)
urlpatterns = [

    # http://localhost:8000/books/
    path('', views.BooksModelView.as_view(), name='index'),

    # http://localhost:8000/books/book/
    path('book/', views.BookList.as_view(), name='book_list'),

    # http://localhost:8000/books/author/
    path('author/', views.AuthorList.as_view(), name='author_list'),

    # http://localhost:8000/books/publisher/
    path('publisher/', views.PublisherList.as_view(), name='publisher_list'),

    # http://localhost:8000/books/book/$99/
    path('book/<int:pk>/', views.BookDetail.as_view(), name='book_detail'),

    # http://localhost:8000/books/author/$99/
    path('author/<int:pk>/', views.AuthorDetail.as_view(), name='author_detail'),

    # http://localhost:8000/books/publisher/$99/
    path('publisher/<int:pk>/', views.PublisherDetail.as_view(), name='publisher_detail'),

]
