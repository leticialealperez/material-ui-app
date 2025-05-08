import Stack from "@mui/material/Stack";
import { SignInCard } from "../components/SignInCard";
import Content from "../components/Content";
import { Container } from "@mui/material";
import { ThemeSwitch } from "../components/ThemeSwitch";
import { useAppSelector } from "../store/hooks";
import { selectUserLogged } from "../store/modules/userLoggedSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function SignIn() {
  const userLogged = useAppSelector(selectUserLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLogged.id !== 0) {
      // já tem um usuario logado, navega até a página inicial
      navigate("/");
    }
  }, [navigate, userLogged]);

  return (
    <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
      <ThemeSwitch />
      <Stack
        minHeight="100vh"
        direction={{ xs: "column-reverse", md: "row" }}
        sx={{
          justifyContent: "center",
          gap: { xs: 6, sm: 12 },
          p: 2,
        }}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          sx={{
            justifyContent: "center",
            gap: { xs: 6, sm: 12 },
            p: { xs: 2, sm: 4 },
          }}
        >
          <Content />
          <SignInCard />
        </Stack>
      </Stack>
    </Container>
  );
}
