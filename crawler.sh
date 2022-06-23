#!/bin/bash

docker run -it --platform linux/amd64 --env-file=.env -e 'CONFIG='"$(cat ./crawler.config.json | jq -r tostring)" algolia/docsearch-scraper:latest
