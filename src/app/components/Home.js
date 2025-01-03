import { IMAGES } from "@/assets/Images"
import { Box, IconButton, Typography } from "@mui/material"
import Image from "next/image"
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
  const style = {
    typo: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }, root: {
      padding: "30px"
    }, container: {
      display: "flex",
      alignItems: "center",
      // justifyContent: "space-between",
      gap: "70px",
      marginBottom: "20px"
    },
    input: {
      display: "flex",
      alignItems: "center",
      padding: "15px",
      borderRadius: "10px",
      position: "relative",
      width: "50%"
    },
    search: {
      position: "absolute",
      right: "300px",
      // bottom: "1px"
    }
  }
  return (
    <>
      <Box sx={style.root}>
        <Box sx={style.container}>
          <Image src={IMAGES.LOGO} alt="logo" />
          <Box sx={style.input}>
            <input style={style.input} placeholder="Search test/packages" />
            <IconButton sx={style.search}>
              <SearchIcon />
            </IconButton>
          </Box>

        </Box>

        <Box sx={style.typo}>
          <Typography>
            Home
          </Typography>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <Typography>Center Locator</Typography>
        </Box>
        <Box>
          <Image src={IMAGES.PIC} alt="pic" />

        </Box>

        <Box></Box>


      </Box>
    </>
  )
}
