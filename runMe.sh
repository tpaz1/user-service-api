sudo docker build -t user-service-api:latest ./app
sudo docker run -d --name user-api --port 3000:3000 user-service-api:latest
