# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy application files into the container
COPY app.js .

# Expose the application port (4000 now)
EXPOSE 4000

# Command to run the application
CMD ["node", "app.js"]
