# syntax=docker/dockerfile:1
FROM ubuntu:22.04

# ---------------- NODE Installation -------------------

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# update the repository sources list
# and install dependencies
RUN apt-get update \
    && apt-get install -y curl \
    && apt-get -y autoclean

# nvm environment variables
ENV NVM_DIR=/usr/local/nvm
ENV NODE_VERSION=24.10.0

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH=$NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH=$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# confirm installation
RUN node -v
RUN npm -v

# install corepack to enable yarn
RUN npm install -g corepack

# TMP: Copy dnd kit and install it
RUN apt-get install -y git
RUN git clone https://github.com/mihaimaganu17/dnd-kit.git
WORKDIR /dnd-kit
RUN yarn install
WORKDIR /

# --------------- Flask Instalation -----------------

# install app dependencies
RUN apt-get update && apt-get install -y python3 python3-pip
RUN pip install flask==3.0.*
