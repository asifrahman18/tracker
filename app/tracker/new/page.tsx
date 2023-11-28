'use client';
import React, { useState } from 'react'
import { Button, TextArea, TextField, Callout } from '@radix-ui/themes'
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
  const [error, setError] = useState('');

  return (
    <div className='max-w-xl justify-center'>
      {error && <Callout.Root color='red' className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
      </Callout.Root>}
    <form className=' space-y-3' onSubmit={handleSubmit(async (data)=>{
      try {
        await axios.post('/api/tracker', data); 
        router.push('/tracker');
      } catch (error) {
        setError('An unexpected error has occured');
      }
      })}>
      <TextField.Root className=''>
        <TextField.Input placeholder='Title' {...register('title')}/>
      </TextField.Root>
      <TextArea placeholder='Description'{...register('description')}/>
      <Button className=''>Add New Tracker</Button>
    </form>
    </div>
  )
}

export default newTrackerPage
