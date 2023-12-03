"use client";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoMdDoneAll } from "react-icons/io";

const CompleteButton = ({ trackerId, status }: { trackerId: number, status: boolean }) => {

  const route = useRouter();
  return (
    <Button
      onClick={async () => {
        axios.put("/api/tracker/" + trackerId);
        route.push("/tracker");
        route.refresh();
      }}
      color="green"
      disabled = {status}
    >
      <IoMdDoneAll style={{ color: "white" }} size={20} />
    </Button>
  );
};

export default CompleteButton;
