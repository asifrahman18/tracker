import React from 'react'
import TaskForm from '../../_components/taskForm'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface props{
  params: {id: string}
}

const EditTask = async ({params}: props) => {

  const tracker = await prisma.tracker.findUnique({
    where: { id: parseInt(params.id)}
  })

  if (!tracker) notFound();

  return (
    <div>
      <TaskForm task={tracker}/>
    </div>
  )
}

export default EditTask

export const metadata: Metadata ={
  title: 'Edit Task',
  description: 'Edit your task'
}
