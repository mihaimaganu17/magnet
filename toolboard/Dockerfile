FROM magnet-setup:latest

# Create a directory
RUN mkdir toolboard

# install app
COPY hello.py /toolboard
WORKDIR /toolboard

# install react, react-dom and nextjs
RUN npm install react@19.2.0 react-dom@19.2.0 next@16.0.1

# final configuration
ENV FLASK_APP=hello
# needed in order to run dnd storybook
ENV NODE_OPTIONS=--openssl-legacy-provider
EXPOSE 8000
CMD ["flask", "run", "--host", "0.0.0.0", "--port", "8000"]