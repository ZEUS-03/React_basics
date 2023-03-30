import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h2 className=" text-center font-semibold my-4 ">
      Developed with 💕 by {user.name}
    </h2>
  );
};

export default Footer;
