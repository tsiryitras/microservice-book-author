FROM node:20
RUN mkdir -p /usr/src/book-service
WORKDIR /usr/src/book-service
ADD . /usr/src/book-service
COPY package*.json ./
COPY dist/ ./dist/
COPY tsconfig*.json ./
COPY nest-cli.json ./ 
COPY .env ./ 
CMD npm install && npm run start 