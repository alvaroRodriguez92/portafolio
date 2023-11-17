import { useEffect,useState } from "react";
import { Grid, duration } from "@mui/material";
import { motion, useAnimate } from "framer-motion";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import Education from "./Education";
import Interests from "./Interests";

export default function AboutMe() {
  // const [scope, animate] = useAnimate()
  // const [isHovered, setHovered] = useState(false)


  // useEffect(() => {
  //   const animation = async () => {
  //     if(isHovered) {
  //       await animate(scope.current,{scale:0.8},{duration:1.5} )
  //     }else{
  //       await animate(scope.current,{scale:1} )
  //     }
  //     animate("div", { opacity: 1 })
  //   }
    
  //   animation()
  //   console.log(isHovered)
  // }, [isHovered])


  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:3}}>

    <Grid
      container
      sx={{
        maxWidth: "90vw",
        border: "2px solid #efefef",
        borderRadius:"16px",
        m: 8,
        p: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow:"10px 10px 10px #031428"      }}
    >
      {/* First row of about me */}
      <Grid item lg={12} sx={{mb:8}}>
        <h1 className="text_underlined">About me</h1>
      </Grid>
      <Grid item lg={12} sx={{ display: "flex", flexDirection: "row", justifyContent:"space-around", alignItems:"center" }}>
        {/* Text about me */}
        <Grid item lg={5} sx={{ p: 3 }}>
          <span className="span_aboutme">
            Since my first 'Hellow world' I knew I wanted to dedicate myself to
            the IT sector. I am a very{" "}
            <motion.span
              animate={{ color: ['hsl(208, 100, 97)', 'hsl(155, 67, 45)'], fontWeight:"bold" }}
              transition={{duration:5 }}
            >
              positive
            </motion.span>{" "}
            and <motion.span
              animate={{ color: ['hsl(208, 100, 97)', 'hsl(155, 67, 45)'], fontWeight:"bold" }}
              transition={{duration:5 }}
            >
              reliable
            </motion.span> person, always able to work in a team environment and
            under pressure. I like to have <motion.span
              animate={{ color: ['hsl(208, 100, 97)', 'hsl(155, 67, 45)'], fontWeight:"bold" }}
              transition={{duration:5 }}
            >
              challenges
            </motion.span> and improve my skills with
            it. <br />
            <br />
            In the last year I have been entirely focused in learning the last
            technologies, coding with <motion.span
              animate={{ color: ['hsl(208, 100, 97)', 'hsl(155, 67, 45)'], fontWeight:"bold" }}
              transition={{duration:5 }}
            >
              Javascript
            </motion.span> in backend and frontend.
          </span>
        </Grid>
        {/* Card of education */}

        <motion.div whileHover={{scale:1.1,boxShadow:"20px 20px 20px #031428", transition:{duration:1}}} className="motion_grid2">
        <Grid  item sx={{width:"100%",boxShadow:"10px 10px 10px #031428",backgroundColor:"aliceblue",color:"#031428", display:"flex",flexDirection:"column", alignItems:"center", border:"2px solid #efefef", borderRadius:"16px" } }>
            <Grid item lg={12} sx={{display:"flex", alignItems:"center"}}>
          <MenuBookIcon sx={{p:2,fontSize:"32px"}}/><span className="aboutme_titles">Education</span>

            </Grid>
            <Grid item lg={12} sx={{p:2}}>
          <Education/>

            </Grid>
        </Grid>
        </motion.div>

      </Grid>
      {/* Second row of about me */}
      <Grid item lg={12} sx={{ mt:12,display: "flex", flexDirection: "row", justifyContent:"space-around", alignItems:"center" }}>
        
        {/* Card of my interests */}
        

        <motion.div whileHover={{scale:1.1,boxShadow:"20px 20px 20px #031428", transition:{duration:1}}} className="motion_grid3">
        <Grid  item sx={{boxShadow:"10px 10px 10px #031428",backgroundColor:"aliceblue",color:"#031428", display:"flex",flexDirection:"column", alignItems:"center", border:"2px solid #efefef", borderRadius:"16px" } }>
            <Grid item lg={12} sx={{display:"flex", alignItems:"center"}}>
          <PsychologyAltIcon  sx={{p:2,fontSize:"40px"}}/><span className="aboutme_titles">My interests</span>

            </Grid>
            <Grid item lg={12} >
          <Interests/>

            </Grid>
        </Grid>
        </motion.div>
        <Grid item lg={5} sx={{ p: 3 }}>
          <motion.div className="motion.cv">
            <span className="span_aboutme">Download my cv here: HACER ANIMACION O ALGO PARA DESCARGAR CV!</span>
          </motion.div>
        </Grid>
      </Grid>
    </Grid>

    
    </motion.div>
        
  );
}
