import TypeIt from "typeit-react";
import { Box } from "@mui/material";

export default function Introduction(){
    return(
        <Box sx={{ display: "flex", justifyContent: "center", p: 5,mt:5 }}>
        <TypeIt
          className="span-typeit"
          getBeforeInit={(instance) => {
            instance
              .type("Hi !")
              .pause(750)
              .type(" Welcome to my portfolio 👦");
            return instance;
          }}
        />
      </Box>
    )
}