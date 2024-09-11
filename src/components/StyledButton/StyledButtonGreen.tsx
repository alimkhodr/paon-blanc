import { styled } from '@mui/system';
import { Button } from '@mui/material';
import theme from '../../theme';

const StyledButtonGreen = styled(Button)(() => ({
  boxShadow: 'none',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: 'none',
  padding: '4px 12px',
  fontWeight: 'bold',
  textTransform: 'none',
  transition: "background-color 0.8s ease,transform 0.8s ease, border 0.8s ease, color 0.8s ease",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
  },
}));

export default StyledButtonGreen;
