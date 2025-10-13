.PHONY: docker-build
docker-build:
	docker build -t magnet:latest .

.PHONY: docker-run
docker-run:
	docker run -p 127.0.0.1:8000:8000 magnet:latest


.PHONY: docker-it
docker-it:
	docker run -it magnet:latest /bin/bash