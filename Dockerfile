FROM node


WORKDIR /usr/app

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

COPY tsconfig.json ./

COPY . .

RUN npm install

RUN npx prisma generate


EXPOSE 4000

CMD ["npm", "run", "dev"]