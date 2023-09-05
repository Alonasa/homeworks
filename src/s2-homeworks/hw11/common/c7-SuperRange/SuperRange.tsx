import React from 'react'
import {Slider, SliderProps, styled} from '@mui/material'

export const StyledSlider = styled(Slider)(({ theme }) => ({
  color: "green",
  '& .MuiSlider-rail':{
    color: "lightgray"
  },
  '.MuiSlider-thumb': {
    height: 15,
    width: 15,
    boxShadow: '0 0 0 7px white, 0 0 0 8px green, 0 0 0 9px yellow, 0 0 0 10px green',
    '&:hover': {
      boxShadow: '0 0 0 7px white, 0 0 0 8px green, 0 0 0 10px yellowgreen, 0 0 0 12px green',
    },
  },
}))

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
      <StyledSlider
        {...props}
        />
    )
}

export default SuperRange
