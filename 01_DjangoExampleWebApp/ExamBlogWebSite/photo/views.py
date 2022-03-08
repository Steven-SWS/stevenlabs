#-*- coding: utf-8 -*-

import logging
from django.views.generic import ListView
from django.views.generic import DetailView
from photo.models import Album, Photo


# logger 인스턴스 생성
logger = logging.getLogger(__name__)


#--- ListView (DB에서 여러개의 ROW를 가져올 때)
class AlbumLV(ListView):
    template_name = "photo/album_list.html"
    model = Album


#--- DetailView (DB에서 1개의 ROW를 가져올 때)
class AlbumDV(DetailView):
    template_name = "photo/album_detail.html"
    model = Album


#--- DetailView (DB에서 1개의 ROW를 가져올 때)
class PhotoDV(DetailView):
    template_name = "photo/photo_detail.html"
    model = Photo
