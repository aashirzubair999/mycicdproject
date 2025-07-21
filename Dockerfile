# Step 1: Build the app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# Install dependencies and build
RUN npm install
RUN npm run build

# Step 2: Serve the build with nginx
FROM nginx:alpine

# Copy the build output to nginx's public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a default nginx config (optional)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
