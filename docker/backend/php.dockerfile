FROM php:8.1.17-fpm-alpine

WORKDIR /var/www/html

COPY school-backend .

RUN docker-php-ext-install pdo pdo_mysql
# change permissions and ownership
RUN chown -R www-data:www-data /var/www/html

# for passport to work
RUN ["php", "/var/www/html/artisan", "passport:key"]
RUN chown -R www-data:www-data /var/www/html/storage/oauth-public.key
RUN chmod 644 /var/www/html/storage/oauth-public.key
