FROM node:14-alpine

ENV NODE_OPTIONS=--max-old-space-size=1024

COPY . /usr/src/app

WORKDIR /usr/src/app

CMD ["yarn", "start"]
