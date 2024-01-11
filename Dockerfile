FROM node:20.10.0-alpine as build-deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build

FROM node:20.10.0-alpine
WORKDIR /app
COPY --from=build-deps /app/dist /app
COPY --from=build-deps /app/static /app/static
EXPOSE 3000
CMD ["node", "index.js"]