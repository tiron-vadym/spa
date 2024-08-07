# SPA

API service for SPA written on DRF

## Installing using GitHub

Install PostgresSQL and create db

```shell
git clone https://github.com/tiron-vadym/spa
cd library_API
python -m venv venv
source venv/Scripts/activate
pip install -r requirements.txt
set DB_HOST=<your db hostname>
set DB_NAME=<your db name>
set DB_USER=<your db username>
set DB_PASSWORD=<your db user password>
set SECRET_KEY=<your secret key>
python manage.py migrate
python manage.py runserver
```

## Run with docker

Docker should be installed

```shell
docker-compose --build
docker-compose up
```

## Getting access(JWT authenticated)

* Used email instead of username
* Create user via /client/register
* Get access token via /client/token

## Endpoints

- Admin Panel: `/admin/`
- Service API: `/service/comments/`
- Client API: `/customer/`

## Debugging and Documentation

- Debug Toolbar: `/__debug__/`
- API Schema: `/api/schema/`
- Swagger Documentation: `/api/swagger/`
- ReDoc Documentation: `/api/redoc/`
