import { Box, Typography, Input, Button } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import React from "react";

import "../App.css";
import BasicTable from "../components/Table";
import CustomModal from "../components/Modal";

const ariaLabel = { "aria-label": "description" };

const Recipes: React.FC = () => {
  return (
    <div
      className="recipe"
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
        sx={{ width: "100%" }}
      >
        <Box
          display="flex"
          justifyContent="center"
          sx={{ maxWidth: 1296, width: "100%" }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", flexGrow: 1 }}>
            Recipes
          </Typography>
          <Box display="flex" alignItems="center">
            <Input
              placeholder="Search"
              // inputProps={{ ariaLabel }}
              disableUnderline={true}
              sx={{
                bgcolor: "white",
                borderBottom: "none",
                border: "1px solid #e7e9ed",
                borderRadius: "0.25rem",
                paddingLeft: "0.5rem",
                paddingY: "0.1rem",
                marginRight: "0.5rem",
              }}
            />

            <Button
              variant="outlined"
              color="info"
              sx={{
                bgcolor: "white",
                border: "1px solid #e7e9ed",
                marginRight: "0.5rem",
              }}
            >
              Search
            </Button>
            <CachedIcon sx={{ fontWeight: "bold" }} />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt={3}
          width="100%"
        >
          <BasicTable />
          <CustomModal />
        </Box>
      </Box>
    </div>
  );
};

export default Recipes;
