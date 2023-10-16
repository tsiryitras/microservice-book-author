FROM node:20
RUN mkdir -p /usr/src/author-service
WORKDIR /usr/src/author-service
ADD . /usr/src/author-service
COPY package*.json ./
# COPY /dist ./dist/
COPY tsconfig*.json ./
COPY nest-cli.json ./ 
COPY .env ./ 
CMD npm install && npm run start 