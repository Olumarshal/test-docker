FROM node:21

WORKDIR /usr/sr/app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]