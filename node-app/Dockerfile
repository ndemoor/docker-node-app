# Dockerfile: node app
FROM node:0.10.32
MAINTAINER Nils De Moor

# add our application code
ADD . /var/www
WORKDIR /var/www

# run build steps
RUN npm install --production

# Create mount point for application data
VOLUME /var/data

# Launch memcached when launching the container
CMD ["npm", "start"]
