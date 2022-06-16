import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";

import TextareaAutosize from "@mui/material/TextareaAutosize";

const Feedback: React.FC = (props) => {
  return (
    <div
      className="feedback"
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
        sx={{ flexGrow: 1, width: "100%", maxWidth: "476px", marginX: "auto" }}
      >
        <Box mb={3} sx={{ maxWidth: 1296, width: "100%" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", alignSelf: "start" }}
          >
            Provide Feedback
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" mb={1}>
            Please provide your feedback below.
          </Typography>
          <TextareaAutosize
            maxRows={4}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
            style={{ maxWidth: "476px", width: "476px", height: "381px" }}
          />
          <Button variant="contained">Submit</Button>
        </Box>
      </Box>
    </div>
  );
};

export default Feedback;
