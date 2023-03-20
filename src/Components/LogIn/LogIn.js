import React, { useState } from "react";
import { Input, Container, Button, Text } from "@nextui-org/react";
import { motion } from "framer-motion";
import Splash from "@/pages/splash";
import axios from "axios";

const LogIn = ({ register }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [resp, setResp] = useState("");
  console.log(data);
  console.log(resp);

  const loginUser = async (e) => {
    try {
      const response = await axios.post("http://localhost:3001/login", data);
      console.log(response.data);
      setResp(response.data);
    } catch (error) {
      console.log(error);
      setResp(error.response.data);
    }
  };

  return (
    <motion.form method="post">
      <Container css={{ marginBottom: "15px" }} className="container-login">
        <Splash />
        <Text h2>Log In</Text>

        <Input
          onChange={(e) => setData({ ...data, username: e.target.value })}
          required
          bordered
          fullWidth
          labelPlaceholder="Username"
          css={{ marginBottom: "15px" }}
        />
        <Input
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
          bordered
          fullWidth
          labelPlaceholder="Password"
          type={"password"}
          css={{ marginBottom: "15px" }}
        />

        <Button css={{ width: "100%" }} onPress={loginUser}>
          Log In
        </Button>
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
