.PHONY: docker-setup
docker-setup:
	docker build -f setup.dockerfile -t magnet-setup:latest .

.PHONY: docker-build
docker-build: docker-setup
	docker build -t magnet:latest .

.PHONY: docker-run
docker-run:
	docker run -p 127.0.0.1:8000:8000 -p 127.0.0.1:6006:6006 magnet:latest

.PHONY: docker-it
docker-it:
	docker run -it \
	-e NODE_OPTIONS=--openssl-legacy-provider \
	-p 6006:6006 \
	-v dnd-kit:/toolboard/dnd-kit \
	magnet:latest \
	yarn start:storybook