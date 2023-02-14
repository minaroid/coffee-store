#stage 1
FROM node:16.14.0 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:stable-alpine
COPY --from=node /app/dist/coffee-store /usr/share/nginx/html
