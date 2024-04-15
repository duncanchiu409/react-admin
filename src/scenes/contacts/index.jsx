import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      flex: 0.5,
      headerName: "ID",
      cellClassName: "name-column--cell",
    },
    {
      field: "registrarId",
      flex: 1,
      headerName: "Registrar ID",
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
      field: "address",
      flex: 2,
      headerName: "Address",
    },
    {
      field: "city",
      flex: 1,
      headerName: "City",
    },
    {
      field: "zipCode",
      flex: 1,
      headerName: "Zip Code",
    },
  ];

  return (
    <Box sx={{ m: "20px" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="CONTACTS"
          subtitle="LIST OF CONTACTS FOR FUTURE REFERENCE"
        />
      </Box>
      <Box
        m="40 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`
          },
          "& .MuiDataGrid-scrollbarFiller--header": {
            backgroundColor: colors.blueAccent[700]
          }
        }}
      >
        <DataGrid rows={mockDataContacts} columns={columns} slots={{toolbar: GridToolbar}}/>
      </Box>
    </Box>
  );
}

export default Contacts;
