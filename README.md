# node-cloud-storage

## Install

```sh
cd backend; npm install;
cd frontend; npm install;
```

## Post-install

```sh
docker pull mariadb
docker run mariadb -d -p 3306:3306
```

## Development 

```sh
cd frontend; npm run watch;
cd backend; npm run start:dev;
```