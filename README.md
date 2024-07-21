# Take Home Assignment - Steno
**Author:** Trey Mosley<br>
**Description**: Server & Client Applications serving  Upcoming Jobs <br>
**Requirements:** _See_ [`requirements.md`](requirements.md)

| Technologies |  |
| - | - |
| Global | TypesScript, npm |
| Backend | Node, Express, CSV, Nodemon |
| Frontend | React, Next.js, Tailwind, Daisy UI | 

## Getting Started
### Requirements
- [**Node (version 20)**](https://nodejs.org/en/download/package-manager) -- runtime environment
- [**Docker**](https://docs.docker.com/engine/install/) -- optional; required for containerized environment

### Run the Applications
####  💻 &nbsp; Local 
1. Open two separate terminal sessions
2. Move into the `client` and `server` respectively
3. In each session:
    - Install dependencies: `npm i`
    - Run application in dev-mode: `npm run dev`

#### 🐳 &nbsp;  Docker
1. On `client`, setup you base `.env.local` file: `cp ./client/.env.example ./client/env.local`
1. Build out your images: `docker-compose build`
1. Run the containers: `docker-compose up`

## App-specific Documentation
🌐 **Frontend** (`client`; Next.js + React): [`./client/README.md`](client/README.md)

📡 **Backend** (`server`; Node + Express): [`./server/README.md`](server/README.md)
