import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
    },
  ];

  return (
    <Box sx={{ m: "20px" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TEAM" subtitle="MANAGING THE TEAM MEMBERS" />
      </Box>
      <Box>
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
}

export default Team;
