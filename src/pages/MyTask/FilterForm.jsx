import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterForm = ({ responseData }) => {
    console.log("dddddddddddddd", responseData);
    return (
        <div>
            <form>
                <b>By Status</b>
                <FormControl variant="standard" sx={{ minWidth: 580 }} className='input_type'>
                    <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        variant="standard"
                        fullWidth
                    >
                        <MenuItem value={10}>High</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: 580 }} className='input_type'>
                    <InputLabel id="demo-simple-select-filled-label">Priority</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        variant="standard"
                        fullWidth
                    >
                        <MenuItem value={10}>High</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: 580 }} className='input_type'>
                    <InputLabel id="demo-simple-select-filled-label">Members</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        variant="standard"
                        fullWidth
                    >
                        <MenuItem value={10}>High</MenuItem>
                    </Select>
                </FormControl>
            </form>
        </div>
    )
}

export default FilterForm