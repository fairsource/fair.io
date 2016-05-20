.PHONY: update-site

update-site:
	aws s3 sync --acl public-read --region us-west-2 ./fair.io s3://fair.io
