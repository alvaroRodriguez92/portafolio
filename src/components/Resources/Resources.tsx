import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import ResourceCard from "./ResourceCard";

export default function Resources(){
    return(  
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
    id="resources">
      <Grid
        container
        className="grid_resources_responsive"
        sx={{
          maxWidth: "100vw",
          border: "2px solid #efefef",
          borderRadius: "16px",
          m: 8,
          mt: 20,
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "10px 10px 10px #031428",
          width: "80%",
          margin:"0 auto",
          mb:10
        }}
      >
        <Grid item lg={12} sx={{ mb: 6 }}>
          <h1 className="text_underlined">Resources </h1>
        </Grid>
        <Grid item lg={10} md={12} sx={{ p: 3, mb: 5 }}>
          <span className="span_aboutme">
            In this section you can check a collection of resources that helped me a lot and I still use it.
          </span>
        </Grid>
        <Grid className="grid_resource_2"  item lg={12} sx={{flexWrap:"wrap",width:"100%", display:"flex", flexDirection:"column", }}>
            <ResourceCard/>
        </Grid>

      </Grid>
    </motion.div>
  );
}
