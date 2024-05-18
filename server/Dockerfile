FROM node
EXPOSE 3000
WORKDIR /shellball
COPY . .
WORKDIR /shellball/server
ARG HOST
ENV HOST=$HOST
ARG PORT
ENV PORT=$PORT
RUN npm install
CMD ["npm", "run", "start", "--", "--host", "$HOST", "--port", "$PORT"]
