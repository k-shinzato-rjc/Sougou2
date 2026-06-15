FROM node:20-alpine
WORKDIR /app
# コンテナ起動時に依存関係をインストール
COPY package*.json ./
RUN npm install
COPY . .
# 開発サーバー起動
CMD ["npm", "run", "dev"]