import React from 'react'
import TaskForm from '../_components/taskForm'
import { Metadata } from 'next'

const NewTask = () => {
  return (
    <div>
      <TaskForm/>
    </div>
  )
}

export default NewTask

export const metadata: Metadata ={
  title: 'New Task',
  description: 'Add new task'
}