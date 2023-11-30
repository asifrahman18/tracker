import { Table } from '@radix-ui/themes'
import React from 'react'
import TaskStatusBadge from '../components/taskStatusBadge'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ButtonTracker from '../components/button'

const LoadingTrackerPage = () => {

    const tracker = [1,2,3,4]
  return (
        <div>
            <ButtonTracker/>
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
            <Table.Row key={trackers}>
              <Table.Cell>
                <Skeleton/>
                </Table.Cell>
              <Table.Cell className='hidden md:table-cell'><Skeleton/></Table.Cell>
              <Table.Cell className='hidden md:table-cell'><Skeleton/></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      </div>
  )
}

export default LoadingTrackerPage
