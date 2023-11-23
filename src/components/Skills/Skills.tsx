import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { frontend, backend, bbdd, others  } from "../../utils/const";

export default function Skills() {
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
    id="skills">
      <Grid
        container
        className="skills_responsive"
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
          margin:"0 auto",
          mt:20,
          mb:20
        }}
      >
        <Grid item lg={12} sx={{ mb: 10 }}>
          <h1 className="text_underlined">Skills</h1>
        </Grid>
        <Grid item lg={12} sx={{ p:1,px:3,mb: 12, border:"2px #031428", backgroundColor:"#bc934b",borderRadius:"2px 2px 16px 2px", color:"#aliceblue", boxShadow:"10px 10px 10px black" }}>
          <h1 className="skill_title">Frontend Skills</h1>
        </Grid>
        <Grid
          item
          lg={12}
          className="frontend_responsive"
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "80px",
            alignItems: "flex-end",
            flexWrap:"wrap",
            justifyContent:"center"
          }}
        >
          {frontend.map((item) => {
            return (
              <Grid item>
                <motion.img
                  src={item.src}
                  whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                  width={item.width}
                />
                <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
                  {item.nombre}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
        <Grid
        className="backend_ddbb_responsive"
          item
          lg={12}
          sx={{justifyContent:"center",flexWrap:"wrap", mt:8,display: "flex", flexDirection: "row", gap: "320px" }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
             
              
            }}
          >
            <Grid item lg={12} sx={{mt:10, p:1,px:3,mb: 8, border:"2px #031428", backgroundColor:"#bc934b",borderRadius:"2px 2px 16px 2px", color:"#aliceblue", boxShadow:"10px 10px 10px black" }}>
              <h1 className="skill_title">Backend Skills</h1>
            </Grid>
            <Grid
              item
              lg={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "80px",
                alignItems: "flex-end",
              }}
            >
              {backend.map((item) => {
                return (
                  <Grid item>
                    <motion.img
                      src={item.src}
                      whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                      width={item.width}
                    />
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "center", mt: 2 }}
                    >
                      {item.nombre}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid item lg={12} sx={{mt:10, p:1,px:3,mb: 8, border:"2px #031428", backgroundColor:"#bc934b",borderRadius:"2px 2px 16px 2px", color:"#aliceblue", boxShadow:"10px 10px 10px black" }}>
              <h1 className="skill_title">Databases</h1>
            </Grid>
            <Grid
              item
              lg={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "80px",
                alignItems: "flex-end",
              }}
            >
              {bbdd.map((item) => {
                return (
                  <Grid item>
                    <motion.img
                      src={item.src}
                      whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                      width={item.width}
                    />
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "center", mt: 2 }}
                    >
                      {item.nombre}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} sx={{mt:15, p:1,px:3,mb: 8, border:"2px #031428", backgroundColor:"#bc934b",borderRadius:"2px 2px 16px 2px", color:"#aliceblue", boxShadow:"10px 10px 10px black" }}>
          <h1 className="skill_title">Other skills</h1>
        </Grid>
        <Grid
        className="otherskills_responsive"
          item
          lg={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "80px",
            alignItems: "flex-end",mb:8,
            flexWrap:"wrap",
            justifyContent:"center"
          }}
        >
          {others.map((item) => {
            return (
              <Grid item>
                <motion.img
                  src={item.src}
                  whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                  width={item.width}
                />
                <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
                  {item.nombre}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </motion.div>
  );
}
