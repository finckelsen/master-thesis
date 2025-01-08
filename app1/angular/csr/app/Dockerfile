# Stage 1: Build Angular App
FROM node:latest AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies using npm ci for a clean slate
RUN npm ci

# Build the Angular Universal app (browser + server)
RUN npm install -g @angular/cli

COPY .  . 

RUN npm run build --configuration=production
# Set working directory
FROM nginx:latest

COPY ./nginx.conf /etx/nginx/conf.d/default.conf

COPY --from=build /app/dist/app/browser /usr/share/nginx/html

EXPOSE 80
