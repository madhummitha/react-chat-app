FROM node:20.11.1-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm i

COPY  . .

EXPOSE 3000

cmd ["npm", "start"]