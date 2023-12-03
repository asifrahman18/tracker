import prisma from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";

import ButtonTracker from "../components/button";
import TaskStatusBadge from "../components/taskStatusBadge";
import CompleteButton from "./[id]/completeButton";
import DeleteButton from "./[id]/deleteButton";

const TrackerPage = async () => {

  const tracker = await prisma.tracker.findMany();
  return (
    <div>
      <div className="mb-5">
        <ButtonTracker />
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Task</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created At
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Mark As Complete
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Delete
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tracker.map((trackers) => (
            <Table.Row key={trackers.id}>
              <Table.Cell>
                <Link
                  href={`./tracker/${trackers.id}`}
                  className="text-blue-950 hover:underline"
                >
                  {trackers.title}
                </Link>
                <div className="block md:hidden">
                  <TaskStatusBadge status={trackers.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {" "}
                <TaskStatusBadge status={trackers.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {trackers.created.toDateString()}
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {" "}
                <CompleteButton trackerId={trackers.id} status = {trackers.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Button color="red">
                  <DeleteButton trackerId={trackers.id} />
                </Button>{" "}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default TrackerPage;
