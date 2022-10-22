FROM node:16 as build

WORKDIR /server

COPY ./server/package*.json /server/

RUN npm i

COPY ./server /server