# Mortal Kombat 2 SNES with Vue.js

This is a project for educational purposes, it is a clone of the Mortal Kombat 2 SNES champion select screen, made with Vue.js and CSS.


## Docker installation (Vite)

```bash
sudo docker build -t YOUR_CUSTOM_TAG .   
```

```bash
sudo docker run --rm -it YOUR_CUSTOM_TAG 
```

The project will be serve with Vite and you have to use the Network IP of the container to access the project.

NOTE that the docker command don't include -p flag, because the port is already exposed in the Dockerfile.

Created by Harol Restrepo @hstev