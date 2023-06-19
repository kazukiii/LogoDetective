build:
	docker compose build --no-cache --force-rm

up:
	supabase start && docker compose up -d

down:
	supabase stop && docker compose down

logs:
	docker compose logs -f

ps:
	docker compose ps

fmt-frontend:
	cd frontend && npm run fix

fmt-backend:
	cd backend && npm run fix

fmt:
	@make fmt-frontend
	@make fmt-backend

lint-frontend:
	cd frontend && npm run lint

lint-backend:
	cd backend && npm run lint

lint:
	@make lint-frontend
	@make lint-backend

.PHONY: build up down logs ps
