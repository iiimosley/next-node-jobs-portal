# Jobs Portal 
Client Application for review upcoming jobs and selecting providers

## Getting Started
- Install dependencies: `npm i`
- Run dev environment: `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Application Structure and Workflow
### Directory Structure 
```
syntax:
_*  = private directory; unroutable
(*) = route group; no affect url routing
[*]  = dynamic route, pulls path value in page properties (eg, /upcoming/jobs/:id ~> props: { id: string })

app
├── _components    ---~~> top level reusable components, domain and page agnostic
│   ├── headers
│   └── pointBuy
├── _lib           ---~~> library of reusable types, computations, etc
│   └── types
│       ├── job
│       └── provider
├── _services      ---~~> business logic and integration abstractions
│
│
├── (home)            <<<<< app routing - directly correlated to URL pathing (sans `components`) >>>>> 
│   └── components                   
│       └── linkBlocks
└── jobs
    ├── components
    └── upcoming
        ├── [id]
        │   └── components
        └── components
```