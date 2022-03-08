#-*- coding: utf-8 -*-

import logging
from django.views.generic.base import TemplateView
from django.views.generic import ListView
from django.views.generic import DetailView
from books.models import Book, Author, Publisher


# logger 인스턴스 생성
logger = logging.getLogger(__name__)


#--- TemplateView (단순 표현)
class BooksModelView(TemplateView):
    template_name = 'books/index.html'
    #logger.info("LOG : call BooksModelView")

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['model_list'] = ['Book', 'Author', 'Publisher']    # or 기본값 사용 : 'object_list'
        return context


#--- ListView (DB에서 여러개의 ROW를 가져올 때)
class BookList(ListView):
    template_name = 'books/book_list.html'
    model = Book

class AuthorList(ListView):
    template_name = 'books/author_list.html'
    model = Author

class PublisherList(ListView):
    template_name = 'books/publisher_list.html'
    model = Publisher


#--- DetailView (DB에서 1개의 ROW를 가져올 때)
class BookDetail(DetailView):
    template_name = 'books/book_detail.html'
    model = Book

class AuthorDetail(DetailView):
    template_name = 'books/author_detail.html'
    model = Author

class PublisherDetail(DetailView):
    template_name = 'books/publisher_detail.html'
    model = Publisher
