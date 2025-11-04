FROM node:23-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose frontend port (usually 3000)
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "run", "build"] && ["npm", "start"]
