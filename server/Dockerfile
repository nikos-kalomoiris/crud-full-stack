FROM node:16 as build

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]