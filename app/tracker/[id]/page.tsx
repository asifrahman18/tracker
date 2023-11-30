import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditTaskButton from "./editTaskPage";
import TaskDetails from "./taskDetails";

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
          <EditTaskButton trackerID={tracker.id}/>
      </Box>
    </Grid>
  );
};

export default TrackerDetailsPage;
