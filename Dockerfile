FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

FROM node:18-alpine

WORKDIR /app
COPY package.json .
RUN yarn --only-production
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "yarn", "start:prod" ]
