FROM composer:latest

WORKDIR /var/www/html

COPY school-backend .

ENTRYPOINT [ "composer", "--ignore-platform-reqs"]
