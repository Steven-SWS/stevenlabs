#-*- coding: utf-8 -*-

from django.contrib import admin
from django.utils import timezone
from books.models import Book, Author, Publisher


#class BookInline(admin.StackedInline):    # 기본 Text 형태의 Inline
class BookInline(admin.TabularInline):    # 테이블 형태의 Inline
    model = Book
    extra = 3


class PublisherAdmin(admin.ModelAdmin):
    # 각각의 필드를 분리해서 보여주기 기능 (추가 옵션 사용)
    fieldsets = [
        ('출판사', {'fields':['name']}),
        ('회사 주소', {'fields':['address']}),
        ('웹사이트', {'fields':['website'], 'classes':['collapse']}),    # 필드 접기 옵션사용
    ]
    inlines = [BookInline]    # Book 과 Author 같이 보기 (Inline)
    list_display = ('name', 'address', 'website')    # 레코드 리스트 컬럼 항목 지정
    list_filter = ['website']    # 필터 사이드 바 추가
    search_fields = ['name']    # 검색 박스 추가 (여러개의 컬럼 지정 가능, 모든 컬럼에 대해서 LIKE 검색 수행)


admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Publisher, PublisherAdmin)
