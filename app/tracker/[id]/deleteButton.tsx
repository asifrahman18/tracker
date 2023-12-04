"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
const DeleteButton = ({trackerId}: {trackerId: number}) => {

    const route = useRouter()
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red"><MdDeleteForever size={20} /></Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confrim Delete</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this? This action is permanent
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button onClick={async ()=>{
                await axios.delete('/api/tracker/'+ trackerId)
                route.push('/tracker')
                route.refresh()
            }} variant="solid" color="red">
              Delete
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteButton;
