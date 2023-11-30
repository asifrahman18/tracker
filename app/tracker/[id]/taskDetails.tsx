import TaskStatusBadge from "@/app/components/taskStatusBadge";
import { Tracker } from "@prisma/client";
import { Heading, Card, Text } from "@radix-ui/themes";
import React from "react";

const TaskDetails = ({track}: {track: Tracker}) => {
  return (
    <div>
      <Heading>{track.title}</Heading>
      <div className="flex gap-2 my-2">
        <TaskStatusBadge status={track.status} />
        <Text>{track.created.toDateString()}</Text>
      </div>
      <Card>
        <p className="p-5">{track.description}</p>
      </Card>
    </div>
  );
};

export default TaskDetails;
