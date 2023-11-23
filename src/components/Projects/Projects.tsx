import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import CardProject from "./CardProject";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
    id="projects">
      <Grid
        container
        sx={{
          maxWidth: "100vw",
          border: "2px solid #efefef",
          borderRadius: "16px",
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "10px 10px 10px #031428",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Grid item lg={12} sx={{ mb: 6 }}>
          <h1 className="text_underlined">Projects</h1>
        </Grid>
        <Grid item lg={10} md={12} sx={{ p: 3, mb: 5 }}>
          <span className="span_aboutme">
            Here you can find some of the projects I finished and I feel proud
            of them.
          </span>
        </Grid>
        <Grid item lg={11} sx={{ width: "100%",display:"flex",flexDirection:"column",gap:"120px" }}>
          <CardProject />
        </Grid>
      </Grid>
    </motion.div>
  );
}
