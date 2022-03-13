#cd /home/sws/swsapp/mywebsite/stevenlabs/01_DjangoExampleWebApp/ExamBlogWebSite

sudo nginx -s stop

#sudo uwsgi --stop /tmp/emperor.pid
sudo uwsgi --stop /home/sws/swsapp/mywebsite/stevenlabs/01_DjangoExampleWebApp/ExamBlogWebSite/logs/uwsgi/myDjangoWebSvr_emperor.pid
