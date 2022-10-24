FROM node:16 as build

WORKDIR /server

COPY package*.json ./

COPY prisma ./prisma

RUN npm install

RUN npx prisma generate

COPY . .

CMD ["npm", "run", "dev"]