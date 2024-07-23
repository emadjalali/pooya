FROM node:20-alpine3.17

RUN mkdir -p /usr/src/app/node_modules
WORKDIR /usr/src/app

RUN apk add git

COPY package*.json ./

RUN npm install -g npm
# RUN npm install  --omit=dev
RUN npm install
# RUN npm audit --audit-level=critical fix

COPY  . .

# RUN npm link webpack

RUN npm run build

RUN npm install pm2 -g --silent

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
#USER node

# Expose the listening port
EXPOSE 3000

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start"]
