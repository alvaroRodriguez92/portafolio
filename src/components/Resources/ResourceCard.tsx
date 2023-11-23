import { Box, Button, Grid } from "@mui/material";
import { resources,resources2,resources3 } from "../../utils/const";
import { motion } from "framer-motion";

export default function ResourceCard() {
  return (<>
    <Grid
      className="grid_resource"
      item
      lg={12}
      sx={{ display: "flex", flexDirection: "row", alignItems:"center", justifyContent:"center" }}
    >
      {resources.map((item) => {
        return (
          <motion.div
            className="motion_resource"
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
          >
            <Box sx={{borderRadius:"4px", backgroundImage:`url(${item.src})`,backgroundPosition:"center",backgroundSize:"cover", width: "100%", height:"100%",display:"flex", flexDirection:"column",justifyContent:"space-between", alignItems:"flex-end" }}>
              <Box sx={{ p: 2 }}>
                <a href={item.link} target="_blank">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#0875088f",
                      color: "aliceblue",
                      borderRadius: "50%",
                      minWidth: "40px",
                      width: "48px",
                      height: "48px",
                    }}
                  >
                    <img src="../../src/assets/link.svg" width={"24px"} />
                  </Button>
                </a>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "48px",
                  backgroundColor: "#0875088f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "aliceblue",
                  fontWeight: "800",
                  fontSize: "24px",
                  mb: 1,
                }}
              >
                <span className="resource_title">{item.name}</span>
              </Box>
            </Box>
          </motion.div>
        );
      })}
    </Grid>
    <Grid
      className="grid_resource"
      item
      lg={12}
      sx={{ justifyContent:"center",display: "flex", flexDirection: "row",alignItems:"center" }}
    >
      {resources2.map((item) => {
        return (
          <motion.div
            className="motion_resource"
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
          >
            <Box sx={{borderRadius:"4px", backgroundImage:`url(${item.src})`,backgroundPosition:"center",backgroundSize:"cover", width: "100%", height:"100%",display:"flex", flexDirection:"column",justifyContent:"space-between", alignItems:"flex-end" }}>
              <Box sx={{ p: 2 }}>
                <a href={item.link} target="_blank">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#0875088f",
                      color: "aliceblue",
                      borderRadius: "50%",
                      minWidth: "40px",
                      width: "48px",
                      height: "48px",
                    }}
                  >
                    <img src="../../src/assets/link.svg" width={"24px"} />
                  </Button>
                </a>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "48px",
                  backgroundColor: "#0875088f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "aliceblue",
                  fontWeight: "800",
                  fontSize: "24px",
                  mb: 1,
                }}
              >
                <span className="resource_title">{item.name}</span>
              </Box>
            </Box>
          </motion.div>
        );
      })}
    </Grid>
    <Grid
      className="grid_resource"
      item
      lg={12}
      sx={{justifyContent:"center", display: "flex", flexDirection: "row",alignItems:"center" }}
    >
      {resources3.map((item) => {
        return (
          <motion.div
            className="motion_resource"
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
          >
            <Box sx={{borderRadius:"4px", backgroundImage:`url(${item.src})`,backgroundPosition:"center",backgroundSize:"cover", width: "100%", height:"100%",display:"flex", flexDirection:"column",justifyContent:"space-between", alignItems:"flex-end" }}>
              <Box sx={{ p: 2 }}>
                <a href={item.link} target="_blank">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#0875088f",
                      color: "aliceblue",
                      borderRadius: "50%",
                      minWidth: "40px",
                      width: "48px",
                      height: "48px",
                    }}
                  >
                    <img src="../../src/assets/link.svg" width={"24px"} />
                  </Button>
                </a>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "48px",
                  backgroundColor: "#0875088f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "aliceblue",
                  fontWeight: "800",
                  fontSize: "24px",
                  mb: 1,
                }}
              >
                <span className="resource_title">{item.name}</span>
              </Box>
            </Box>
          </motion.div>
        );
      })}
    </Grid>
    </>);
}
