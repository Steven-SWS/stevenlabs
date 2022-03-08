#-*- coding: utf-8 -*-

from django.contrib import admin
from bookmark.models import Bookmark


@admin.register(Bookmark)
class BookmarkAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'url')    # 레코드 리스트 컬럼 항목 지정
