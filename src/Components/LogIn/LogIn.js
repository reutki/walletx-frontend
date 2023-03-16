import React from "react";
import { Input, Container, Button, Text } from "@nextui-org/react";
import { motion } from "framer-motion";
import Splash from "@/pages/splash";

const LogIn = ({ register }) => {
  return (
    <motion.form method="get">
      <Container css={{ marginBottom: "15px" }} className="container-login">
        <Splash />
        <Text h2>Log In</Text>

        <Input
          required
          bordered
          fullWidth
          labelPlaceholder="Username"
          css={{ marginBottom: "15px" }}
        />
        <Input
          required
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
        <Button onPress={() => register()}>Sign Up</Button>
      </Container>
    </motion.form>
  );
};

export default LogIn;
