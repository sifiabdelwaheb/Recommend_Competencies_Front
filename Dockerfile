FROM node:14

ARG DEFAULT_PORT=80

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# 80 Is the default value and can be edited with --env PORT=?
ENV PORT $DEFAULT_PORT

# Dollar sign indicate docker that's name of env variable
EXPOSE $PORT

# VOLUME [ "/app/node_modules" ]

CMD [ "npm", "start" ]