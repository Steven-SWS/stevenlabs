#----------------------------------------
# cd /home/sws/swsapp/mywebsite/stevenlabs/01_DjangoExampleWebApp/ExamBlogWebSite
# touch Dockerfile
# vi Dockerfile
#----------------------------------------

# 생성하는 docker의 python 버전
FROM python:3.9.7

ENV PYTHONUNBUFFERED 1

# docker 안에서 vi,nano 설치는 선택사항
RUN apt-get -y update
RUN apt-get -y install vim
RUN apt-get -y install nano

# docker 안에 /srv/docker-django-server 디렉토리 생성 (/srv 는 기본 디렉토리)
RUN mkdir /srv/docker-django-server

# 현재 디렉토리를 srv/docker-django-server 디렉토리에 복사
ADD . /srv/docker-django-server

# 작업 디렉토리 설정
WORKDIR /srv/docker-django-server

# pip 업그레이드
RUN pip install --upgrade pip

# 필수 패키지 설치
RUN pip install -r requirements.txt
RUN pip install django-taggit
RUN pip install django-taggit-templatetags2
RUN pip install django-widget-tweaks
RUN pip install cx_Oracle

# 데이터베이스 변경사항 추적/생성
RUN python manage.py makemigrations blog

# 데이터베이스 변경사항 반영
RUN python manage.py migrate blog

# Run Server - WAS Port 30001(WSL) or 30002(VM)
EXPOSE 30002
CMD ["python", "manage.py", "runserver", "0.0.0.0:30002"]

