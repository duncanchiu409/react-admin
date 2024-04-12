import Header from "../../components/Header";
import { Box } from "@mui/material";

function Dashboard() {
  return (
    <Box sx={{ m: "20px" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="WELCOME TO YOUR DASHBOARD"></Header>
      </Box>
    </Box>
  );
}

export default Dashboard;
