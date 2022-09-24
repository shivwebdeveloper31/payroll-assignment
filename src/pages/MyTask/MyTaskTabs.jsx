import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core';
import { ColorRing } from 'react-loader-spinner'
import Table from '@mui/material/Table';
import moment from 'moment/moment';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ responseData, query }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log("gggggggggggggg", responseData);

    const StyleTableCell = withStyles({
        head: {
            fontWeight: 600,
            padding: 5
        },
        body: {
            padding: 5,
            whiteSpace: 'nowrap'
        }
    })(TableCell);

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="MY Task" {...a11yProps(0)} />
                        <Tab label="CC" {...a11yProps(1)} />
                        <Tab label="Assigned By me" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Table>
                        <TableRow>
                            <StyleTableCell>Title</StyleTableCell>
                            <StyleTableCell>Customer Name</StyleTableCell>
                            <StyleTableCell>Assigned By</StyleTableCell>
                            <StyleTableCell>Assigned Date</StyleTableCell>
                            <StyleTableCell>Due Date</StyleTableCell>
                            <StyleTableCell>Priority</StyleTableCell>
                            <StyleTableCell>Status</StyleTableCell>
                            <StyleTableCell></StyleTableCell>
                        </TableRow>
                        {responseData?.data?.TaskList ? responseData?.data?.TaskList?.filter((data) => {
                            if (query === "") {

                                return data;

                            } else if (data.Title.toLowerCase().includes(query.toLowerCase())) {
                                return data;
                            }
                        }).map((data) =>
                        (<TableRow>
                            <StyleTableCell>{data.Title}</StyleTableCell>
                            <StyleTableCell>{data.LeadName}</StyleTableCell>
                            <StyleTableCell>{data.AssignedByUserName}</StyleTableCell>
                            <StyleTableCell>{moment(data.CreateDate).format("MMM Do YY")}</StyleTableCell>
                            <StyleTableCell>{moment(data.TaskEndDate).format("MMM Do YY")}</StyleTableCell>
                            <StyleTableCell>{data.Priority}</StyleTableCell>
                            <StyleTableCell style={{ color: 'red' }}>Not Accepted</StyleTableCell>
                            <StyleTableCell></StyleTableCell>
                        </TableRow>
                        )) : <div>
                            <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        </div>}
                    </Table>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Box>

        </>
    );
}
