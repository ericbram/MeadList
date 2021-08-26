FROM node as builder

COPY package.json package-lock.json ./

RUN npm ci && mkdir -p /ng-app/dist && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --configuration production

### Stage 2: Setup ###

FROM nginxinc/nginx-unprivileged:stable-alpine

# Clear all original files
USER root
RUN rm -rf /usr/share/nginx/html/*
USER nginx

COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /ng-app/dist/meadlist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]