#!/bin/bash

# Check if Ollama is installed
ollama --version

#pull deepseek-r1:1.5b
ollama pull deepseek-r1:1.5b

#pull llama3.1:8b
ollama pull llama3.1:8b

#verify local models
ollama list

# Navigate to backend and start the server
echo "Starting backend..."
cd backend
npm install &
npm run dev &

# Navigate to frontend and start React app
echo "Starting frontend..."
cd ../frontend
npm install &
npm run dev &

# Wait for background jobs to finish
wait
