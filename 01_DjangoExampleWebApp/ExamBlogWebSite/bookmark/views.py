#-*- coding: utf-8 -*-

import logging
from django.views.generic import ListView
from django.views.generic import DetailView
from bookmark.models import Bookmark


# logger 인스턴스 생성
logger = logging.getLogger(__name__)


#--- ListView (DB에서 여러개의 ROW를 가져올 때)
class BookmarkLV(ListView):
    template_name = 'bookmark/bookmark_list.html'
    model = Bookmark


#--- DetailView (DB에서 1개의 ROW를 가져올 때)
class BookmarkDV(DetailView):
    template_name = 'bookmark/bookmark_detail.html'
    model = Bookmark
