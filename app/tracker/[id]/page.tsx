import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditTaskButton from "./editTaskPage";
import TaskDetails from "./taskDetails";
import CompleteButton from "./completeButton";
import DeleteButton from "./deleteButton";
import { Metadata } from "next";

interface props {
  params: { id: string };
}

const TrackerDetailsPage = async ({ params }: props) => {
  const tracker = await prisma.tracker.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!tracker) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <TaskDetails track={tracker}/>
      </Box>
      <Box>
        <Flex gap='2'>
          <EditTaskButton trackerID={tracker.id}/>
          <DeleteButton trackerId={tracker.id}/>
          <CompleteButton trackerId={tracker.id} status = {tracker.status}/>
          </Flex>
      </Box>
    </Grid>
  );
};

export default TrackerDetailsPage;

export const metadata: Metadata ={
  title: 'Task details',
  description: 'See your tasks in details'
}
