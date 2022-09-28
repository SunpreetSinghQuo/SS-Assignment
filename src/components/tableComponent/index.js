import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import "./styles.css";


const CommonTable = ({ Cell, list }) => {

    return (
        <>
            <TableContainer component={Paper}>
                <div className="scroll">
                    <Table sx={{ minWidth: 1, fontFamily: "Roboto" }} size="small" aria-label="a dense table" stickyHeader>
                        <TableHead className="Tablehead" >
                            <TableRow className='TableRow'>
                                {Cell.map((Data, index) =>
                                    <>
                                        <TableCell key={Data} sx={{
                                            p: "12px 18px", letterSpacing: "0.02em",
                                            background: "#F7F9FA",
                                            fontWeight: "800",
                                            fontSize: "0.85rem",
                                            color: "#2B3133",
                                            zIndex: index == 0 ? 9 : 0
                                        }}
                                            className={(Data === "Debit" || Data === "Credit" || Data === "Net Balance" || Data === "Rate" || Data === "Total" || Data === "GST" || Data === "STT")
                                                ? "align" : "headCell"}>{Data}
                                        </TableCell>
                                    </>
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ overflow: "scroll", height: "calc(100vh - 429.5px)" }}>
                            {list.map((data) => (
                                <TableRow
                                    key={data.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontWeight: "400", fontSize: "0.875rem", color: "rgba(43, 49, 51, 0.88)", verticalAlign: "top" }}
                                >
                                    {data.map((i, index) => {
                                        switch (i.type) {
                                            case "code":
                                                return (
                                                    <TableCell component="th" scope="row" sx={{ p: "16px 18px", color: "rgba(43, 49, 51, 0.88)", maxWidth: "22.375rem" }}>  {i.value}</TableCell>
                                                )
                                            case "status":
                                                return (
                                                    <TableCell sx={{ p: "16px 18px", color: i.value == "Active" ? "blue" : "red" }}> {i.value}</TableCell>
                                                )
                                            case "description":
                                                return (
                                                    <TableCell sx={{ p: "16px 18px", color: "rgba(43, 49, 51, 0.88)" }}>
                                                        {i.value}
                                                    </TableCell>
                                                )
                                            default:
                                                return null
                                        }
                                    })}

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </TableContainer>
        </>
    )
}

export default CommonTable;