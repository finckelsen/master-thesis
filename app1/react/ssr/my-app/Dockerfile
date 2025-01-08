# Step 1: Start with an official Node.js image (this is your app's base environment)
FROM node:18-alpine

# Step 2: Set the working directory for your app inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (this will allow us to install dependencies)
COPY package.json package-lock.json ./

# Step 4: Install the app’s dependencies
RUN npm install

# Step 5: Copy all your app files into the container
COPY . .

# Step 6: Build your Next.js app (this creates the production version of your app)
RUN npm run build

# Step 7: Expose port 3000 (this is the default port Next.js uses)
EXPOSE 3000

# Step 8: Start your app (this launches the app when the container starts)
CMD ["npm", "start"]
