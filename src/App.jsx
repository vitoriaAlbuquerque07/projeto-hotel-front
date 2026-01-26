import { QueryClientProvider } from "@tanstack/react-query";
import { LuHouse } from "react-icons/lu";
import { QUERYCLIENT } from "./services";

const APP = () => {
  return (
    <QueryClientProvider client={QUERYCLIENT}>

      <><LuHouse></LuHouse></>
    </QueryClientProvider>
  );
}

export default APP;