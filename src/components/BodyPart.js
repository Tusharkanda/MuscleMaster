import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      background: '#fff',
      borderBottomLeftRadius: '20px',
      width: '270px',
      height: '100px',
      cursor: 'pointer',
      gap: '20px',
      display: 'inline-block',
      verticalAlign: 'top',
      marginBottom: '20px',
      marginRight: '20px',
      mt: '20px', // Added margin-top to move the component down
      ...(bodyPart === item && {
        borderTop: '4px solid #FF2625',
      }),
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img
      src={Icon}
      alt="dumbbell"
      style={{
        width: '60px',
        height: '60px',
        display: 'block', // Ensures the image is treated as a block element
        margin: 'auto', // Center align horizontally
      }}
    />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
      textAlign="center"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
