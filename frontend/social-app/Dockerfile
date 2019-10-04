#
# BUILD
#
FROM mhart/alpine-node:11 AS builder
COPY ./package-lock.json .
COPY ./package.json .
COPY ./tsconfig.json .
COPY ./.env .
COPY ./public ./public
COPY ./src ./src
RUN yarn
RUN yarn run build

#
# PROD
#
FROM mhart/alpine-node
RUN yarn global add serve
COPY --from=builder ./build .
CMD ["serve", "-p", "80", "-s", "."]