import React from "react";

const ViewAboutComponent = () =>(
    <div className="container">
        <h1 className="text-center my-5">About the To-Do App 2!</h1>
        <h2>Background</h2>
        
        <p>This app is the continuation of my first web app, which frontend was in EJS (Embedded Javascript). 
            The interviewer from Ensolvers Team (check them out <a href="https://ensolvers.com/">here</a>) gave me the task to adapt the app to React or Angular  
        </p>

        <h2>Why React?</h2>
        <p>
        I had never work with a one-page library/framework before this proyect. So after watching <a href="https://youtu.be/-9ic_5Xggww">this video</a>, I came to these conclusions
            <ul>
                <li>Vue was discarded because it wasn't even in the options that were given to me</li> 
                <li>Angular seems to have a big learning curve, and I had only 3 days, so was discarded</li>
                <li>...So React was left, and for a personal experience, was really intuitive after a few hours</li>
            </ul>
        </p>

        <h2>What happened to the To-Do App 1? Why not upgrade the existing one?</h2>
        <p>
        <a href="https://to-do-app-becvort.herokuapp.com/">Here it is!</a> I didn't upgrade it because was easier start a new native React proyect from scratch than adding React to the old one. 
        Also, I really liked how the first one came out, and the challenge it was. I'm not feeling like tearing it apart
        </p>

        <h2>Technologies Used</h2>
        <p>
            It is all done in Javascript, using Node.js 14.16.0 as runtime environment, and...
        </p>

            ...These backend dependencies:
            <ul>
                <li><a href="https://developer.mozilla.org/es/docs/Web/HTTP/CORS">CORS</a>: Mechanism that allows requesting restricted resources</li>
                <li><a href="https://www.npmjs.com/package/dotenv/">Dotenv</a>: Loads environment variables</li>
                <li><a href="https://expressjs.com/">Express.js</a>: Web application framework</li>
                <li><a href="https://mongoosejs.com/">Mongoose</a>: Object modeling for Node.js</li>
            </ul>
            ...These frontend dependencies:
            <ul>
                <li><a href="https://getbootstrap.com/">Bootstrap</a>: Responsive design</li>
                <li><a href="https://www.npmjs.com/package/axios">Axios</a>: HTTP Client request/response tool</li>
                <li><a href="https://reactrouter.com/">React Router</a>: Collection of navigational components</li>
            </ul>
        <p>
            Finally, the database is in <a href="https://www.mongodb.com/">MongoDB</a>, and the app you're looking is running in <a href="https://dashboard.heroku.com/">Heroku </a>
        </p>

        <h2>So, what's next?</h2>
        <p>
            <ul>
                <li>
                    Tasks folders!: That would be a nice extra feature
                </li>
                <li>
                    Make a sesion system: Right now, everyone can see and modify everyone tasks cause there's no login.
                    At the moment I'm thinking of using Firebase (from Google) for login administration. 
                    Gotta keep investigating
                </li>
                <li>
                    Make it preetier: Well, I'm no graphic designer, but I'm aware that this isn't a good looking app to watch all day
                </li>
                <li>
                    React Hooks: I had no time to learn enough about it, but maybe it'll be a great plus to the code
                </li>
                <li>
                    When the task list becames empty after having something, doesn't display "Task List Empty" message
                </li>
            </ul>
        </p>
        
        <h2>Want the code?</h2>
        <p>
            No problem! Here it is on <a href="https://github.com/franBec/toDoApp-2">github</a>
        </p>

        <h2>Need to contact me?</h2>
        <p>
            Feel free to leave me a message! Here's my <a href="https://www.linkedin.com/in/franco-becvort/">linkedin</a> and my <a href="mailto:franbecvort@gmail.com">mail</a>

        </p>
    </div>
)

export default ViewAboutComponent