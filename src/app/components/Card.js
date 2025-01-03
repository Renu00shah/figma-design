import { Box, Button, Typography } from "@mui/material"
import React from 'react'

export default function Card({ centre, Address }) {
  // console.log(cardItems)
  const style = {
    root: {
      // border: "2px solid red",
      padding: "20px"
    },
    typo1: {
      color: "#632C76",
      fontSize: "15px",
      marginBottom: "10px"
    },
    typo2: {
      color: "#000",
      fontSize: "12px",
      marginBottom: "20px"
    },
    know: {
      color: "#00AE4D",
      fontSize: "12px"
    },
    book: {
      color: "#00AE4D",
      fontSize: "12px",
      border: "1px solid #00AE4D"
    },
    button: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
      gap: "20px"
      // justifyContent: "space-between"
    }
  }
  return (
    <>
      <Box sx={style.root}>
        <Typography sx={style.typo1}>
          {Address}
        </Typography>
        <Typography sx={style.typo2}>{centre}</Typography>
        <Box sx={style.button}>
          <Typography sx={style.know}>Know More</Typography>
          <Button sx={style.book}>Book a visit</Button>
        </Box>
      </Box>

    </>
  )
}
