'use client';
import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'

const newTrackerPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root>
        <TextField.Input placeholder='Title'/>
      </TextField.Root>
      <TextArea placeholder='Description'/>
      <Button>Add New Tracker</Button>
    </div>
  )
}

export default newTrackerPage
