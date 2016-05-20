# fair.io

This directory contains the https://fair.io website sources.

## Updating

Update the files in this directory. There is no static site generator;
just edit the files directly. Note that some wording is duplicated
between index.html and ../README.md; be sure to keep them in sync.

You need to have the `aws` CLI tool configured with an account that
can write to the `fair.io` S3 bucket. Run `aws configure` to set this
up.

To update https://fair.io, run `make update-site`.
