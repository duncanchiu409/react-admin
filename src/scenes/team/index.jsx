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
      flex: 0.5,
      headerName: "ID",
      cellClassName: 'name-column--cell'
    },
    {
      field: "name",
      flex: 1,
      headerName: "Name",
    },
    {
      field: "email",
      flex: 1,
      headerName: "Email",
    },
    {
      field: "age",
      flex: 0.5,
      type: "number",
      headerAlign: "left",
      align: "left",
      headerName: "Age",
    },
    {
      field: "phone",
      flex: 1,
      headerName: "Phone",
    },
    {
      field: "access",
      flex: 1,
      headerName: "Access Level",
      headerAlign: 'center',
      renderCell: (params) => {
        return (
          <Box height="100%" display="flex" justifyContent="center">
            <Box
              width="60%"
              m="auto"
              p="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={
                params.value === "admin"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[700]
              }
              borderRadius="4px"
            >
              {params.value === "admin" && <AdminPanelSettingsIcon />}
              {params.value === "manager" && <SecurityOutlinedIcon />}
              {params.value === "user" && <LockOpenOutlinedIcon />}
              <Typography color={colors.grey[100]} ml="5px">
                {params.value}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ m: "20px" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TEAM" subtitle="MANAGING THE TEAM MEMBERS" />
      </Box>
      <Box m="40 0 0 0" height="75vh" sx={{
        "& .MuiDataGrid-root": {
          border: 'none',
        },
        "& .MuiDataGrid-cell": {
          borderBottom: 'none'
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300]
        },
        "& .MuiDataGrid-columnHeader": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none"
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400]
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700]
        }
      }}>
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
}

export default Team;
