import { Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import Education from "./Education";
import Interests from "./Interests";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
    id="aboutme">
      <Grid
        container
        className="grid_about"
        sx={{
          maxWidth: "100vw",
          border: "2px solid #efefef",
          borderRadius: "16px",
          m: 8,
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignContent:"center",
          alignItems: "center",
          boxShadow: "10px 10px 10px #031428",
          width: "80%",
          margin:"0 auto"
        }}
      >
        {/* First row of about me */}
        <Grid item lg={12} sx={{ mb: 8 }}>
          <h1 className="text_underlined">About me</h1>
        </Grid>
        <Grid
          item
          lg={12}
          className="grid_aboutme"

          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Text about me */}
          <Grid  item lg={5} md={12} sx={{ p: 3 }}>
            <span className="span_aboutme">
              Since my first 'Hellow world' I knew I wanted to dedicate myself
              to the IT sector. I am a very{" "}
              <motion.span
                animate={{
                  color: ["hsl(208, 100, 97)", "hsl(155, 67, 45)"],
                  fontWeight: "bold",
                }}
                transition={{ duration: 5 }}
              >
                positive
              </motion.span>{" "}
              and{" "}
              <motion.span
                animate={{
                  color: ["hsl(208, 100, 97)", "hsl(155, 67, 45)"],
                  fontWeight: "bold",
                }}
                transition={{ duration: 5 }}
              >
                reliable
              </motion.span>{" "}
              person, always able to work in a team environment and under
              pressure. I like to have{" "}
              <motion.span
                animate={{
                  color: ["hsl(208, 100, 97)", "hsl(155, 67, 45)"],
                  fontWeight: "bold",
                }}
                transition={{ duration: 5 }}
              >
                challenges
              </motion.span>{" "}
              and improve my skills with it. <br />
              <br />
              In the last year I have been entirely focused in learning the last
              technologies, coding with{" "}
              <motion.span
                animate={{
                  color: ["hsl(208, 100, 97)", "hsl(155, 67, 45)"],
                  fontWeight: "bold",
                }}
                transition={{ duration: 5 }}
              >
                Javascript
              </motion.span>{" "}
              in backend and frontend.
            </span>
          </Grid>
          {/* Card of education */}

          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: "20px 20px 20px #031428",
              transition: { duration: 1 },
            }}
            className="motion_grid2"
          >
            <Grid
              item
              xs={12}
              className="education_responsive"
              sx={{
                width: "100%",
                boxShadow: "10px 10px 10px #031428",
                backgroundColor: "aliceblue",
                color: "#031428",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "2px solid #efefef",
                borderRadius: "16px",
              }}
            >
              <Grid item lg={12} sx={{ display: "flex", alignItems: "center" }}>
                <MenuBookIcon sx={{ p: 2, fontSize: "32px" }} />
                <span className="aboutme_titles">Education</span>
              </Grid>
              <Grid item lg={12} sx={{ p: 2 }}>
                <Education />
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        {/* Second row of about me */}
        <Grid
          item
          lg={12}
          
          className="grid_interests"
          sx={{
            width: "90%",
            mt: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap:"wrap"
          }}
        >
          {/* Card of my interests */}

          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: "20px 20px 20px #031428",
              transition: { duration: 1 },
            }}
            className="motion_grid3"
          >
            <Grid
              item
              md={12}
              className="interest_responsive"
              sx={{
                boxShadow: "10px 10px 10px #031428",
                backgroundColor: "aliceblue",
                color: "#031428",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "2px solid #efefef",
                borderRadius: "16px",
                
              }}
            >
              <Grid item lg={12} sx={{ display: "flex", alignItems: "center" }}>
                <PsychologyAltIcon sx={{ p: 2, fontSize: "40px" }} />
                <span className="aboutme_titles">My interests</span>
              </Grid>
              <Grid item lg={12} >
                <Interests />
              </Grid>
            </Grid>
          </motion.div>
          <Grid
            item
            className="download_responsive"
            lg={5}
            sx={{
              ml: 10,
              p: "32px 64px 64px 64px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "2px dashed aliceblue",
              borderRadius: "16px",
            }}
          >
            <h6 className="span_aboutme">You can download my CV here!</h6>

            <motion.div  animate={{y:[6,-6,6]}} transition={{repeat:Infinity}} >
              <img src="../../src/assets/arrow.svg" width={"56px"}/>
            </motion.div >
            
            <a className="download_a" href="../../src/assets/CV-ALVARO-2023.pdf" download="CV-ALVARO-2023.pdf"><Button variant="contained" sx={{border:"1px solid #031428",boxShadow:"20px 10px 10px black",fontWeight:"600",color:"#031428",mt:4, width:"100%",height:"48px",backgroundColor:"#b38c7b"}}>Download</Button></a>

          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
}


