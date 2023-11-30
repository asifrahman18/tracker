import React from 'react'
import { Button, Table } from '@radix-ui/themes'
import newTrackerPage from './new/page'
import Link from 'next/link'
import prisma from '@/prisma/client'
import TaskStatusBadge from '../components/taskStatusBadge'
import ButtonTracker from '../components/button'

const TrackerPage = async () => {

  const tracker = await prisma.tracker.findMany()
  return (
    <div>
      <div className='mb-5'>
      <ButtonTracker/>
      </div>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Task</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created At</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tracker.map(trackers=> (
            <Table.Row key={trackers.id}>
              <Table.Cell>
                <Link href={`./tracker/${trackers.id}`} className='text-blue hover:underline'>
                {trackers.title}
                </Link>
                <div className='block md:hidden'><TaskStatusBadge status={trackers.status}/></div>
                </Table.Cell>
              <Table.Cell className='hidden md:table-cell'> <TaskStatusBadge status={trackers.status}/></Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{trackers.created.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default TrackerPage
