# Stage 1: Build the React application 
FROM node:latest as build

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn 

# Stage 2: Serve the React application using Nginx
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Copy the default nginx.conf provided by the docker image
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]