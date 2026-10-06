.PHONY: build
build:
	echo "FROM scratch" > Dockerfile
	docker build --tag my-scratch-image .
	-rm Dockerfile

# creates our image in dockerhub
.PHONY: push-dockerhub
push-dockerhub:
	docker tag buga-app:7 bugakun/buga-app # defaults to latest
	docker push bugakun/buga-app

	docker tag buga-app:7 bugakun/buga-app:v7 # defaults to latest
	docker push bugakun/buga-app:v7


.PHONY: push-github-packages
push-github-packages:
	docker tag buga-app:7 gh	cr.io/madhavgupta95/buga-app:latest
	docker push ghcr.io/madhavgupta95/buga-app:latest

	docker tag buga-app:7 ghcr.io/madhavgupta95/buga-app:v7
	docker push ghcr.io/madhavgupta95/buga-app:v7

.PHONY: docker-stop
docker-stop:
	-docker stop buga-app
	-docker stop db

.PHONY: docker-rm
docker-rm:
	-docker rm buga-app
	-docker rm db


### DOCKER CLI COMMANDS
DOCKERCONTEXT_DIR:=.
DOCKERFILE_DIR:=.

.PHONY: docker-build-all
docker-build-all:
	docker build -t buga-app:7 -f ${DOCKERFILE_DIR}/Dockerfile ${DOCKERCONTEXT_DIR}


DATABASE_URL:=postgres://postgres:password@db:5432/postgres

.PHONY: docker-run-all
docker-run-all:
	echo "$$DOCKER_COMPOSE_NOTE"

#stop and remove all the containers to avoid all name conflicts
	-$(MAKE) docker-stop
	-$(MAKE) docker-rm

	docker network create buga-network || true

	docker run -d \
		--name db \
		--network buga-network \
		-e POSTGRES_PASSWORD=password \
		-v pgdata:/var/lib/postgresql/data \
		-p 5432:5432 \
		--restart unless-stopped \
		postgres:15.1-alpine
	
	docker run -d \
		--name buga-app \
		--network buga-network \
		-e DATABASE_URL=${DATABASE_URL} \
		-p 3000:3000 \
		--restart unless-stopped \
		--link=db \
		buga-app:7

# DOCKER COMPOSE COMMANDS
DEV_COMPOSE_FILE := docker-compose.yaml
DEBUG_COMPOSE_FILE := docker-compose-debug.yml

.PHONY: compose-up-build
compose-up-build:
	docker compose -f $(DEV_COMPOSE_FILE) up --build

.PHONY: compose-up-debug-build
compose-up-debug-build:
	docker compose -f $(DEV_COMPOSE_FILE) -f $(DEBUG_COMPOSE_FILE) up --build

.PHONY: compose-down
compose-down:
	docker compose -f $(DEV_COMPOSE_FILE) down



# DOCKER COMPOSE TEST

TEST_COMPOSE_FILE := docker-compose-test.yml

.PHONY: run-tests
run-tests:
	docker compose -f ${DEV_COMPOSE_FILE} -f ${TEST_COMPOSE_FILE} run --build buga-app