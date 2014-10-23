# Dockerfile: memcached
FROM ubuntu:14.04

# install memcached
RUN apt-get update -y
RUN apt-get install -y memcached

# run as user daemon (memcached doesn't allow to run as root)
USER daemon

# expose memcached port
EXPOSE 11211

# Launch memcached when launching the container
# CMD [ "memcached" ]
ENTRYPOINT ["memcached"]
