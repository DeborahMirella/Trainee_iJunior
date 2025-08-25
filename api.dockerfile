# 1. Usa a imagem base
FROM node:18-alpine

# 2. Define o diretório de trabalho
WORKDIR /usr/src/app

# 3. Copia arquivos de dependência
COPY package.json ./
COPY package-lock.json ./

# 4. Copia a pasta prisma antes da instalação
COPY prisma ./prisma

# 5. Instala dependências
RUN npm install

# 6. Copia o restante do código
COPY . .

# 7. Gera o Prisma Client (só por segurança extra, já que o postinstall roda)
RUN npx prisma generate

# 8. Comando padrão do container
CMD npx prisma migrate deploy && npm run dev
