FROM magnet-setup:latest

# Create a directory
RUN mkdir toolboard

# install app
COPY hello.py ./toolboard
WORKDIR ./toolboard

# final configuration
ENV FLASK_APP=hello
# needed in order to run dnd storybook
ENV NODE_OPTIONS=--openssl-legacy-provider
EXPOSE 8000
CMD ["flask", "run", "--host", "0.0.0.0", "--port", "8000"]