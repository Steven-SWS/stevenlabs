#-*- coding: utf-8 -*-

from django.apps import AppConfig


class PollsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'polls'
    verbose_name = '설문조사 App'    # 추가
