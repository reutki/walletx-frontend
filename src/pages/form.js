import React from "react";
import { Input, Container, Button, Text } from "@nextui-org/react";
import Splash from "./splash";
import { motion } from "framer-motion";

const Form = () => {
  return (
    <motion.div>
      <Container css={{ marginBottom: "15px" }} className="container-login">
        <Splash />
        <Input
          bordered
          fullWidth
          labelPlaceholder="Username"
          css={{ marginBottom: "15px" }}
        />
        <Input
          bordered
          fullWidth
          labelPlaceholder="Password"
          type={"password"}
          css={{ marginBottom: "15px" }}
        />
        <Button css={{ width: "100%" }}>Log In</Button>
      </Container>
      <Container
        css={{
          gridTemplateColumns: "max-content max-content",
          display: "grid",
          gridGap: "1rem",
        }}
      >
        <Text>Don&apos;t have an account?</Text>
        <Button>Sign Up</Button>
      </Container>
    </motion.div>
  );
};

export default Form;
