import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, CircularProgress, Grid, IconButton, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteOffer } from '../../../state-management/admin/offer/deleteOffer/offerActions';
import { fetchOffer } from '../../../state-management/admin/offer/getAllOffer/offerActions';
import { getOfferById } from '../../../state-management/admin/offer/getSingleOffer/offerActions';
import { ButtonBorder } from '../../shared/ButtonCustom';
import { Container1320 } from '../../shared/CustomContainer';
import { MyModalWithHeader } from '../../shared/MyModal';
import AddOffer from './AddOffer';
import EditOffer from './EditOffer';
import { useStyles } from './slider.style';

import { Loader } from "../../shared/Loader";


const OfferTable = () => {
    const classes = useStyles();
    const delOffer = useSelector((state) => state.deleteOffer);
    const dispatch = useDispatch();
    const { singleOffer, singleLoading, singleError } = useSelector((state) => state.singleOffer);
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);
    const [isDeleteID, setDeleteID] = useState(0);
    const [selectedId, setSelectedId] = React.useState("");
    const [DeleteData, setDeleteData] = useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [openSingleData, setOpenSingleData] = React.useState(false);

    const handleOpenSingle = (id) => {
        setOpenSingleData(true);
        setSelectedId(id);
    };
    const handleCloseSingle = () => setOpenSingleData(false);

    useEffect(() => {
        if (selectedId !== '') {
            dispatch(getOfferById(selectedId));
        }
    }, [selectedId]);

    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    const handleOpenEdit = (offer) => {
        setSelectedOffer(offer);
        setOpenEdit(true);
    };
    const handleCloseEdit = () => {
        setSelectedOffer(null);
        setOpenEdit(false);
    };

    const handleOpenDelete = (id) => {
        setOpenDelete(true);
        setSelectedId(id);
    };
    const handleCloseDelete = () => setOpenDelete(false);

    const handleDeleteConfirm = (id) => {
        dispatch(deleteOffer(id));
        setDeleteData(true);
        setTimeout(() => {
            handleCloseDelete();
        }, [1000]);
    };

    useEffect(() => {
        if (DeleteData) {
            if (delOffer?.message !== '') {
                toast.success(delOffer?.message);
                setDeleteData(false);
            }
        }
    }, [DeleteData, delOffer]);

    const offerState = useSelector((state) => state.allOffer);
    const { loading, offers, error } = offerState;

    useEffect(() => {
        dispatch(fetchOffer());
    }, [dispatch]);

    return (
        <>
            <ToastContainer position="top-right" />
            <Container1320>
                <div className={classes.header}>
                    <h1 className={classes.title}>Offer</h1>
                    <ButtonBorder onClick={handleOpenAdd} className={classes.button} startIcon={<AddIcon />}>
                        Add Offer
                    </ButtonBorder>
                </div>

                {loading ?
                    <Box display="flex" justifyContent="center" alignItems="center" height="450px">
                        <Loader />
                    </Box>
                    : offers?.length ?

                        <Box className={classes.tableResponsive}>
                            <Box className={classes.newTableHeader} sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={1}>No</Grid>
                                    <Grid item xs={2}>Title</Grid>
                                    <Grid item xs={3}>Description</Grid>
                                    <Grid item xs={2}>Image</Grid>
                                    <Grid item xs={2}>Percentage</Grid>
                                    <Grid item xs={2}>Action</Grid>
                                </Grid>
                            </Box>

                            {
                                offers?.length && offers?.map((db, index) => (
                                    <Box key={index} className={classes.newTableRow} sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={1}>{index + 1}</Grid>
                                            <Grid item xs={2}>{db.title}</Grid>
                                            <Grid item xs={3}>{db.description}</Grid>
                                            <Grid item xs={2}>{db.image ? <img src={db.image} alt={db.title} /> : "No Image Available"}</Grid>
                                            <Grid item xs={2}>{db.percentage}</Grid>
                                            <Grid item xs={2}>
                                                <IconButton className={classes.iconButton} onClick={() => handleOpenSingle(db._id)}>
                                                    <VisibilityIcon fontSize="small" />
                                                </IconButton>
                                                <IconButton className={classes.iconButton} onClick={() => handleOpenEdit(db._id)}>
                                                    <EditIcon fontSize="small" />
                                                </IconButton>
                                                <IconButton className={classes.iconButton} onClick={() => handleOpenDelete(db._id)}>
                                                    <DeleteIcon fontSize="small" />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                ))
                            }
                            {error && <p>Error: {error}</p>}
                        </Box>

                        :
                        <p className={classes.content}>No offers available</p>

                }
                <MyModalWithHeader titleHeader={'Add Offer'} open={openAdd} handleClose={handleCloseAdd} >
                    <AddOffer handleCloseAdd={handleCloseAdd} />
                </MyModalWithHeader>

                <MyModalWithHeader titleHeader={'Edit Offer'} open={openEdit} handleClose={handleCloseEdit} >
                    <EditOffer offerId={selectedOffer} handleCloseEdit={handleCloseEdit} />
                </MyModalWithHeader>

                <MyModalWithHeader titleHeader={'Delete Offer'} open={openDelete} handleClose={handleCloseDelete} >
                    <Box className={classes.deleteModalBody}>
                        Are you sure want to delete ?
                        <Stack spacing={2} direction="row" sx={{ mt: '20px', justifyContent: 'end' }}>
                            <Button variant="outlined" onClick={handleCloseDelete}>Cancel</Button>
                            <Button onClick={() => handleDeleteConfirm(selectedId)} variant="contained" startIcon={<DeleteOutlineIcon />}>Delete</Button>
                        </Stack>
                    </Box>
                </MyModalWithHeader>

                <MyModalWithHeader titleHeader={'Offer Data'} open={openSingleData} handleClose={handleCloseSingle} >
                    <Box className={classes.deleteModalBody}>
                        {singleLoading ? (
                            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                                <CircularProgress />
                            </Box>
                        ) : (
                            <Box>
                                <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
                                    <ListItemText primary="Offer Title" secondary={singleOffer?.title} />
                                </ListItem>
                                <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
                                    <ListItemText primary="Offer description" secondary={singleOffer?.description} />
                                </ListItem>
                                <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
                                    <ListItemText primary="Offer percentage" secondary={singleOffer?.percentage} />
                                </ListItem>
                                <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', paddingTop: 0, paddingBottom: 0 }}>
                                    <ListItemText primary="Offer Image" secondary='' />
                                    <ListItemAvatar>
                                        <img src={singleOffer?.image} alt={singleOffer?.image} />
                                    </ListItemAvatar>
                                </ListItem>
                            </Box>
                        )}
                    </Box>
                </MyModalWithHeader>
            </Container1320>
        </>

    );
};

export default OfferTable;
