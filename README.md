# Prerequisites

Install ollama from here https://ollama.com/download

# Starting app

Run start-project.sh script. (In case it is not executed, give permissions to execute chmod +x start-project.sh)

# What's inside this app?

- The start script pulls deepseek-r1:1.5b and llama3.1:8b LLM's and start both backend and frontend apps
- Frontend project (React + typescript + vite)
  - PromptInput component takes an user input and on submit makes an api call
  - ResponseBox component displays the response received from api
  - User can choose between deepseek-r1:1.5b and llama3.1:8b models using dropdown
- Backend project (Node + express + node-fetch)
  - Connects with ollama server and executes the prompt on selected LLM and responds

# Future scope
- Response streaming
- Extend the capabilities other types of LLM's like image/voice
- Context sharing between different LLM's
- May be some design improvements and other thoughts from community!
