# build
FROM node:lts-alpine as build

WORKDIR /app
COPY ./ .
RUN npm ci --silent

RUN npm run build

# app
FROM node:lts-alpine

WORKDIR /app
COPY --from=build /app/build/ .
COPY ./default.config.yaml .

EXPOSE 5000

CMD ["node", "bundle.js"]
