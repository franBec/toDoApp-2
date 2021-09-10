# toDoApp 2!

## Running the app
Right now you can use it online here: https://to-do-app-2.herokuapp.com/ tho it has a bug, explained in the home page

Anyways, if you really need to run it on your localmachine, you'll need a .env document, that is not here uploaded for security reasons (user and password of the database). So you can:
- create your own .env with your own database info, just gotta be careful about constant process.env.CONSTANT names, and the line
```
const Task = mongoose.model('Task', taskSchema, 'tasks')
```
in /models/Tasks.js will need to be replaced by
```
const Task = mongoose.model('param1', param2, 'param3')
```
where
- param1 = the singular name of the collection your model is for
- param2 = the schema, also defined in /models/Tasks.js
- param3= SAME NAME that MongoDB is using for collection

once here, you'll need to open a comand propmt in the client folder and run

```
npm run start
```

if you are not feeling like creating this .env file and change /models/Tasks.js, feel free to contact me at my [linkedin](https://www.linkedin.com/in/franco-becvort/) or [gmail](mailto:franbecvort@gmail.com), and I'll help you no problem, making the changes, or lending you the .env of myself (at the end, this is a begginer app, but you know, security is a big deal)

## Technologies Used
It is all done in Javascript, using Node.js 14.16.0 as runtime environment, and...:

...These backend dependencies:
- [CORS 2.8.5](https://developer.mozilla.org/es/docs/Web/HTTP/CORS): Mechanism that allows requesting restricted resources
- [Dotenv 10.0.0](https://www.npmjs.com/package/dotenv): Loads environment variables
- [Express.js 4.17.1](https://expressjs.com): Web application framework
- [Mongoose 6.0.4](https://mongoosejs.com): Object modeling for Node.js

...And the frontend dependencies
- [Bootstrap 5.1.1]("https://getbootstrap.com): Responsive design
- [Axios 0.21.4](https://www.npmjs.com/package/axios): HTTP Client request/response tool
- [React Router 5.3.0](https://reactrouter.com): Collection of navigational components

Also...
- The database is in [MongoDB](https://www.mongodb.com/)
- The app is running in [Heroku](https://dashboard.heroku.com/)
