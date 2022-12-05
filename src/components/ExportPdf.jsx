import React from 'react';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { Box, Button, useTheme} from "@mui/material";
import { tokens } from "../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const ExportPdf = ({ rootElementId, downloadFileName }) => {
    const downloadDocument = () => {
      const input = document.body;
      console.log(input, rootElementId);
      html2canvas(input).then((canvas) => {
        console.log(canvas);
        const imgData = canvas.toDataURL("image/png"); // taking screenshot of html page
        
        const pdf = new jsPDF("l","mm","a4");
        pdf.addImage(imgData, "JPEG",  10, 10, 280, 180); //converting screenshot to pdf
        pdf.save(`${downloadFileName}`);
      });
    };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <>
             <Box>
                <Button
                    sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    }} 
                    onClick={() => setTimeout(downloadDocument, 1000)}
                >
                    <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                    Download Reports
                </Button>
             </Box>
            
    </>
  )
}

export default ExportPdf
