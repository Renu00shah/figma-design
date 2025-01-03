import { Box, Divider, Grid, Typography } from "@mui/material"
import React from 'react'
import Card from "./Card"

export default function Lupin() {
  const cardItems = [
    {
      id: 1,
      typo1: "NRL MUMNdb",
      typo2: "loremjhedjhrfbrhjvfjbvfjbvfjvbhbbfjhrbjhj"
    },
    {
      id: 2,
      typo1: "NRL MUMNdb",
      typo2: "loremjhedjhrfbrhjvfjbvfjbvfjvbhbbfjhrbjhj"
    },
    {
      id: 3,
      typo1: "NRL MUMNdb",
      typo2: "loremjhedjhrfbrhjvfjbvfjbvfjvbhbbfjhrbjhj"
    },
    {
      id: 4,
      typo1: "NRL MUMNdb",
      typo2: "loremjhedjhrfbrhjvfjbvfjbvfjvbhbbfjhrbjhj"
    },
    {
      id: 5,
      typo1: "NRL MUMNdb",
      typo2: "loremjhedjhrfbrhjvfjbvfjbvfjvbhbbfjhrbjhj"
    },
    {
      id: 6,
      typo1: "NRL MUMNdb",
      typo2: "loremjhedjhrfbrhjvfjbvfjbvfjvbhbbfjhrbjhj"
    },
  ]
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
        <Divider sx={style.divider} />

      </Box>

      <Grid container spacing={2}>
        {cardItems.map((val) => (
          <Grid key={val.id} item xs={12} sm={4}>
            <Card typo1={val.typo1} typo2={val.typo2} />
          </Grid>

        ))}
      </Grid>

    </>
  )
}
