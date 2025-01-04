import React from 'react';
import { Box, Typography, Modal } from '@mui/material';

interface Props {
  open: boolean;
  handleClose: () => void;
  category: string;
  text: string;
}

const ServiceModal: React.FC<Props> = ({ open, handleClose, category, text }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          border: 'none',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography id="modal-title" variant="h4" component="h2">
          {category}
        </Typography>

        <Typography id="modal-description" sx={{ mt: 2 }}>
          {text.split('\n').map((line, idx) => (
            <Typography key={idx} variant="body2" sx={{ mb: 2 }}>
              {line}
            </Typography>
          ))}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ServiceModal;
