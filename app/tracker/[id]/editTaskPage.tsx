import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { MdEditNote } from "react-icons/md";

const EditTaskButton = ({ trackerID }: { trackerID: number }) => {
  return (
    <div>
      <Button>
        <Link href={`/tracker/${trackerID}/edit`}>
          <MdEditNote size={25} style={{ color: "white" }} />
        </Link>
      </Button>
    </div>
  );
};

export default EditTaskButton;
