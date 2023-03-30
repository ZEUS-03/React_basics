import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Gautam Sharma",
    email: "Gautamsharma@gmail.com",
  },
});

export default UserContext;
