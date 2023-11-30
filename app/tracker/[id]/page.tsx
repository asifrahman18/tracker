import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'

interface props {
    params: {id: string}
}

const TrackerDetailsPage = async ({params}: props) => {

    const tracker = await prisma.tracker.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!tracker)
        notFound()
    
  return (
    <div>
      <p>{tracker.title}</p>
      <p>{tracker.description}</p>
      <p>{tracker.status}</p>
      <p>{tracker.created.toDateString()}</p>
    </div>
  )
}

export default TrackerDetailsPage
