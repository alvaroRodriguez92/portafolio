import { Box, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

export default function HeaderLeft() {
  return (
    <Grid
      item
      xl={4}
      lg={4}
      md={12}
      sm={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
     }}
    >
      <h1>Álvaro Rodriguez</h1>
      <Box
        sx={{
          border: "3px solid #efefef",
          borderRadius: "50%",
          backgroundImage: "url(../../src/assets/foto_CV2_bn.jpg)",
          height: "320px",
          width: "320px",
        }}
      ></Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <motion.div
          whileHover={{ scale: 1.3 }}
        >
          <a href="#">
            <GitHubIcon
              fontSize="large"
              color="primary"
              sx={{ fontSize: "48px", p: 2 }}
            />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
        >
          <a href="#">
            <LinkedInIcon
              color="primary"
              fontSize="large"
              sx={{ fontSize: "48px", p: 2 }}
            />
          </a>
        </motion.div>
      </Box>
    </Grid>
  );
}
