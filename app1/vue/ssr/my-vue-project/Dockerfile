# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock) into the container
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your app's source code into the container
COPY . .

# Step 6: Build your Nuxt app (server-side rendering)
RUN npm run build

# Step 7: Expose port 3000 (default for Nuxt SSR)
EXPOSE 3000

# Step 8: Run the built server
CMD ["node", ".output/server/index.mjs"]
