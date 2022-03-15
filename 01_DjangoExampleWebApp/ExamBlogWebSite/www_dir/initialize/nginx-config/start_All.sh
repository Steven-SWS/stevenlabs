####################
# /home/sws/swsapp/mywebsite/stevenlabs/01_DjangoExampleWebApp/ExamBlogWebSite/start_All.sh
#    >> touch /home/sws/swsapp/mywebsite/stevenlabs/01_DjangoExampleWebApp/ExamBlogWebSite/start_All.sh
#    >> chmod 755 /home/sws/swsapp/mywebsite/stevenlabs/01_DjangoExampleWebApp/ExamBlogWebSite/start_All.sh
#    >> vi /home/sws/swsapp/mywebsite/stevenlabs/01_DjangoExampleWebApp/ExamBlogWebSite/start_All.sh
####################

#cd /home/sws/swsapp/mywebsite/stevenlabs/01_DjangoExampleWebApp/ExamBlogWebSite

sudo nginx
#sudo nginx -s reload

#sudo uwsgi --emperor /etc/uwsgi/vassals --uid sws --gid sws
#sudo uwsgi --ini /etc/uwsgi/uwsgi_emperor.ini
sudo uwsgi --ini /etc/uwsgi/myDjangoWeb_uwsgi_emperor.ini
