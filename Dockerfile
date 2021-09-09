
# Stage 1

FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY /ordersApp /app

RUN cd /app

RUN npm install
COPY . /app
ARG env=prod
RUN npm run build --prod

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/ordersApp /usr/share/nginx/html
COPY ordersApp/nginx-custom.conf /etc/nginx/conf.d/default.conf