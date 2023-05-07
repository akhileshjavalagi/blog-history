// import * as React from 'react';
import { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import * as React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/login.css";
import { Link, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const TableData = () => {

  const [tabelData, setTableData] = useState([]);

  async function fetchData(): Promise<void> {
    fetch('https://demo.api.admin.circlesnow.com/ProductRESTService.svc/getschedmsg', {
      headers: {
        'Content-Type': 'application/json',
        "token": "akjavalagi@gmail.com"
      }
    })
      .then((response: Response) => response.json())
      .then((data: { dt: string }) => {
        const parsedData = JSON.parse(data.dt);
        setTableData(parsedData);
        console.log(parsedData);
      })
      .catch((error: Error) => console.error(error));
  }
  

  const navigate = useNavigate();

  console.log("table data", tabelData);

  React.useEffect(() => {
    fetchData()
  }, [])

  const [dataId, setDataId] = useState()

  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) => {
    console.log("id", id)
    setDataId(id)
    setOpen(true);
  }
  const handleClose = () => setOpen(false);


  return (
    <div>
      <div style={{ display: "flex", width: "700px", justifyContent: "space-between", margin: "auto" }}>
        <b style={{ fontSize: "30px", fontFamily: "Roboto Black" }}>Library</b>
        <Link to="addBlog">
          <Button style={{ fontFamily: "Roboto Black", backgroundColor : "#8CC928" }} variant="contained" className="submitCancelButton">New Blog</Button>
        </Link>
      </div>
      <div style={{ paddingTop: "10px" }}>
        <TableContainer sx={{ width: 700, margin: "auto" }} component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>

              <TableRow style={{backgroundColor : "#F3F3F3"}}>
                <TableCell sx={{ fontWeight: "bold", fontFamily: "Roboto Regular" }}>Image</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontFamily: "Roboto Regular" }}>Launch Date</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontFamily: "Roboto Regular" }}>Title</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontFamily: "Roboto Regular" }}>Author</TableCell>
              </TableRow>

            </TableHead>
            <TableBody>
              {
                tabelData?.map((e: any) => (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {/* {
                      e.image_lnk.split(".")[e.image_lnk.split(".").length - 1] === "jpg" ? ( */}
                      <img style={{ width: "50px", borderRadius : "10px", padding : "5px" }} src={e.image_lnk}/>
                      {/* )
                      :
                      (
                      <img style={{ width: "50px", borderRadius : "10px", padding : "5px" }}  src="https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png" alt="" />
                    )} */}
                    <TableCell sx={{ fontFamily: "Roboto Regular" }} >{new Date(e.launchdate).toISOString().split("T")[0]}</TableCell>
                    <TableCell sx={{ fontFamily: "Roboto Regular" }} style={{ color: "#009BE9", cursor: "pointer" }} onClick={() => handleOpen(e.id)}>{e.title}</TableCell>
                    <TableCell sx={{ fontFamily: "Roboto Regular" }} >{e.author}</TableCell>
                  </TableRow>
                ))
              }

            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <div>
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              <div style={{ float: "right", cursor : "pointer" }} onClick={handleClose}>
                <CloseIcon />
              </div>
              <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                Description
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                {
                  tabelData?.map((e: any) => (
                    e.id === dataId && <span style={{ fontFamily: "Roboto Regular" }}>{e.description}</span>
                  ))
                }
              </Typography>
              {/* <Button variant="contained" onClick={handleClose} style={{ marginLeft : "150px" }}>Close</Button> */}
            </Box>
          </Modal>
        </div>
      </div>

    </div>
  )
}

export default TableData;
