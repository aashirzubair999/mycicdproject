# Use official Nginx image
FROM nginx:alpine

# Remove default Nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy your HTML files into Nginx's public folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
