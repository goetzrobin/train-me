FROM node:10 AS builder
WORKDIR /app
COPY ./package.json ./package.json
RUN npm i
COPY . .
RUN npm run ng build -- --configuration=production

# nginx state for serving static production build
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist/train-me-fe .
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]