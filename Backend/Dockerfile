FROM node:16

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3001

CMD ["yarn", "start"]
