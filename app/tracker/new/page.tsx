'use client';
import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface trackerForm {
  title: string;
  description: string;
}

const newTrackerPage = () => {
  const router = useRouter();
  const {register, handleSubmit} = useForm<trackerForm>();

  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(async (data)=>{await axios.post('/api/tracker', data); router.push('/tracker')})}>
      <TextField.Root>
        <TextField.Input placeholder='Title' {...register('title')}/>
      </TextField.Root>
      <TextArea placeholder='Description'{...register('description')}/>
      <Button>Add New Tracker</Button>
    </form>
  )
}

export default newTrackerPage
