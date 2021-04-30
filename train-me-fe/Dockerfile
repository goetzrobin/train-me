FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN npm i && npm run build

# nginx state for serving static production build
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist/train-me-fe .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]