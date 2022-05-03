import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Settings: React.FC = (props) => {
  return (
    <div
      className="settings"
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: "#f5f6fe",
        height: "100%",
        padding: "1.5rem",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Item>
              <Box display="flex" alignItems="center">
                <Avatar />
                <Typography
                  ml={2}
                  sx={{ fontWeight: "bold", flexGrow: 1, textAlign: "left" }}
                >
                  Profile
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item>xs=6 md=8</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Settings;
