import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { Link as LinkNavigate } from "react-router";
import { CustomCard } from "./CustomCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { register, selectUsers } from "../store/modules/usersSlice";

export function SignUpCard() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = event.currentTarget["name-user"].value;
    const email = event.currentTarget["email"].value;
    const password = event.currentTarget["password"].value;
    const confirmPassword = event.currentTarget["confirm-password"].value;

    if (!name) {
      alert("Name is required");
      event.currentTarget["name-user"].focus();
      return;
    }

    if (!email) {
      alert("E-mail is required");
      event.currentTarget["email"].focus();
      return;
    }

    if (!password) {
      alert("Password is required");
      event.currentTarget["password"].focus();
      return;
    }

    if (confirmPassword !== password) {
      alert("Password does't match");
      event.currentTarget["confirm-password"].focus();
      return;
    }

    // ATENÇÃO: essa é uma responsabilidade do back-end
    // MERAMENTE ILUSTRATIVO
    const emailAlreadyRegisteres = users.some((user) => user.email === email);

    if (emailAlreadyRegisteres) {
      alert("E-mail already registered!");
      return;
    }

    // Segue com o front-end
    dispatch(
      register({
        name,
        email,
        password,
      })
    );

    alert("User registered!");
    event.currentTarget.reset();
  };

  return (
    <CustomCard variant="outlined">
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Sign up
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="email">Name</FormLabel>
          <TextField
            type="text"
            name="name-user"
            placeholder="John Doe"
            autoFocus
            fullWidth
            variant="outlined"
            color={"secondary"}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            fullWidth
            variant="outlined"
            color={"secondary"}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormLabel htmlFor="password">Password</FormLabel>
          </Box>
          <TextField
            name="password"
            placeholder="••••••"
            type="password"
            fullWidth
            variant="outlined"
            color={"secondary"}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormLabel htmlFor="password">Confirm Password</FormLabel>
          </Box>
          <TextField
            name="confirm-password"
            placeholder="••••••"
            type="password"
            fullWidth
            variant="outlined"
            color={"secondary"}
          />
        </FormControl>
        <Button color="secondary" type="submit" fullWidth variant="contained">
          Sign up
        </Button>
        <Typography sx={{ textAlign: "center" }}>
          Already have an account?{" "}
          <span>
            <Link
              component={LinkNavigate}
              to="/sign-in"
              variant="body2"
              sx={{ alignSelf: "center" }}
              color="secondary"
            >
              Sign in
            </Link>
          </span>
        </Typography>
      </Box>
    </CustomCard>
  );
}
