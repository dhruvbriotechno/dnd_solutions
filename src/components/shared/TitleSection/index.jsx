import { Box } from '@mui/material'
import React from 'react'
import { useStyles } from './TitleSection.style'

const TitleSection = ({title,subTitle, className, lineColor}) => {
    const classes = useStyles()

  return (
    <Box className={classes.tileSec + '  ' + className}>
      {/* <h5 className='title'>{subTitle}</h5> */}
      <h2 className='subTitle'>{title}</h2>
      <div class="servece-0111" style={{lineColor}}></div>
    </Box>
  )
}

export default TitleSection
