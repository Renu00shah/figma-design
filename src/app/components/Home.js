import { IMAGES } from "@/assets/Images"
import { Box, IconButton, Typography } from "@mui/material"
import Image from "next/image"
import React from 'react'
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Home() {
  const style = {
    typo: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }, root: {
      padding: "30px"
    }
  }
  return (
    <>
      <Box sx={style.root}>
        <Box>
          <Image src={IMAGES.LOGO} alt="logo" />
        </Box>

        <Box sx={style.typo}>
          <Typography>
            Home
          </Typography>
          {/* <IconButton>
            <ChevronRightIcon />
          </IconButton> */}
          <Typography>Center Locator</Typography>
        </Box>
        <Box>
          <Image src={IMAGES.PIC} alt="pic" />
          <Typography sx={style.center}>Center Locator</Typography>
        </Box>


      </Box>
    </>
  )
}
