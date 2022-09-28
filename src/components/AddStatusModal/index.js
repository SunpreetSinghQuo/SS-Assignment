import React, { useState, useEffect } from 'react';
import './styles.css';
import { Button, Modal, Box, Typography, TextField, TextareaAutosize, RadioGroup, Radio, styled, FormControlLabel, useRadioGroup } from '@mui/material';


export const AddStatusModal = ({ visible, handleClose, submitAndAddRow }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [id, setId] = useState("");
    const [description, setDescription] = useState("");
    const [radioStatus, setRadioStatus] = useState("Active");

    const submit = () => {
        const param = [{
            value: id,
            type: "code"
        }, {
            value: radioStatus,
            type: "status"
        }, {
            value: description,
            type: "description"
        }];
        submitAndAddRow(param)
        handleClose()
    }

    useEffect(() => {
        setId("")
        setDescription("")
        setRadioStatus("Active")
    }, [visible])

    return (
        <Modal
            open={visible}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h5" component="h1">
                    Add new Status
                </Typography>
                <TextField
                    id="standard-basic"
                    label="Code"
                    variant="standard"
                    style={{ marginTop: "40px" }}
                    value={id}
                    onChange={(v) => setId(v.target.value)}
                />
                <Typography id="modal-modal-description" sx={{ mt: 2, marginTop: "30px" }}>
                    Select the current status:
                 </Typography>
                <RadioGroup name="use-radio-group" defaultValue="Active" onChange={(v) => setRadioStatus(v.target.value)}>
                    <MyFormControlLabel value="Active" label="Active" control={<Radio />} />
                    <MyFormControlLabel value="Inactive" label="Inactive" control={<Radio />} />
                </RadioGroup>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    value={description}
                    onChange={(v) => setDescription(v.target.value)}
                    placeholder="Please enter the description...."
                    style={{ width: 400, marginTop: "30px" }}
                />
                <Button onClick={submit} variant="contained" color="success" style={{ marginTop: "40px" }}>Submit</Button>
            </Box>
        </Modal>
    )
}

const StyledFormControlLabel = styled((props) => (
    <FormControlLabel {...props} />
))(({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main,
    },
}));

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}