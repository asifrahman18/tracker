import React from 'react'
import { Button } from '@radix-ui/themes'
import newTrackerPage from './new/page'
import Link from 'next/link'

const TrackerPage = () => {
  return (
    <div>
      <Button><Link href='/tracker/new/'>New Tracker</Link></Button>
    </div>
  )
}

export default TrackerPage
