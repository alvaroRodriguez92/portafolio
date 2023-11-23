import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <Grid
        container
        className="grid_footer"
        sx={{
          maxWidth: "100vw",
          m: 8,
          mt: 10,
          p: 5,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"space-around",
          width: "80%",
          margin: "0 auto",
          height: "240px",
          borderTop: "2px solid aliceblue",
          gap:"8px",
        }}
      >
        <Grid item>
          <h3>This page is made with 💚, React and Material UI</h3>
          <h3>© Alvaro Rodriguez</h3>
        </Grid>
        
        <Grid item sx={{display:"flex", flexDirection:"column",alignItems:"flex-start",gap:"8px"}}>

        
        <Grid className="footer_item" item sx={{gap:"16px",display:"flex", flexDirection:"row", alignItems:"center"}}>
          {" "}
          <EmailIcon sx={{mt:0.5}} /> <Typography variant="body1" fontSize={"20px"}>alvaros.rodriguez92@gmail.com</Typography>
        </Grid>
        <Grid item className="footer_item" sx={{gap:"16px",display:"flex", flexDirection:"row", alignItems:"center"}}>
          {" "}
          <GitHubIcon sx={{mt:0.5}}/> <Typography variant="body1" fontSize={"20px"}><a className="link_footer" target="_blank" href="https://github.com/alvaroRodriguez92">https://github.com/alvaroRodriguez92</a></Typography>
        </Grid>
        <Grid item className="footer_item" sx={{gap:"16px",display:"flex", flexDirection:"row", alignItems:"center"}}>
          {" "}
          <LinkedInIcon  sx={{mt:0.5}}/> <Typography variant="body1" fontSize={"20px"}><a className="link_footer" target="_blank" href="https://www.linkedin.com/in/alvaro-rodriguez-fullstackdeveloper/">https://www.linkedin.com/in/alvaro-rodriguez-fullstackdeveloper/</a></Typography>
        </Grid>
      </Grid>
      </Grid>
    </motion.div>
  );
}
