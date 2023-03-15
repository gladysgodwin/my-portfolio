# Use an official nginx runtime as the parent image
FROM nginx:alpine

# Set the working directory to /frontend
WORKDIR /frontend

# Copy the application code to the container
COPY portfolio/ .

# Replace the default nginx configuration file with our own
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port on which the application will run
EXPOSE 80

# Set the command to start nginx
CMD ["nginx", "-g", "daemon off;"]
