# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy your static files to the appropriate directory
COPY /frontend/portfolio /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the Nginx service when the container runs
CMD ["nginx", "-g", "daemon off;"]

