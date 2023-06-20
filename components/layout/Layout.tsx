import Footer from "../footer/footer";
import MobileNavBar from "../controls/navigation/MobileNavBar";
import Header from "../header/Header";
import { ReactNode, useContext } from "react";
import { Container } from "@mui/material";
import { TranslationStoreContext } from "../../pages/_app";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  const router = useRouter();

  const translationStore = useContext(TranslationStoreContext);
  const changeTo = router.locale === "en" ? "ru" : "en";

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          width: "77.5rem",
          maxWidth:"1240px",
          mb: "1rem",
          pb: "4rem",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          "@media (min-width:1059px) and (max-width:1089px)": {
            width: "70.5rem",
            paddingLeft: "6px",
            paddingRight: "6px",
          },
          "@media (max-width:599px)": {
            width: "83.5rem",
            paddingLeft: "6px",
            paddingRight: "6px",
          },
          "@media (max-width:576px)": {
            width: "54.5rem",
          },
          "@media (max-width:541px)": {
            width: "52.5rem",
          },
          "@media (max-width:521px)": {
            width: "50.5rem",
          },
          "@media (max-width:448px)": {
            width: "100vw",
          },
        }}
      >
        <Header store={translationStore} changeTo={changeTo} />
        <main>{children}</main>
        <Footer />
      </Container>
      <MobileNavBar />
    </>
  );
}
