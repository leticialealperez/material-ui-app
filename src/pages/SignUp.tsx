import Stack from "@mui/material/Stack";
import Content from "../components/Content";
import { Container } from "@mui/material";
import { ThemeSwitch } from "../components/ThemeSwitch";
import { SignUpCard } from "../components/SignUpCard";

export function SignUp() {
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
          <SignUpCard />
        </Stack>
      </Stack>
    </Container>
  );
}
