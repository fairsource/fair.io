# fair.io

This directory contains the https://fair.io website sources.

## Editing

1. Clone this repository to your computer.
2. Open the index.html file in a text editor.
3. Open the index.html file in a browser (in a separate window).
4. Make changes in your text editor and reload the browser to see them take effect.
5. When done, submit a pull request with your changes.

## Updating

Update the files in this directory. There is no static site generator;
just edit the files directly. Note that some wording is duplicated
between index.html and ../README.md; be sure to keep them in sync.

You need to have the `aws` CLI tool configured with an account that
can write to the `fair.io` S3 bucket. Run `aws configure` to set this
up.

To update https://fair.io, run `make update-site`.
