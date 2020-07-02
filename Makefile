.PHONY: update-site

update-site:
	gsutil cp -a public-read fair.io/index.html gs://fair.io
