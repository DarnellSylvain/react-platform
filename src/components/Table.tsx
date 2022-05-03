import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  recipe: string,
  emissions: number,
  carbon_intensity: number,
  rating: string,
  status: string
) {
  return { recipe, emissions, carbon_intensity, rating, status };
}

const rows = [
  createData("Pain au choco", 1275.5, 14.15, "A", "Complete"),
  createData("Better name for a recipe", 849.5, 14.15, "B", "Complete"),
  createData("Sausage pasta", 1275.5, 14.15, "C", "Complete"),
  createData("Prawn linguine", 849.5, 14.15, "D", "Complete"),
  createData("Chicken roast dinner", 1275.5, 14.15, "E", "Complete"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ width: "100%", maxWidth: 1296 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th">Recipe</TableCell>
            <TableCell component="th">
              Emissions *<br />
              <em>
                (g CO<sub>2</sub>e)
              </em>
            </TableCell>
            <TableCell component="th">
              Carbon Intensity *<br />
              <em>
                (kg CO<sub>2</sub>e / kg<sub>food</sub>)
              </em>
            </TableCell>
            <TableCell component="th">Rating</TableCell>
            <TableCell component="th">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.recipe}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                ":hover": { backgroundColor: "#f5f6fe" },
                cursor: "pointer",
              }}
            >
              <TableCell scope="row">{row.recipe}</TableCell>
              <TableCell>{row.emissions}</TableCell>
              <TableCell>{row.carbon_intensity}</TableCell>
              <TableCell>{row.rating}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
