import AboutMe from "../../components/AboutMe/AboutMe";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Resources from "../../components/Resources/Resources";
import Footer from "../../components/Footer/Footer";
import { Grid } from "@mui/material";

export default function Main() {
  return (
    <Grid container sx={{ alignContent:"center",display: "flex", flexDirection: "column" }}>
      <Grid item>
        <header className="header_main">
          <Header />
        </header>
      </Grid>
      <Grid >
        <AboutMe/>
      </Grid>
      <Grid item>
        <Skills />
      </Grid>
      <Grid item>
        <Projects />
      </Grid>
      <Grid item>
        <Resources />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}
