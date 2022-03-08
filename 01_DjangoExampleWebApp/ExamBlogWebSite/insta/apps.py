#-*- coding: utf-8 -*-

from django.apps import AppConfig


class InstaConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'insta'
    verbose_name = '인스타 App'    # 추가
