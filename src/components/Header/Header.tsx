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
          container
          sx={{
            mt: 9,
            display: "flex",
            flexDirection: "row",
            p: 5,
            justifyContent: "center",
          }}
        >
          <HeaderLeft />
          <HeaderRight />
        </Grid>
      </motion.div>
    </>
  );
}
