FROM magnet-setup:latest

# Create a directory
RUN mkdir toolboard
WORKDIR /toolboard

# install app
COPY hello.py .

# final configuration
ENV FLASK_APP=hello
EXPOSE 8000
CMD ["flask", "run", "--host", "0.0.0.0", "--port", "8000"]