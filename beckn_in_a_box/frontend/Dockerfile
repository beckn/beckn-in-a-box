# Layer 1: Telling Docker to use the node:17-alpine image as the base image for the container.
FROM node:17-alpine

# Layer 2: Telling Docker to create a directory called `app` in the container and set it as the working directory.
WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

# Layer 6: Telling Docker that the container will listen on port 3000.
EXPOSE 3002

# Layer 7: Telling Docker to run the `npm start` command when the container is started.
CMD ["npm", "start"]