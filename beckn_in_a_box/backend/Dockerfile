FROM node:17-alpine

# We use nodemon to restart the server every time there's a change
RUN npm install -g nodemon

# Set the working directory to the root of your Node.js application code
WORKDIR /server/src/app

COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3001

# Use script specified in package.json
CMD ["npm", "run", "dev"]
