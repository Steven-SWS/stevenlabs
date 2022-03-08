#-*- coding: utf-8 -*-

from django.contrib import admin
from django.utils import timezone
from polls.models import Question, Choice


#class ChoiceInline(admin.StackedInline):    # 기본 Text 형태의 Inline
class ChoiceInline(admin.TabularInline):    # 테이블 형태의 Inline
    model = Choice
    extra = 3


class QuestionAdmin(admin.ModelAdmin):
    '''
    # 원하는대로 필드 순서 정의 가능
    fields = [
        'pub_date',
        'question_text'
    ]
    '''

    '''
    # 각각의 필드를 분리해서 보여주기 가능
    fieldsets = [
        ('설문 내용', {'fields': ['question_text']}),
        ('등록 일자', {'fields': ['pub_date'], 'classes': ['collapse']}),    # 필드 접기 옵션사용
    ]
    '''

    # 각각의 필드를 분리해서 보여주기 가능 (추가 옵션 사용)
    fieldsets = [
        ('설문 내용', {'fields': ['question_text']}),
        ('등록 일자', {'fields': ['pub_date'], 'classes': ['collapse']}),    # 필드 접기 옵션사용
    ]
    inlines = [ChoiceInline]    # Question 과 Choice 같이 보기 (Inline)
    list_display = ('question_text', 'pub_date')    # 레코드 리스트 컬럼 항목 지정
    list_filter = ['pub_date']    # 필터 사이드 바 추가
    search_fields = ['question_text']    # 검색 박스 추가 (여러개의 컬럼 지정 가능, 모든 컬럼에 대해서 LIKE 검색 수행)


admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice)
