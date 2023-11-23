import { Grid } from "@mui/material";
import { motion } from "framer-motion";

export default function HeaderRight() {
  return (
    <Grid
      className="grid_box"
      item
      lg={6}
      md={12}
      sm={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid #efefef",
        borderRadius: "16px",
        backgroundColor: "aliceblue",
        mt: 4,
        boxShadow: "10px 5px 5px #031428",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <motion.div
          className="motion_grid"
          whileHover={{
            scale: 0.8,
            backgroundColor: "#c9e1d9",
            border: "3px solid #031428",
            borderRadius: "16px",
            boxShadow: "10px 5px 5px #031428",
            transition: { duration: "0.6" },
          }}
        >
          <a className="link_scroll" href="#aboutme">
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <h1>About me</h1>
            </Grid>
          </a>
        </motion.div>
        <motion.div
          className="motion_grid"
          whileHover={{
            scale: 0.8,
            backgroundColor: "#c9e1d9",
            border: "3px solid #031428",
            borderRadius: "16px",
            boxShadow: "10px 5px 5px #031428",
            transition: { duration: "0.6" },
          }}
        >
          <a className="link_scroll" href="#skills">
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <h1>Skills</h1>
            </Grid>
          </a>
        </motion.div>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <motion.div
          className="motion_grid"
          whileHover={{
            scale: 0.8,
            backgroundColor: "#c9e1d9",
            border: "3px solid #031428",
            borderRadius: "16px",
            boxShadow: "10px 5px 5px #031428",
            transition: { duration: "0.6" },
          }}
        >
          <a className="link_scroll" href="#projects">
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <h1>Projects</h1>
            </Grid>
          </a>
        </motion.div>
        <motion.div
          className="motion_grid"
          whileHover={{
            scale: 0.8,
            backgroundColor: "#c9e1d9",
            border: "3px solid #031428",
            borderRadius: "16px",
            boxShadow: "10px 5px 5px #031428",
            transition: { duration: "0.6" },
          }}
        >
          <a className="link_scroll" href="#resources">
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <h1>Resources</h1>
            </Grid>
          </a>
        </motion.div>
      </Grid>
    </Grid>
  );
}
