# Stage 1: Build
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json from the root directory
COPY ../package.json ../package-lock.json ./

# Install dependencies
RUN npm install

# Copy the Next.js app code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Production Image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy build artifacts from the builder stage
COPY --from=builder /app/ ./

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
