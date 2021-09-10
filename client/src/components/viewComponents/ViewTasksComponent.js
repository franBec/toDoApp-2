import React from "react";

import Form from "../form/FormContainer";
import TaskList from "../task/taskList/TaskListContainer"

const ViewTasksComponent = props =>(
    <div>
        <h1>Tasks!</h1>
        <Form/>
        <TaskList/>
    </div>
)

export default ViewTasksComponent