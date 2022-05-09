import React from "react";

import CarbonRatingA from "../assets/branding/carbon_ratings/cloud-A.png";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { grey } from "@mui/material/colors";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 0,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const emission_results = [
  {
    emission_results_title: "Emissions Total",
    emission_results_value: 239.3,
    emission_results_unit: "g CO2e",
  },
  {
    emission_results_title: "Emissions Per Serving",
    emission_results_value: 102.4,
    emission_results_unit: "g CO2e",
  },
  {
    emission_results_title: "Carbon Intensity",
    emission_results_value: 0.8,
    emission_results_unit: "kgCO2e / kgfood",
  },
];

// function FormRow() {
//   return (
//     <React.Fragment>
//       <Grid item xs={6}>
//         <Typography variant="body1"></Typography>
//       </Grid>
//       <Grid item xs={2}>
//         <Typography variant="body1" textAlign="right">

//         </Typography>
//       </Grid>
//       <Grid item xs={4}>
//         <Typography variant="body1"></Typography>
//       </Grid>
//     </React.Fragment>
//   );
// }

const CustomModal: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  interface EmissionsDataRowProps {
    emission_results_title: string;
    emission_results_value: number | string;
    emission_results_unit: string;
  }

  const EmissionsDataRow: React.FC<EmissionsDataRowProps> = ({
    emission_results_title,
    emission_results_unit,
    emission_results_value,
  }) => {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Typography variant="body1">{emission_results_title}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="body1"
            textAlign="right"
            sx={{ fontWeight: "bold" }}
          >
            {emission_results_value}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">{emission_results_unit}</Typography>
        </Grid>
      </React.Fragment>
    );
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            className="modal-header"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={2}
          >
            <Typography variant="h5" id="modal-modal-title">
              Modal title
            </Typography>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Box>
          <Box className="modal-body">
            <Box p={2} sx={{ backgroundColor: grey[100] }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Emissions
              </Typography>
            </Box>

            <Box p={2}>
              <Grid container>
                <Grid item container sm={9}>
                  <Grid p={0.5} item container spacing={2}>
                    <EmissionsDataRow
                      emission_results_title="Emissions Total"
                      emission_results_value={152.1}
                      emission_results_unit="g CO2e"
                    />
                  </Grid>
                  <Grid p={0.5} item container spacing={2}>
                    <EmissionsDataRow
                      emission_results_title="Emissions Per Serving"
                      emission_results_value={101.4}
                      emission_results_unit="g CO2e"
                    />
                  </Grid>
                  <Grid p={0.5} item container spacing={2}>
                    <EmissionsDataRow
                      emission_results_title="Carbon Intensity"
                      emission_results_value={1.01}
                      emission_results_unit="kgCO2e / kgfood"
                    />
                  </Grid>
                  <Grid p={0.5} item container spacing={2}>
                    <EmissionsDataRow
                      emission_results_title="Emissions Category"
                      emission_results_value="A"
                      emission_results_unit="Very Low"
                    />
                  </Grid>
                </Grid>
                <Grid item sm={3} textAlign="center">
                  <Box
                    component="img"
                    src={CarbonRatingA}
                    sx={{
                      height: 130,
                      width: 84,
                    }}
                  />
                </Grid>
              </Grid>
              {/* <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                  <Grid item sm={9}>
                    <Typography variant="body1">
                      Emissions Per Serving:
                    </Typography>
                    <Typography variant="body1">21.5</Typography>
                    <Typography variant="body1">g CO2e</Typography>
                  </Grid>
                  <Grid item sm={3}>
                    IMAGE
                  </Grid>
                </Grid>
              </Box> */}
              <Typography mt={3} variant="body2" id="modal-modal-description">
                Estimates based on average emissions factors for the ingredients
                used. The values are not suitable for external use.
              </Typography>
            </Box>

            <Box p={2} sx={{ backgroundColor: grey[100] }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Ingredients
              </Typography>
            </Box>
            <Box p={2} sx={{ backgroundColor: grey[100] }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Additional Information
              </Typography>
            </Box>
          </Box>
          <Box className="modal-footer">
            <Button onClick={handleClose}>Close</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
