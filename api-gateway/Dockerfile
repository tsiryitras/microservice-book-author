FROM node:20
RUN mkdir -p /usr/src/api-gateway
WORKDIR /usr/src/api-gateway
ADD . /usr/src/api-gateway
COPY package*.json ./
COPY dist ./dist/
COPY tsconfig*.json ./
COPY nest-cli.json ./ 
COPY .env ./ 
RUN npm install -g npm@10.2.0
CMD npm install && npm run start 