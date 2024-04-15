import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

function Invoices() {
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
      field: "phone",
      flex: 1,
      headerName: "Phone",
    },
    {
      field: "cost",
      flex: 1,
      type: "number",
      headerAlign: "left",
      align: "left",
      headerName: "Cost",
      renderCell: (params) => {
        return (
          <Box height="100%" display="flex" alignItems="center">
            <Typography color={colors.greenAccent[500]}>
              $ {params.value}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "date",
      flex: 1,
      type: "Date",
      headerName: "Date",
    },
  ];

  return (
    <Box sx={{ m: "20px" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="INVOICES" subtitle="LIST OF INVOICES BALANCE" />
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
          "& .MuiDataGrid-scrollbarFiller--header": {
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckBox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
}

export default Invoices;
