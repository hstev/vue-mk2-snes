# Definimos la imagen base
FROM node:18-alpine

RUN mkdir -p /home/app

# Establecemos el directorio de trabajo
WORKDIR /home/app

# Copiamos los archivos de nuestro proyecto a la imagen
COPY package*.json ./
COPY . .

# Instalamos las dependencias del proyecto
RUN npm install

# Exponemos el puerto 5173 para acceder a la aplicación
EXPOSE 3000

# Iniciamos la aplicación
CMD ["npm", "start"]
