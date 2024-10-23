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
import { deleteSlider } from '../../../state-management/admin/slider/deleteSlider/sliderActions';
import { fetchSliders } from '../../../state-management/admin/slider/getAllSliders/sliderActions';
import { getSliderById } from '../../../state-management/admin/slider/getSingleSlider/sliderActions';
import { ButtonBorder } from '../../shared/ButtonCustom';
import { Container1320 } from '../../shared/CustomContainer';
import { Loader } from "../../shared/Loader";
import { MyModalWithHeader } from '../../shared/MyModal';
import AddSlider from './AddSlider';
import EditSlider from './EditSlider';
import { useStyles } from './slider.style';

const SliderTable = () => {
    const classes = useStyles();
    const delSlider = useSelector((state) => state.deleteSlider);
    const { singleSlider, singleLoading, singleError } = useSelector((state) => state.singleSlider);
    const dispatch = useDispatch();

    const [openAdd, setOpenAdd] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [openSingleData, setOpenSingleData] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState("");
    const [DeleteData, setDeleteData] = useState(false);

    // Single Slider 
    const handleOpenSingle = (id) => {
        setOpenSingleData(true);
        setSelectedId(id);
    }
    const handleCloseSingle = () => setOpenSingleData(false);

    useEffect(() => {
        if (selectedId !== '') {
            dispatch(getSliderById(selectedId));
        }
    }, [selectedId]);

    // Add Slider 
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    // Edit Slider 
    const handleOpenEdit = (id) => {
        setOpenEdit(true);
        setSelectedId(id);
    }
    const handleCloseEdit = () => setOpenEdit(false);

    // Delete Slider 
    const handleOpenDelete = (id) => {
        setOpenDelete(true);
        setSelectedId(id);
    }
    const handleCloseDelete = () => setOpenDelete(false);

    const handleDeleteConfirm = (id) => {
        dispatch(deleteSlider(id));
        setDeleteData(true);

        setTimeout(() => {
            handleCloseDelete();
        }, 1000);
    }

    useEffect(() => {
        if (DeleteData) {
            if (delSlider?.message !== '') {
                toast.success(delSlider?.message);
                setDeleteData(false);
            }
        }
    }, [DeleteData, delSlider]);

    // Get All Slider 
    const sliderState = useSelector((state) => state.allSlider);
    const { loading, sliders, error } = sliderState;

    useEffect(() => {
        dispatch(fetchSliders());
    }, [dispatch]);

    return (
        <>
            <ToastContainer position="top-right" />
            <Container1320>
                <div className={classes.header}>
                    <h1 className={classes.title}>Slider</h1>
                    <ButtonBorder onClick={handleOpenAdd} className={classes.button} startIcon={<AddIcon />}>
                        Add Slider
                    </ButtonBorder>
                </div>

                {loading ? <Loader /> :
                    <Box className={classes.tableResponsive}>
                        {/* Table Header */}
                        <Box className={classes.newTableHeader} sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={1}>No</Grid>
                                <Grid item xs={5}>Title</Grid>
                                <Grid item xs={2}>Image</Grid>
                                <Grid item xs={4}>Action</Grid>
                            </Grid>
                        </Box>

                        {/* Table Row */}
                        {sliders.map((db, index) => (
                            <Box key={index} className={classes.newTableRow} sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={1}>{index + 1}</Grid>
                                    <Grid item xs={5}>{db.title}</Grid>
                                    <Grid item xs={2}>
                                        {db.image ? <img src={db.image} alt={db.title} /> : "No Image Available"}
                                    </Grid>
                                    <Grid item xs={4}>
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
                        ))}
                    </Box>
                }
                {/* Add Slider */}
                <MyModalWithHeader titleHeader={'Add Slider'} open={openAdd} handleClose={handleCloseAdd}>
                    <AddSlider handleCloseAdd={handleCloseAdd} />
                </MyModalWithHeader>

                {/* Edit Slider */}
                <MyModalWithHeader titleHeader={'Edit Slider'} open={openEdit} handleClose={handleCloseEdit}>
                    <EditSlider sliderId={selectedId} handleCloseEdit={handleCloseEdit} />
                </MyModalWithHeader>

                {/* Delete Slider */}
                <MyModalWithHeader titleHeader={'Delete Slider'} open={openDelete} handleClose={handleCloseDelete}>
                    <Box className={classes.deleteModalBody}>
                        Are you sure want to delete?
                        <Stack spacing={2} direction="row" sx={{ mt: '20px', justifyContent: 'end' }}>
                            <Button variant="outlined" onClick={handleCloseDelete}>Cancel</Button>
                            <Button onClick={() => handleDeleteConfirm(selectedId)} variant="contained" startIcon={<DeleteOutlineIcon />}>Delete</Button>
                        </Stack>
                    </Box>
                </MyModalWithHeader>

                {/* Single Slider Data */}
                <MyModalWithHeader titleHeader={'Slider Data'} open={openSingleData} handleClose={handleCloseSingle}>
                    <Box className={classes.deleteModalBody}>
                        {singleLoading ? (
                            <Box display="flex" justifyContent="center" alignItems="center" height="450px">
                                <CircularProgress />
                            </Box>
                        ) : (
                            <Box>
                                <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
                                    <ListItemText primary="Slider Title" secondary={singleSlider?.title} />
                                </ListItem>
                                <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', paddingTop: 0, paddingBottom: 0 }}>
                                    <ListItemText primary="Slider Image" secondary='' />
                                    <ListItemAvatar>
                                        <img src={singleSlider?.image} alt={singleSlider?.title} />
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

export default SliderTable;
