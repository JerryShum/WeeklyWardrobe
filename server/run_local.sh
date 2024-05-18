#!/bin/bash
set -eu
sudo docker build -t weeklywardrobe:latest .
sudo docker rm -f weeklywardrobe
sudo docker run --rm -it -p 3000:3000 --name weeklywardrobe weeklywardrobe:latest
