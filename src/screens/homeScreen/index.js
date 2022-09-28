import React, { useState } from 'react';
import CommonTable from '../../components/tableComponent/index';
import './styles.css';
import { Button } from '@mui/material';
import { AddStatusModal } from '../../components/AddStatusModal';

function HomeScreen() {

    const [open, setOpen] = useState(false);

    const [statusArr, setStatusArr] = useState([]);

    const Cell = ["Code", "Status", "Description"];

    const [visible, setVisible] = useState(false);

    const addNewRow = () => setVisible(true);

    const handleClose = () => setVisible(false);


    const onModalClick = () => {
        setOpen(!open);
    }

    const submitAndAddRow = (param) => {
        const arr = [...statusArr];
        arr.push(param);
        setStatusArr(arr)
    }

    return (
        <div className="container">
            <h1>Manage Status</h1>
            <div className="app-button">
                <div className="button-Wrapper">
                    <Button onClick={addNewRow} variant="contained">Add new Status</Button>
                </div>
            </div>
            <CommonTable onModalClick={onModalClick} Cell={Cell} list={statusArr} />
            <AddStatusModal visible={visible} handleClose={handleClose} submitAndAddRow={submitAndAddRow} />
        </div>
    );
}

export default HomeScreen;