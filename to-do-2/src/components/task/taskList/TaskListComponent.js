import React from "react";
import Loading from "../../templates/Loading";
import TaskItem from "../taskItem/TaskItemContainer";
import IsEmpty from "../../templates/IsEmpty";

const TaskListComponent = props =>(    
    <div className="task-list container">{
        props.isLoading ?
            <Loading />
        :
            props.isEmpty?
                <IsEmpty />
            :  
                props.taskList.map(task =>(
                    <TaskItem
                        key={task._id}
                        value={task}
                    />
                )
    )
    
    }</div>
)

export default TaskListComponent