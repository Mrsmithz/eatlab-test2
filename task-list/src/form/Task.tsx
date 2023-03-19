import React from "react";
import { Task } from "./TaskForm";

export interface IProps {
    task: Task
}
export default function TaskItem ({ task } : IProps) {
    return (
        <div>
            <h1 style={{color: task.status ? 'red' : 'green'}}>{task.description} {task.dueDate} {task.status ?  'Done' : 'Not done'}</h1>
        </div>
    )
}