import { Grid, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projects } from "../../utils/const";

export default function CardProject() {
  return (<>
  
    {projects.map((item)=>{
      return(
        <Grid
      container
      className="grid_projects"
      sx={{
        background: "aliceblue",
        backgroundPosition: "center",
        backgroundSize: "cover",
        p: 5,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        borderRadius: "16px",
        boxShadow: "0 0 5px 5px aliceblue",
        alignItems:"center",
      }}
    >
      <Grid item xs={12} lg={6}>
        <video className="projectvideo_responsive" width="80%" height="315" controls>
          <source src={item.src} type="video/mp4" />
        </video>
      </Grid>
      <Grid
        item
        lg={6}
        md={12}
        className="grid_text_projects"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          mt:2
        }}
      >
        <Grid item>
          <Typography variant="h1" sx={{ color: "#031428", fontSize: "32px" }}>
           {item.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h1"
            sx={{ color: "#031428", fontSize: "20px", mt: 5 }}
          >
            {item.description1}
          </Typography>
          <Typography
            variant="h1"
            sx={{ color: "#031428", fontSize: "20px", mt: 3 }}
          >
            {item.description2}
          </Typography>
          <Typography
            variant="h1"
            sx={{ color: "#031428", fontSize: "20px", mt: 3 }}
          >
            {item.description3}
            
            <a className="link_summarooms" href="https://summarooms.es/" target="_blank">{item.name=="Summarooms"?("https://summarooms.es/"):("")}</a>
            </Typography> 
          
        </Grid>
        <Grid
          item
          lg={12}
          className="grid_button_projects"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <a href={item.link} target="_blank">
          <Button
          
            sx={{
              background: "#ed9700",
              textTransform: "none",
              fontWeight: "600",
              fontSize: "20px",
              px: 2,
              mt: 7,
              "&:hover": {
                backgroundColor: "black"
              }
            }}
          >
            Git Hub <GitHubIcon sx={{ ml: 2, fontSize: "32px" }} />
          </Button></a>
        </Grid>
      </Grid>
    </Grid>
      )
    })

    }
    </>
    
  );
}
