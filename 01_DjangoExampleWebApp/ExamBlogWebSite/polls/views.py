#-*- coding: utf-8 -*-

import logging
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.views import generic
from polls.models import Choice, Question


# logger 인스턴스 생성
logger = logging.getLogger(__name__)
logDEBUG = 10
logINFO = 20
logWARN = 30
logERROR = 40
logCRITICAL = 50


#--------------------------------------------------------
#---------- http://localhost:8000/polls/
#--------------------------------------------------------
#--- Function-based View
def index(request):
    template_name = 'polls/index.html'
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context_object_name = 'question_list'    # or 기본값 사용 : 'object_list'
    context = {context_object_name: latest_question_list}
    return render(request, template_name, context)

#--- Class-based View
class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'question_list'    # or 기본값 사용 : 'object_list'

    def get_queryset(self):
        """최근 생성된 질문 5개를 리턴"""
        return Question.objects.order_by('-pub_date')[:5]


#--------------------------------------------------------
#---------- http://localhost:8000/polls/$99/
#--------------------------------------------------------
#--- Function-based View
def detail(request, question_id):
    template_name = 'polls/detail.html'
    question = get_object_or_404(Question, pk=question_id)
    context_object_name = 'question'    # or 기본값 사용 : 'object'
    context = {context_object_name: question}
    return render(request, template_name, context)

#--- Class-based View
class DetailView(generic.DetailView):
    template_name = 'polls/detail.html'
    model = Question
    context_object_name = 'question'    # or 기본값 사용 : 'object'
    

#--------------------------------------------------------
#---------- http://localhost:8000/polls/$99/results/
#--------------------------------------------------------
#--- Function-based View
def results(request, question_id):
    template_name = 'polls/results.html'
    question = get_object_or_404(Question, pk=question_id)
    context_object_name = 'question'    # or 기본값 사용 : 'object'
    context = {context_object_name: question}
    return render(request, template_name, context)

#--- Class-based View
class ResultsView(generic.DetailView):
    template_name = 'polls/results.html'
    model = Question
    context_object_name = 'question'    # or 기본값 사용 : 'object'
    

#--------------------------------------------------------
#---------- http://localhost:8000/polls/$99/vote/
#--------------------------------------------------------
#--- Function-based View
def vote(request, question_id):
    logger.debug("vote().question_id: %s" % question_id)
    question = get_object_or_404(Question, pk=question_id)

    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # 설문 투표 폼을 다시 보여준다. (에러메시지 포함)
        context = {
            'question': question,
            'error_message': "투표가 정상적으로 되지 않은것 같아요. 다시한번 투표해주세요.",
        }
        template_name = 'polls/detail.html'
        return render(request, template_name, context)
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # POST 데이터를 정상적으로 처리하였으면,
        # 항상 HttpResponseRedirect를 리턴하여 리다이렉션 처리함
        # reverse 함수는 urls.py 를 역으로 찾아서 최종 URL을 만들어줌 (url String에 변수가 있으면 Argument로 넘겨줌)
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
