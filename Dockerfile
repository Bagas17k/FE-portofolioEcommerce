FROM nginx:stable
MAINTAINER Bagas  "kurniajati@alterra.id"

RUN mkdir -p /home/coba-coba/www/FE-portofolioEcommerce/build 
RUN mkdir -p /home/coba-coba/log/nginx


COPY default.conf /etc/nginx/conf.d/

ADD build/. /home/coba-coba/www/FE-portofolioEcommerce/build 

WORKDIR /home/coba-coba/www/FE-portofolioEcommerce/build 
