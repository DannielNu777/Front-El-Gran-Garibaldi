# Copia primero los archivos necesarios
COPY package.json package-lock.json /app/

# Instala las dependencias
RUN npm ci

# Copia el resto del código
COPY . /app

# Construye la aplicación
RUN npm run build
