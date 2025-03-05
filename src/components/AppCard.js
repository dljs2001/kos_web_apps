import React from 'react';
import {
  Card,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const CardContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '25px',
  aspectRatio: '1',
  display: 'flex',
  padding: '0',
  backdropFilter: 'blur(10px)',
  border: 'none',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 40px 0 rgba(31, 38, 135, 0.5)',
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  borderRadius: '15px',
  textTransform: 'none',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.37)',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 6px 20px 0 rgba(31, 38, 135, 0.5)',
  },
}));

const AppCard = ({ app, isAdd, onClick }) => {
  if (isAdd) {
    return (
      <StyledCard
        sx={{
          cursor: 'pointer',
          '&:hover': { background: 'rgba(255, 255, 255, 0.15)' },
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
        onClick={onClick}
      >
        <Box
          sx={{
            width: '50px',
            height: '50px',
            border: '2px solid white',
            borderRadius: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '30px',
          }}
        >
          +
        </Box>
      </StyledCard>
    );
  }

  return (
    <CardContainer>
      <StyledCard>
        {app.thumbnail ? (
          <img
            src={app.thumbnail}
            alt={app.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        ) : (
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              textAlign: 'center',
              fontWeight: '500',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '20px',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {app.name}
          </Typography>
        )}
      </StyledCard>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <StyledButton
          fullWidth
          onClick={() => window.open(app.url, '_blank')}
        >
          Open In New Tab
        </StyledButton>
        <StyledButton
          fullWidth
          onClick={() => window.open(app.url, '_self')}
        >
          Open In This Tab
        </StyledButton>
      </Box>
    </CardContainer>
  );
};

export default AppCard;