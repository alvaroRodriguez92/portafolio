import Introduction from "./Introduction";
import { Box, Grid } from "@mui/material";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      <Introduction />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <Grid
        className="grid_header"
          container
          sx={{
            
            display: "flex",
            flexDirection: "row",
            p: 5,
            justifyContent: "flex-start",
            gap:"144px",
            flexWrap:"nowrap"
          }}
        >
          <HeaderLeft />
          <HeaderRight />
        </Grid>
      </motion.div>
    </>
  );
}
