import React, { useState } from "react";
import { Input, Container, Button, Text } from "@nextui-org/react";
import Splash from "@/pages/splash";
import { motion } from "framer-motion";
import axios from "axios";

const SignUp = ({ register }) => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
  });
  console.log(data);

  const registerUser = () => {
    axios
      .post("http://localhost:3001/register", data)
      .then((resposne) => console.log(resposne.data));
  };

  return (
    <motion.form method="post">
      <Container css={{ marginBottom: "15px" }} className="container-login">
        <Splash />
        <Text h2>Sign Up</Text>
        <Input
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
          required
          bordered
          fullWidth
          labelPlaceholder="Name"
          css={{ marginBottom: "15px" }}
        />
        <Input
          required
          bordered
          fullWidth
          labelPlaceholder="Surname"
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              surname: e.target.value,
            }))
          }
          css={{ marginBottom: "15px" }}
        />
        <Input
          required
          bordered
          fullWidth
          labelPlaceholder="Username"
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,

              username: e.target.value,
            }))
          }
          css={{ marginBottom: "15px" }}
        />
        <Input
          required
          bordered
          fullWidth
          labelPlaceholder="Password"
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,

              password: e.target.value,
            }))
          }
          type={"password"}
          css={{ marginBottom: "15px" }}
        />
        <Input
          required
          bordered
          fullWidth
          labelPlaceholder="Confirm Password"
          type={"password"}
          css={{ marginBottom: "15px" }}
        />
        <Button
          type="submit"
          onClick={() => registerUser()}
          css={{ width: "100%" }}
        >
          Sign Up
        </Button>
      </Container>
      <Container
        css={{
          gridTemplateColumns: "max-content max-content",
          display: "grid",
          gridGap: "1rem",
        }}
      >
        <Text>Allready have an account?</Text>
        <Button onPress={() => register()}>Log In</Button>
      </Container>
    </motion.form>
  );
};

export default SignUp;
