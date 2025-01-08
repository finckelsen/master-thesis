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

# Step 6: Build your Vue app (production build)
RUN npm run build

# Step 7: Install a simple HTTP server to serve your static files
RUN npm install -g serve

# Step 8: Expose port 5000 (default for 'serve')
EXPOSE 8080

# Step 9: Serve the app using 'serve' command
CMD ["serve", "-s", "dist", "-l", "8080"]
