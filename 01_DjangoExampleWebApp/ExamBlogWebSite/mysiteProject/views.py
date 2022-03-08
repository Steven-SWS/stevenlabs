#-*- coding: utf-8 -*-

import logging
import datetime
from django.apps import apps
#from django.views.generic.base import TemplateView
from django.views.generic import TemplateView
from django.views.generic import CreateView
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy


# logger 인스턴스 생성
#logger = logging.getLogger('mysiteProject')
logger = logging.getLogger(__name__)


#--- 현재시간 조회
def current_datetime():
   return datetime.datetime.now()


#--- Homepage
class HomeView(TemplateView):
    #template_name = "index.html"   # Simple
    template_name = "home.html"     # Beautiful (Default)
    #logger.info("LOG : call HomeView")

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        #context['app_list'] = ['polls', 'books']       
        dictVerbose = {}
        for app in apps.get_app_configs():
            if 'site-packages' not in app.path:
                dictVerbose[app.label] = app.verbose_name
            #end if
        #end for

        context['app_list'] = dictVerbose    # or 기본값 사용 : 'object_list'
        context['server_time'] = current_datetime()
        return context

#--- Login View (User Creation)
class UserCreateView(CreateView):
    template_name = "registration/register.html"
    form_class = UserCreationForm
    success_url = reverse_lazy('register_done')

class UserCreateDoneTV(TemplateView):
    template_name = "registration/register_done.html"
    