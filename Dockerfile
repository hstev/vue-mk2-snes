FROM node:20.9-alpine
WORKDIR /app
COPY . .
# RUN npm install -g vite
RUN npm install 
# CMD ["npm", "run", "dev-docker"]