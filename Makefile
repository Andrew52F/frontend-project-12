install:
	npm ci & make -C frontend install

build:
	npm run build

start-frontend:
	make -C frontend start

start-backend:
	npx start-server -p 5001

start:
	npm start

deploy:
	git push heroku main

lint:
	make -C frontend lint
test-e2e:
	make start & npx playwright test --trace on
