FROM node:14.17.0
WORKDIR /code
ENV port=80
COPY package.json /code/package.json
RUN npm install
COPY ./dist/src/. /code
CMD [ "node","app.js"]

