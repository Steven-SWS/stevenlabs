#-*- coding: utf-8 -*-

from django.contrib import admin
from blog.models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin): 
    list_display  = ('id', 'title', 'modify_dt', 'tag_list')    # 레코드 리스트 컬럼 항목 지정
    list_filter   = ('modify_dt',)    # 필터 사이드 바 추가
    search_fields = ('title', 'content')    # 검색 박스 추가 (여러개의 컬럼 지정 가능, 모든 컬럼에 대해서 LIKE 검색 수행)
    prepopulated_fields = {'slug': ('title',)}    # 미리 채워진 필드 (slug 컬럼값에 title 컬럼값을 Default로 채워준다)

    def get_queryset(self, request):
        return super().get_queryset(request).prefetch_related('tags')

    def tag_list(self, obj):
        return ', '.join(o.name for o in obj.tags.all())
