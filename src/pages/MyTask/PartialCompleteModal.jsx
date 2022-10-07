import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
    FaJoget,
} from "react-icons/fa";
import { Divider } from '@mui/material';

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


export default function PartialCompleteModal({ partial }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log('ssssssssssssssssssssssssss', partial);

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <FaJoget onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Partial Complete
                    </Typography>
                    <Divider />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                        {partial?.data.map((item) => {
                            <div>
                                <h1>hahahshshhs{item.Id}</h1>
                                <h1>{item.Id}</h1>
                                <h1>{item.Value}</h1>
                            </div>

                        })}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
