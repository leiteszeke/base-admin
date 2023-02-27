#!/bin/bash

if [ "$1" != "qa" ] && [ "$1" != "production" ]; then
  echo "Usage: $0 qa|production"
  exit 1
fi

rm .vercel/project.json

# Copy the appropriate JSON file to .vercel folder
if [ "$1" == "qa" ]; then
  cp .vercel/qa/project.json .vercel
else
  cp .vercel/production/project.json .vercel
fi

vercel --prod