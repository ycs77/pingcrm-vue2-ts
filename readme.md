# Ping CRM (Vue 2 Options API x TS)

PingCRM Vue x TS：Options API demo | [Composition API demo](https://github.com/ycs77/pingcrm-vue2-ts/tree/compsition-api)

---

A demo application to illustrate how Inertia.js works.

![](https://raw.githubusercontent.com/inertiajs/pingcrm-vue2/master/screenshot.png)

## Installation

Clone the repo locally:

```sh
git clone https://github.com/ycs77/pingcrm-vue2-ts.git
cd pingcrm-vue2-ts
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies:

```sh
yarn
```

Build assets:

```sh
yarn dev
```

Setup configuration:

```sh
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Create an SQLite database. You can also use another database (MySQL, Postgres), simply update your configuration accordingly.

```sh
touch database/database.sqlite
```

Run database migrations:

```sh
php artisan migrate
```

Run database seeder:

```sh
php artisan db:seed
```

Run the dev server (the output will give the address):

```sh
php artisan serve
```

Run the SSR server:

```sh
yarn ssr:serve
```

You're ready to go! Visit Ping CRM in your browser, and login with:

- **Username:** johndoe@example.com
- **Password:** secret

## Running tests

To run the Ping CRM tests, run:

```
phpunit
```
