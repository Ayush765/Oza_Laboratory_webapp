import BiotechIcon from "@mui/icons-material/Biotech";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { styled } from "@mui/material/styles";
import AddPatientForm from "../../components/AddPatientForm";
import AddTestForm from "../../components/AddTestForm";
import ViewTestsTable from "../../components/ViewTestsTable";
import { useNavigate } from "react-router-dom";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${240}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const ViewTest = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("authorization") === "" ||
      localStorage.getItem("authorization") === undefined ||
      localStorage.getItem("authorization") === null
    ) {
      navigate("/");
    }
  });
  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <Main open={open}>
        <ViewTestsTable />
      </Main>
    </>
  );
};

export default ViewTest;
