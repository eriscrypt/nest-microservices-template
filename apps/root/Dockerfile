FROM node:18 as development

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma

RUN yarn

COPY . .

RUN yarn build root

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/root/main"]