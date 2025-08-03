FROM php:8.3-fpm

# Встановлення системних залежностей
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    && docker-php-ext-install pdo_mysql mbstring zip exif pcntl bcmath gd

# Встановлення Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Робоча директорія
WORKDIR /var/www

# Копіювання локального коду (опціонально, якщо не використовуєш volume)
# COPY . .

# Права доступу (опціонально)
# RUN chown -R www-data:www-data /var/www

# Вказати команду за замовчуванням
CMD ["php-fpm"]