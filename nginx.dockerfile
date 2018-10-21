FROM nginx:alpine
LABEL author="SMA"
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
