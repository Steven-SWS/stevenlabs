#-*- coding: utf-8 -*-

import logging
from re import template
from django.shortcuts import render
from django.views.generic import TemplateView
from eqpInfo.models import *


# logger 인스턴스 생성
logger = logging.getLogger(__name__)

# using DATABASE
using = 'oracle'


# Class-based View
class EqpInfoModelView(TemplateView):
    template_name = "eqpInfo/index.html"
    logger.info("LOG : call EqpInfoModlView")

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['EQP_VW_LIST'] = ['EQP_VW_DCP', 'EQP_VW_RMS', 'EQP_VW_ECM', 'CODE_MST_PP']
        return context


# Function-based View
def getCodeMasterInfo(request, **kwargs):
    template_name = "eqpInfo/CODE_list.html"
    context = {}

    # 조회
    model = CodeMasterInfo()
    valueList = CodeMasterInfo.getCodeInfo(model)

    # Set Context Data
    returnList = []
    for key, val in valueList['CATEGORY'].items():
        #print(key, ":", val)
        returnList.append(val)

    #print(returnList)
    context['APP_NAME'] = 'CODE'
    context['CATEGORY_LIST'] = returnList
    return render(request, template_name, context)


def getCodeMasterInfo_Detail(request, category_id, **kwargs):
    template_name = "eqpInfo/CODE_detil.html"
    context = {}

    # 조회
    model = CodeMasterInfo()
    valueList = CodeMasterInfo.getCodeInfo_Detail(model, category_id)

    # 인덱싱
    USE_YN = 0
    CATEGORY = 1
    CODE = 2
    NAME = 3
    DESCRIPTION = 4

    # Set Context Data
    returnList = []
    for val in valueList:
        #print(val)
        codeInfo = {}
        codeInfo.update({'USE_YN':val[USE_YN]})
        #codeInfo.update({'CATEGORY':val[CATEGORY]})
        codeInfo.update({'CODE':val[CODE]})
        codeInfo.update({'NAME':val[NAME]})
        codeInfo.update({'DESCRIPTIOM':val[DESCRIPTION]})
        returnList.append(codeInfo)

    #print(returnList)
    context['APP_NAME'] = 'CODE-Detail'
    context['CATEGORY_ID'] = category_id
    context['CODE_LIST'] = returnList
    return render(request, template_name, context)


def getAreaInfo(request, view_id, **kwargs):
    template_name = "eqpInfo/AREA_list.html"
    context = {}

    # 조회
    model = AreaMasterInfo()
    valueList = AreaMasterInfo.getAreaInfo(model)

    # Set Context Data
    returnList = []
    for key, val in valueList['AREA'].items():
        #print(key, ":", val)
        returnList.append(val)

    #print(returnList)
    context['APP_NAME'] = 'AREA'
    context['VIEW_NAME'] = view_id
    context['AREA_LIST'] = returnList
    return render(request, template_name, context)


def getEqpInfo(request, view_id, area_id, **kwargs):
    template_name = "eqpInfo/EQP_VW_list.html"
    context = {}

    # 조회
    model = EqpMasterInfo()
    valueList = EqpMasterInfo.getEqpInfo(model, view_id, area_id)

    # Set Context Data
    returnList = []
    for key, val in valueList['EQP_ID'].items():
        #print(key, ":", val)
        returnList.append(val)

    appName = 'EQP'
    if view_id == 'EQP_VW_DCP':
        appName = 'DCP-EQP'
    elif view_id == 'EQP_VW_RMS':
        appName = 'RMS-EQP'
    elif view_id == 'EQP_VW_ECM':
        appName = 'ECM-EQP'

    #print(returnList)
    context['APP_NAME'] = appName
    context['VIEW_NAME'] = view_id
    context['AREA_ID'] = area_id
    context['EQP_LIST'] = returnList
    return render(request, template_name, context)


def getEqpInfo_Detail(request, view_id, area_id, eqp_id, **kwargs):
    template_name = "eqpInfo/EQP_VW_detail.html"
    context = {}

    # 조회
    model = EqpMasterInfo()
    valueList = EqpMasterInfo.getEqpInfo_Detail(model, view_id, area_id, eqp_id)

    # Set Context Data
    row_idx = 0
    returnList = []
    for col, val in valueList.items():
        #print(col, ":", val)
        #returnList.update({col:val[row_idx]})
        returnList[col] = val[row_idx]

    appName = 'EQP'
    if view_id == 'EQP_VW_DCP':
        appName = 'DCP-EQP-Detail'
    elif view_id == 'EQP_VW_RMS':
        appName = 'RMS-EQP-Detail'
    elif view_id == 'EQP_VW_ECM':
        appName = 'ECM-EQP-Detail'

    #print(returnList)
    context['APP_NAME'] = appName
    context['VIEW_NAME'] = view_id
    context['AREA_ID'] = area_id
    context['EQP_DATA'] = returnList
    return render(request, template_name, context)
