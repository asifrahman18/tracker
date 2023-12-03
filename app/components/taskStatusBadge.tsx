import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'


interface taskStatus{
    status: Status
}

const TaskStatusBadge = ({status}: taskStatus) => {

    if (status === 'IN_PROGRESS')
    return (
        <Badge color='yellow'>In Progress</Badge>)

    if (status === 'CLOSED')
    return (
        <Badge color='green'>Complete</Badge>)
}

export default TaskStatusBadge
