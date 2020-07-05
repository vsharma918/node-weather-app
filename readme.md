
git init for initial sertup
git add . to add file to stage mode
git status to get status
git commit -m "update readme with all instructions"


git-scm.com download git client
git base open
move to directory of project
check SSH key available ls -a -l ~/.ssh
generate ssh key ssh-keygen -t rsa  -b 4096 -C "vsharma9183@gmail.com"
check ssh agent eval $(ssh-agent -s)
add identity ssh-add ~/.ssh/id_rsa

Set public  key in github from .ssh/id_rsa.pub 
run command ssh -T git@github.com
git push -u origin master
==================================heroku setting===============\
heroku -v
heroku login
heroku keys:add
heroku create weather-app