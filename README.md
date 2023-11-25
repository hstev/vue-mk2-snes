# Mortal Kombat 2 SNES with Vue.js

This is a project for educational purposes, it is a clone of the Mortal Kombat 2 SNES 'Choose your fighther' screen.


## Docker installation

```bash
$ docker build -t CONTAINER_NAME .   
```

```bash
$ docker run --rm -itd --rm -v ${pwd}/src:/app/src CONTAINER_NAME 
```

```bash
$ docker exec --it {container_id} sh
```

```bash
npm run dev-docker 
```

## Normal installation 

```bash
npm i && npm run dev 
```