#-*- coding: utf-8 -*-

from django.apps import AppConfig


class BooksConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'books'
    verbose_name = '참고문헌 App'    # 추가
