#-*- coding: utf-8 -*-

"""
WSGI config for mysite project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/
"""

import os
import sys
from pathlib import Path
from django.core.wsgi import get_wsgi_application

# [추가] 프로젝트의 Root 경로를 PATH 변수에 추가합니다.
BASE_DIR = Path(__file__).resolve().parent.parent
path = BASE_DIR
if path not in sys.path:
    sys.path.append(path)

#os.environ['DJANGO_SETTINGS_MODULE'] = 'mysiteProject.settings'    # 장고 2.x
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysiteProject.settings')    # 장고 3.x ~

application = get_wsgi_application()
