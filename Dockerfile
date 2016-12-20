from alpine:3.1

RUN apk add --update nodejs

RUN mkdir -p /usr/bookapp
COPY . /usr/bookapp
WORKDIR /usr/bookapp

RUN npm install --production
ENV PORT 5000
EXPOSE $PORT
CMD ["npm","start"]
