import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
function getMoney(value) {
  switch(parseInt(value)){
    case 0: return "\u20B90";
    break;
    case 10: return "\u20B910";
    break;
    case 20: return "\u20B9100";
    break;
    case 30: return "\u20B91k";
    break;
    case 40: return "\u20B92k";
    break;
    case 50: return "\u20B910k";
    break;
    case 60: return "\u20B950k";
    break;
    case 70: return "\u20B9100k";
    break;
    case 80: return "\u20B9200k";
    break;
    case 90: return "\u20B91M";
    break;
    case 100: return "\u20B91M+";
    break;
  }
  return "0";
}
function getYoutubeSubs(value) {
    switch(parseInt(value)){
        case 0: return "0";
        break;
        case 10: return "2k";
        break;
        case 20: return "5k";
        break;
        case 30: return "10k";
        break;
        case 40: return "20k";
        break;
        case 50: return "50k";
        break;
        case 60: return "100k";
        break;
        case 70: return "200k";
        break;
        case 80: return "500k";
        break;
        case 90: return "1M";
        break;
        case 100: return "1M+";
        break;
    }
    return "0";
}


const minDistance = 10;

export default function MinimumDistanceSlider({value,setValue, isSubscriber}) {

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        min={0}
        max={100}
        step={10}
        valueLabelFormat={isSubscriber? getYoutubeSubs : getMoney}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Box>
  );
}