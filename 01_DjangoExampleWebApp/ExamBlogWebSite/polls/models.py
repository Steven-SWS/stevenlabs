#-*- coding: utf-8 -*-

from django.db import models


# 테이블 : 질문
class Question(models.Model):    # django.db.models.Model 클래스 상속
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.question_text


# 테이블 : 질문에 따른 응답/선택 지문
class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
