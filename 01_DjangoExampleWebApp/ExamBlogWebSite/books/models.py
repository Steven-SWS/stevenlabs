#-*- coding: utf-8 -*-

from django.db import models


# 테이블 : 책 목록
class Book(models.Model):    # django.db.models.Model 클래스 상속
    title = models.CharField(max_length=100)
    authors = models.ManyToManyField('Author')
    publisher = models.ForeignKey('Publisher', on_delete=models.CASCADE)
    publication_date = models.DateField()

    def __str__(self):
        return self.title


# 테이블 : 책 저자
class Author(models.Model):
    name = models.CharField(max_length=50)
    salutation = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return self.name


# 테이블 : 출판사
class Publisher(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    website = models.URLField()

    def __str__(self):
        return self.name
