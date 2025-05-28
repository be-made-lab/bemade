FROM --platform=linux/amd64 node:18-bullseye

# Dépendances pour sharp
RUN apt-get update && apt-get install -y \
  build-essential \
  python3 \
  git \
  libvips \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/app

COPY package*.json ./
RUN npm install --include=optional sharp
RUN npm install pg

COPY . .

EXPOSE 1337
CMD ["npm", "run", "develop"]