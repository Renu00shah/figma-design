"use client";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material"
import React, { useEffect, useState } from 'react'
import Card from "./Card"
import axios from "axios"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Lupin() {
  // const cardItems = [
  //   {
  //     id: 1,
  //     typo1: "NRL MUMNdb",
  //     typo2: "loremjhedjhrfbrhjvfjbvfjbvfjvbhbbfjhrbjhj"
  //   },
  //   {
  //     id: 2,
  //     typo1: "NRL MUMNdb",
  //     typo2: "loremjhedjhrfbrhjvfjbvfjbvfjvbhbbfjhrbjhj"
  //   },
  //   {
  //     id: 3,
  //     typo1: "NRL MUMNdb",
  //     typo2: "loremjhedjhrfbrhjvfjbvfjbvfjvbhbbfjhrbjhj"
  //   },
  //   {
  //     id: 4,
  //     typo1: "NRL MUMNdb",
  //     typo2: "loremjhedjhrfbrhjvfjbvfjbvfjvbhbbfjhrbjhj"
  //   },
  //   {
  //     id: 5,
  //     typo1: "NRL MUMNdb",
  //     typo2: "loremjhedjhrfbrhjvfjbvfjbvfjvbhbbfjhrbjhj"
  //   },
  //   {
  //     id: 6,
  //     typo1: "NRL MUMNdb",
  //     typo2: "loremjhedjhrfbrhjvfjbvfjbvfjvbhbbfjhrbjhj"
  //   },
  // ]
  const [cardItems, setCardItems] = useState([])

  const getData = async () => {
    const data = await axios.post("https://devapi-new.lupindiagnostics.com/api/v1/lsp/centers-by-lat-long", {

      "lat": 19.0807836,

      "lng": 73.026798

    });
    console.log({ data })
    setCardItems(data?.data?.data)

  }

  useEffect(() => {
    getData()
  }, [])

  console.log({ cardItems })

  const style = {
    typo: {
      fontSize: "25px",
      fontWeight: 500

    },
    typo2: {
      marginTop: "30px",
      fontSize: "23px",
      color: "#00AE4D"
    }, root: {
      padding: "20px"
    },
    divider: {
      color: "#00AE4D"
    }
  }
  return (
    <>
      <Box sx={style.root}>
        <Typography sx={style.typo}>We are present across 350+ centers in India</Typography>
        <Typography sx={style.typo2}>Collection Centers Near Me </Typography>
        {/* <Divider sx={style.divider} /> */}

      </Box>

      <Grid container spacing={2}>
        {cardItems.map((val) => (
          <Grid key={val.centreid} item xs={12} sm={4}>
            {/* <Card typo1={val.typo1} typo2={val.typo2} /> */}
            <Card centre={val.centre} Address={val.Address} />
          </Grid>

        ))}
      </Grid>

      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <IconButton>
          <ArrowBackIosIcon sx={{ color: "white", borderRadius: "10px", backgroundColor: "#5E5B5B", padding: "5px" }} />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Typography sx={{ marginRight: "5px" }}>1</Typography>
          <Typography sx={{ marginRight: "5px" }}>2</Typography>
          <Typography sx={{ marginRight: "5px" }}>3</Typography>
          <Typography>......10</Typography>
        </Box>
        <IconButton>
          <ArrowForwardIosIcon sx={{ color: "white", borderRadius: "10px", backgroundColor: "#5E5B5B", padding: "5px" }} />
        </IconButton>
      </Box>

    </>
  )
}
