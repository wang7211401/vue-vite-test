FROM node:14-alpine as builder
WORKDIR /app

COPY package.json package-lock.json /app
RUN npm install

COPY . /app
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder app/dist /usr/share/nginx/html