import CloseIcon from "@mui/icons-material/Close";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { useStyles } from './myModal.style';



export function MyModalWithHeader({ children, open, handleClose, width, titleHeader }) {
  const classes = useStyles();

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: width ? width : 400,
    maxWidth: '94%',
    bgcolor: 'background.paper',
    border: '0px solid grey',
    boxShadow: 24,
    // p: 4,
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modalStyle} sx={style}>
          <Box className={classes.headerBox}>
            <h3 className='title'>{titleHeader}</h3>
            <Box className={classes.closeBtn} onClick={handleClose}>
              <CloseIcon />
            </Box>
          </Box>
          {children}
        </Box>
      </Modal>
    </div>
  );
}


export function MyModal({ children, open, handleClose, width }) {
  const classes = useStyles();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: width ? width : 400,
    bgcolor: 'background.paper',
    border: '1px solid grey',
    boxShadow: 24,
    // p: 4,
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
