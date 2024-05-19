#!/bin/bash
sudo docker build -t weeklywardrobesite:latest .
sudo docker container rm -f weeklywardrobesite
sudo docker run -it -p 80:80 --name weeklywardrobesite weeklywardrobesite:latest
