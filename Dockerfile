FROM node
WORKDIR /app
EXPOSE 80
COPY . .
RUN npm install
CMD ["npm", "run", "dev", "--", "--host", "--port", "80"]