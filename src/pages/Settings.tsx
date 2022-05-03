import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, Button, Divider, Typography } from "@mui/material";

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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ flexGrow: 1, width: "100%" }}
      >
        <Box mb={3} sx={{ maxWidth: 1296, width: "100%" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", alignSelf: "start" }}
          >
            My Account
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ maxWidth: 1296, width: "100%" }}>
          <Grid item xs={12} lg={6}>
            <Item sx={{ padding: 3 }}>
              <Box display="flex" alignItems="center" mb={3}>
                <Avatar />
                <Typography
                  ml={2}
                  sx={{ fontWeight: "bold", flexGrow: 1, textAlign: "left" }}
                >
                  Profile
                </Typography>
              </Box>
              <Box display="flex" my={2}>
                <Box sx={{ textAlign: "left", flexGrow: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Name
                  </Typography>
                  <Typography variant="body2">Darnell</Typography>
                </Box>

                <Box>
                  <Button variant="outlined" color="info">
                    Change
                  </Button>
                </Box>
              </Box>
              <Divider />
              <Box display="flex" my={2}>
                <Box sx={{ textAlign: "left", flexGrow: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Organisation Name
                  </Typography>
                  <Typography variant="body2">Darnell</Typography>
                </Box>

                <Box>
                  <Button variant="outlined" color="info">
                    Change
                  </Button>
                </Box>
              </Box>
              <Divider />
              <Box display="flex" my={2}>
                <Box sx={{ textAlign: "left", flexGrow: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Email
                  </Typography>
                  <Typography variant="body2">
                    Darnellsylvain@hotmail.co.uk
                  </Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item sx={{ padding: 3 }}>
              <Box display="flex" alignItems="center" mb={3}>
                <Avatar />
                <Typography
                  ml={2}
                  sx={{ fontWeight: "bold", flexGrow: 1, textAlign: "left" }}
                >
                  a la calc settings
                </Typography>
              </Box>
              <Box display="flex" my={2}>
                <Box sx={{ textAlign: "left", flexGrow: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Alacalc Email
                  </Typography>
                  <Typography variant="body2">
                    contact@myemissions.green
                  </Typography>
                </Box>
              </Box>
              <Divider />
              <Box display="flex" my={2}>
                <Box sx={{ textAlign: "left", flexGrow: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Alacalc Key
                  </Typography>
                  <Typography variant="body2">
                    02989*************694c8
                  </Typography>
                </Box>
              </Box>
              <Divider />
              <Box display="flex" justifyContent="end" my={2}>
                <Box sx={{ justifySelf: "end" }}>
                  <Button variant="outlined" color="info">
                    Change
                  </Button>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item sx={{ padding: 3 }}>
              <Box display="flex" alignItems="center" mb={3}>
                <Avatar />
                <Typography
                  ml={2}
                  sx={{ fontWeight: "bold", flexGrow: 1, textAlign: "left" }}
                >
                  Security
                </Typography>
              </Box>
              <Box display="flex" my={2}>
                <Box sx={{ textAlign: "left", flexGrow: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Password
                  </Typography>
                  <Typography variant="body2">••••••••</Typography>
                </Box>

                <Box>
                  <Button variant="outlined" color="info">
                    Change
                  </Button>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item sx={{ padding: 3 }}>
              <Box display="flex" alignItems="center" mb={3}>
                <Avatar />
                <Typography
                  ml={2}
                  sx={{ fontWeight: "bold", flexGrow: 1, textAlign: "left" }}
                >
                  Subscription
                </Typography>
              </Box>
              <Box display="flex" my={2}>
                <Box sx={{ textAlign: "left", flexGrow: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Subscription Type
                  </Typography>
                  <Typography variant="body2">a la calc BETA</Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Settings;
