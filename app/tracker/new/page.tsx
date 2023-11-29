'use client';
import React, { useState } from 'react'
import { Button, TextArea, TextField, Callout, Text } from '@radix-ui/themes'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTrackerSchema } from '@/app/validationSchema';
import {z} from 'zod';
import ErrorMessage from '@/app/components/errorMessage';


type trackerForm = z.infer<typeof createTrackerSchema>


const newTrackerPage = () => {
  const router = useRouter();
  const {register, handleSubmit, formState:{errors}} = useForm<trackerForm>({
    resolver: zodResolver(createTrackerSchema)
  });
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
      {<ErrorMessage>{errors.title?.message}</ErrorMessage>}
      <TextArea placeholder='Description'{...register('description')}/>
      {<ErrorMessage>{errors.description?.message}</ErrorMessage>}
      <Button className=''>Add New Tracker</Button>
    </form>
    </div>
  )
}

export default newTrackerPage
