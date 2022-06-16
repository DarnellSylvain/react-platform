import React from "react";
import { LineChart } from "../components/Charts/LineChart";
import { PieChart } from "../components/Charts/PieChart";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { BarChart } from "../components/Charts/BarChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard: React.FC = (props) => {
  return (
    <div
      className="dashboard"
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: "#f5f6fe",
        height: "100%",
        padding: "1.5rem",
        width: `100%`,
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
            Dashboard
          </Typography>
        </Box>

        <Box my={1} sx={{ width: "100%", maxWidth: 1296 }}>
          <Grid container spacing={4}>
            <Grid item sx={{ flexGrow: 1 }} md={3}>
              <Item>
                <Box py={2} sx={{ fontWeight: "bold" }}>
                  <Typography variant="body2">Total Rating</Typography>
                  <Typography variant="h5">A</Typography>
                  <Typography variant="subtitle2">Very Low</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item sx={{ flexGrow: 1 }} md={3}>
              <Item>
                {" "}
                <Box py={2} sx={{ fontWeight: "bold" }}>
                  <Typography variant="body2">Average Rating</Typography>
                  <Typography variant="h5">B</Typography>
                  <Typography variant="subtitle2">Very Low</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item sx={{ flexGrow: 1 }} md={3}>
              <Item>
                {" "}
                <Box py={2} sx={{ fontWeight: "bold" }}>
                  <Typography variant="body2">Total kg COe2</Typography>
                  <Typography variant="h5">23,000</Typography>
                  <Typography variant="subtitle2">Very Low</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item sx={{ flexGrow: 1 }} md={3}>
              <Item>
                {" "}
                <Box py={2} sx={{ fontWeight: "bold" }}>
                  <Typography variant="body2">Carbon Intensity</Typography>
                  <Typography variant="h5">2.302</Typography>
                  <Typography variant="subtitle2">Medium</Typography>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>

        <Box
          mt={3}
          p={2}
          sx={{ bgcolor: "white", width: "100%", maxWidth: 1296 }}
        >
          <LineChart />
        </Box>
        <Box mt={3} p={2} sx={{ width: "100%", maxWidth: 1296 }}>
          <Grid container spacing={4} sx={{ flexGrow: 1 }}>
            <Grid item sx={{ flexGrow: 1 }} xs={12} md={6}>
              <Item>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    padding: 1,
                    textAlign: "left",
                  }}
                >
                  Pie Chart
                </Typography>
                <Divider />
                <Box mt={2} sx={{ height: "400px" }}>
                  <PieChart />
                </Box>
              </Item>
            </Grid>
            <Grid item sx={{ flexGrow: 1 }} xs={12} md={6}>
              <Item>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    padding: 1,
                    textAlign: "left",
                  }}
                >
                  Bar Chart
                </Typography>
                <Divider />
                <Box mt={2} sx={{ height: "400px" }}>
                  <BarChart />
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
