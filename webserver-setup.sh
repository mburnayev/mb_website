sudo apt-get update
sudo apt-get install nginx -y
sudo apt-get install firewalld -y
sudo fuser -k 80/tcp
sudo firewall-cmd --add-service=http --permanent
# sudo fuser -k 443/tcp
# sudo firewall-cmd --add-service=https --permanent
sudo firewall-cmd --reload
sudo mv default /etc/nginx/sites-enabled/default
sudo systemctl enable --now nginx

# If an issue occurs:
# sudo service nginx stop
# sudo service nginx status
# cat /var/log/nginx/error.log 
# sudo vim /etc/nginx/sites-enabled/default <- issue (caused by you) is probably here
# [fix issue]
# sudo service nginx start