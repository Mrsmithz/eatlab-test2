import React, { useState, useEffect, useRef } from 'react';
import { v4 } from 'uuid';
import TaskItem from './Task';

export interface Task {
    id: string
    description: string
    dueDate: string
    status: boolean
}

export default function TaskForm() {
    const [taskList, setTaskList] = useState<Task[]>([])
    const [description, setDescription] = useState<string>('')
    const [dueDate, setDueDate] = useState<string>('')
    const [isCompleted, setIsCompleted] = useState<boolean>(false)
    const [onlyCompleted, setOnlyCompleted] = useState<boolean>(false)
    const initialRender = useRef(true);
    useEffect(() => {
        const saved = localStorage.getItem('taskList')
        if (saved) {
            const parsed: Task[] = JSON.parse(saved)
            setTaskList(parsed)
        }
    }, [])

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }
        localStorage.setItem('taskList', JSON.stringify(taskList))
    }, [taskList])

    const onSubmitForm = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (description && dueDate) {
            const task: Task = {
                id:v4(),
                description: description,
                dueDate: dueDate,
                status: isCompleted
            }
            setDescription('')
            setDueDate('')
            setIsCompleted(false)
            setTaskList([...taskList, task])
        }
        console.log(taskList)
    };
    const deleteAllCompleted = () => {
        const filtered = taskList.filter(task => !task.status)
        localStorage.setItem('taskList', JSON.stringify(filtered))
        setTaskList(filtered)
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <div >
                    <label>Description</label>
                    <input
                    type="text"
                    aria-label="Username field"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>Due Date</label>
                    <input
                    type="date"
                    aria-label="Due Date field"
                    name="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>is Completed ?</label>
                    <input
                    type="checkbox"
                    aria-label="is Completed field"
                    name="isCompleted"
                    checked={isCompleted}
                    onChange={(e) => setIsCompleted(!isCompleted)}
                    />
                </div>
                <div>
                    <button type="submit">
                    Create
                    </button>
                </div>
            </form>
            <br/>
            <div>
                <label>Only Completed</label>
                    <input
                    type="checkbox"
                    aria-label="Only Completed field"
                    name="Only Completed"
                    checked={onlyCompleted}
                    onChange={(e) => setOnlyCompleted(!onlyCompleted)}
                    />
            </div>
            <div>
                <button onClick={deleteAllCompleted}>Delete All Completed</button>
            </div>
            <div>
                <br></br>
                {taskList.filter(task => {
                    if (onlyCompleted) {
                        return task.status == true
                    }
                    return task
                }).map(task => <TaskItem task={task} key={task.id}/>)}
            </div>
        </div>
    )
}