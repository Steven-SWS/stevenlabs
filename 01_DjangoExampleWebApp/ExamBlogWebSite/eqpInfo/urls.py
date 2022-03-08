#-*- coding: utf-8 -*-

from django.urls import path, re_path
from . import views    # 동일 경로에 있는 view.py 파일을 import


app_name = 'eqpInfo'    # namespace 설정 (HttpResponseRedirect(reverse())에서 사용 -> ex. eqpInfo:CODE_list)
urlpatterns = [

    # http://localhost:8000/eqpInfo/
    path('', views.EqpInfoModelView.as_view(), name='index'),    # Class-based View

    # http://localhost:8000/eqpInfo/codeConfigInfo/
    path('codeConfigInfo/', views.getCodeMasterInfo, name='CODE_list'),    # Function-based View

    # http://localhost:8000/eqpInfo/codeConfigInfo/$category/
    path('codeConfigInfo/<category_id>/', views.getCodeMasterInfo_Detail, name='CODE_detail'),    # Function-based View

    # http://localhost:8000/eqpInfo/$EQP_VW_DCP/
    path('<view_id>/', views.getAreaInfo, name='AREA_list'),    # Function-based View

    # http://localhost:8000/eqpInfo/$EQP_VW_DCP/$CMP/
    path('<view_id>/<area_id>/', views.getEqpInfo, name='EQP_VW_list'),    # Function-based View

    # http://localhost:8000/eqpInfo/$EQP_VW_DCP/$CMP/$CMP501/
    #path('<view_id>/<area_id>/<eqp_id>/', views.getEqpInfo_Detail, name='EQP_VW_detail'),    # Function-based View
    re_path(r'^(?P<view_id>[\w-]+)/(?P<area_id>[\w-]+)/(?P<eqp_id>[\w-]+)/$', views.getEqpInfo_Detail, name='EQP_VW_detail'),    # Function-based View

]
