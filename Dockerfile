FROM nodejs

WORKDIR /kishan

COPY . .

RUN npm install && cd client && npm install && npm run build

CMD [ "npm start" ]
