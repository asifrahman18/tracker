import Link from 'next/link'
import React from 'react'
import { Button } from '@radix-ui/themes'
const ButtonTracker = () => {
  return (
    <Button>
        <Link href='/tracker/new/'>Add New Task</Link>
    </Button>
  )
}

export default ButtonTracker
