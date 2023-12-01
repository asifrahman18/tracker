'use client'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import React from 'react'
import { MdDeleteForever } from "react-icons/md"

const DeleteMessage = () => {
  return (
    <AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="red"><MdDeleteForever size={20}/></Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content style={{ maxWidth: 450 }}>
    <AlertDialog.Title>Confirm Delete</AlertDialog.Title>
    <AlertDialog.Description size="2">
      Are you sure? This task will be deleted permanently.
    </AlertDialog.Description>

    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button variant="solid" color="red">
          Delete
        </Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
  )
}

export default DeleteMessage
