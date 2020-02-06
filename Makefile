#!/bin/bash

# Variables
container_frontend = helionogueir-taskmanager-frontend
container_backend = helionogueir-taskmanager-backend
container_mongodb = helionogueir-taskmanager-mongodb

# Default
all: up

# Commands
up:
	docker-compose up --remove-orphans --detach
stop:
	docker-compose stop
down:
	docker-compose down
restart:
	docker-compose restart $(container_frontend)
	docker-compose restart $(container_backend)
	docker-compose restart $(container_mongodb)
reset:
	docker-compose down --rmi all --volumes
logs:
	docker-compose logs --timestamps --follow --tail="all"
bash.frontend:
	docker exec -it $(container_frontend) /bin/bash
bash.backend:
	docker exec -it $(container_backend) /bin/bash
bash.mongodb:
	docker exec -it $(container_mongodb) mongo