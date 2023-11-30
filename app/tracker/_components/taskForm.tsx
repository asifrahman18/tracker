"use client";
import React, { useState } from "react";
import { Button, TextArea, TextField, Callout, Text } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTrackerSchema } from "@/app/validationSchema";
import { z } from "zod";
import ErrorMessage from "@/app/components/errorMessage";
import Spinner from "@/app/components/spinner";
import { Tracker } from "@prisma/client";

type trackerForm = z.infer<typeof createTrackerSchema>;

const TaskForm = ({ task }: { task?: Tracker }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<trackerForm>({
    resolver: zodResolver(createTrackerSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  return (
    <div className="max-w-xl justify-center">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            setSubmitting(true);
            await axios.post("/api/tracker", data);
            router.push("/tracker");
          } catch (error) {
            setSubmitting(false);
            setError("An unexpected error has occured");
          }
        })}
      >
        <TextField.Root className="">
          <TextField.Input defaultValue={task?.title} placeholder="Title" {...register("title")} />
        </TextField.Root>
        {<ErrorMessage>{errors.title?.message}</ErrorMessage>}
        <TextArea defaultValue={task?.description} placeholder="Description" {...register("description")} />
        {<ErrorMessage>{errors.description?.message}</ErrorMessage>}
        <Button disabled={isSubmitting}>
          Add New Tracker {isSubmitting && <Spinner />}{" "}
        </Button>
      </form>
    </div>
  );
};

export default TaskForm;
