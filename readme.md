git base open
move to directory of project
check SSH key available ls -a -l ~/.ssh
generate ssh key ssh-keygen -t rsa  -b 4096 -C "vsharma9183@gmail.com"
check ssh agent eval $(ssh-agent -s)
add identity ssh-add ~/.ssh/id_rsa