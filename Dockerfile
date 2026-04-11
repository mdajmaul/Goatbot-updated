FROM node:18

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --omit=dev && npm cache clean --force

COPY . .

ENV PORT=5000
EXPOSE 5000

CMD ["node", "index.js"]
