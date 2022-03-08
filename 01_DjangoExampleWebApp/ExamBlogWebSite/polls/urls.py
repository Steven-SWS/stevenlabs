#-*- coding: utf-8 -*-

from django.urls import path, re_path
from . import views    # 동일 경로에 있는 view.py 파일을 import


app_name = 'polls'    # namespace 설정 (HttpResponseRedirect(reverse())에서 사용 -> ex. polls:results)
urlpatterns = [

    # http://localhost:8000/polls/
    #path('', views.index, name='index'),    # Function-based View
    path('', views.IndexView.as_view(), name='index'),    # Class-based View

    # http://localhost:8000/polls/$99/
    #path('<int:pk>/', views.detail, name='detail'),    # Function-based View
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),    # Class-based View

    # http://localhost:8000/polls/$99/results/
    #path('<int:pk>/results/', views.results, name='results'),    # Function-based View
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),    # Class-based View

    # http://localhost:8000/polls/$99/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),    # Function-based View (Class-X)

]
