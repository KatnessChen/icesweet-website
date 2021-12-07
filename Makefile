develop:
	npm run generate
	docker build -t toyokoyo199/icebaby-website:1.0.8 .
	docker push toyokoyo199/icebaby-website:1.0.8
release:
	npm run generate
	docker build -t toyokoyo199/icesweet-website:1.0.8 .
	docker push toyokoyo199/icesweet-website:1.0.8
