#-*- coding: utf-8 -*-

import logging
from django.conf import settings
from django.db.models import Q
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic import ListView
from django.views.generic import DetailView
from django.views.generic import FormView
#from django.views.generic import ArchiveIndexView, YearArchiveView, MonthArchiveView, DayArchiveView, TodayArchiveView
from django.views.generic.dates import ArchiveIndexView, YearArchiveView, MonthArchiveView, DayArchiveView, TodayArchiveView
from blog.models import Post
from blog.forms import PostSearchForm


# logger 인스턴스 생성
logger = logging.getLogger(__name__)


#--- ListView (DB에서 여러개의 ROW를 가져올 때)
class PostLV(ListView):
    template_name = 'blog/post_list.html'
    model = Post
    context_object_name = 'POST_LIST'    # context 변수명 지정 (템플릿 *.html에서 사용)
    paginate_by = 2    # 화면 1-Page에 표시할 항목 수


#--- DetailView (DB에서 1개의 ROW를 가져올 때)
class PostDV(DetailView):
    template_name = 'blog/post_detail.html'
    model = Post

    # DISQUS 댓글 사이트 관련
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['disqus_short'] = f"{settings.DISQUS_SHORTNAME_APP_IS_BLOG}"
        context['disqus_id'] = f"post-{self.object.id}-{self.object.slug}"
        context['disqus_url'] = f"{settings.DISQUS_MY_DOMAIN_APP_IS_BLOG}{self.object.get_absolute_url()}"
        context['disqus_title'] = f"{self.object.slug}"
        return context


#--- ArchiveView (날짜 Generic View)
class PostAV(ArchiveIndexView):
    template_name = "blog/post_archive.html"
    model = Post
    date_field = 'modify_dt'


class PostYearAV(YearArchiveView):
    template_name = "blog/post_archive_year.html"
    model = Post
    date_field = 'modify_dt'
    make_object_list = True


class PostMonthAV(MonthArchiveView):
    template_name = "blog/post_archive_month.html"
    model = Post
    date_field = 'modify_dt'


class PostDayAV(DayArchiveView):
    template_name = "blog/post_archive_day.html"
    model = Post
    date_field = 'modify_dt'


class PostTodayAV(TodayArchiveView):
    template_name = "blog/post_archive_day.html"
    model = Post
    date_field = 'modify_dt'


#--- Tag View (TemplateView : DB/Model과 연관없이 Template만 표현할 때)
class TagCloudTV(TemplateView):
    template_name = 'taggit/taggit_cloud.html'


class TaggedObjectLV(ListView):
    template_name = 'taggit/taggit_post_list.html'
    model = Post
    context_object_name = 'POST_LIST'    # context 변수명 지정 (템플릿 *.html에서 사용)

    def get_queryset(self):
        return Post.objects.filter(tags__name=self.kwargs.get('tagkey'))

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['tagname'] = self.kwargs['tagkey']
        return context


#--- FormView (Form 형식 View)
class SearchFormView(FormView):
    template_name = 'blog/post_search.html'
    form_class = PostSearchForm 
    
    def form_valid(self, form): 
        searchWord = form.cleaned_data['search_word']
        post_list = Post.objects.filter(Q(title__icontains=searchWord) | Q(description__icontains=searchWord) | Q(content__icontains=searchWord)).distinct()

        context = {} 
        context['form'] = form 
        context['search_term'] = searchWord 
        context['object_list'] = post_list 

        return render(self.request, self.template_name, context)   # No Redirection
