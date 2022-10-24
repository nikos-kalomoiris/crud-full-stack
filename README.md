# CRUD Fullstack Assignment

A full stack assignment application for creating, deleting, updating, and reading users

### Tech Stack Used

#### Frontend

- React with vite
- Redux toolkit
- Material UI
- TailwindCSS
- Typescript

#### Backend

- Nodejs with express server
- Class-validator and class-transformer for validations
- Mongoose ODM for mongodb models and connection
- Swagger UI and JSDocs for api documentation
- Typescript

### How to start the app

#### Docker compose

run:

```bash
docker-compose up -d --build
```

### Manualy

run:

```bash
npm run dev
```

inside **server** and **client** folders

create a **.env.development.local** file in the server folder with a mongodb connection url:
**Example**

```env

DATABASE_URL="mongodb+srv://cluster0.example.mongodb.net/crud"
```

#### Default App Links

**Frontend:** [localhost:3000](http://localhost:3000/)\
**Backend:** [localhost:8080](http://localhost:8080/)\
**Swagger UI**: [localhost:8080/api-docs](http://localhost:8080/api-docs/)
