### Node Cache Stage
FROM node:16-alpine as node_cache_transactions_dev
# Configure path
WORKDIR /src/
RUN chmod -R 777 /src/
# Install app dependecies
USER node
COPY ./package.json .
# Install dependencies
RUN yarn install


### App Stage
FROM node:16-alpine
ENV CHOKIDAR_USEPOLLING=true

# Setting up envs
ENV N_PATH "/usr/src/app"
ENV N_USER "node"
# Create app dir
WORKDIR ${N_PATH}
RUN chmod -R 777 ${N_PATH}
# Adding files to project
COPY ./ .
COPY --chown=${N_USER}:${N_USER} --from=node_cache_transactions_dev /src/node_modules ./node_modules
COPY --chown=${N_USER}:${N_USER} --from=node_cache_transactions_dev /src/yarn.lock ./yarn.lock
RUN chown ${N_USER}:${N_USER} node_modules
RUN find ./ -name node_modules -type d -prune -o -type f -print0 | xargs -0 chown -R ${N_USER}:${N_USER}

# Setting up logs dir
RUN mkdir -p /home/${N_USER}/.npm/_logs
RUN chown -R ${N_USER}:${N_USER} /home/${N_USER}/.npm

USER ${N_USER}
CMD [ "yarn", "dev" ]

EXPOSE 3000 9229
