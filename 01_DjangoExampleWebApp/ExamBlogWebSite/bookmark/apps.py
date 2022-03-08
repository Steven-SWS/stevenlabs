#-*- coding: utf-8 -*-

from django.apps import AppConfig


class BookmarkConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'bookmark'
    verbose_name = '즐겨찾기 App'    # 추가
