import React, { useState } from "react";
import { Input, Container, Button, Text } from "@nextui-org/react";
import { motion } from "framer-motion";
import Splash from "./splash";
import LogIn from "@/Components/LogIn/LogIn";
import SignUp from "@/Components/SignUp/SignUp";

const Form = () => {
  const [login, setLogin] = useState(true);
  const register = () => {
    setLogin(!login);
  };
  return (
    <motion.div>
      <Container css={{ marginBottom: "15px" }} className="container-login">
        {login ? <LogIn register={register} /> : <SignUp register={register} />}
      </Container>
    </motion.div>
  );
};

export default Form;
