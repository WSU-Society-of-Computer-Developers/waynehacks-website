import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Add as AddIcon } from '@mui/icons-material';

/**
 * @typedef {Object} QAProps
 * @property {string} question - The accordion's title
 * @property {string} answer - The accordion's inner content
 */

/**
 * React component for question and answers in MUI accordions
 * @param {QAProps} props
*/
export default function QA({ question, answer }) {
    return (
        <div style={{ width: "100%" }}>
            <Accordion sx={{ background: "rgba(65, 190, 92,0.15)", color: "white" }}>
                <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6" compact="h6" style={{ fontFamily: 'GlacialIndifference-Regular', }}>{question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" color={"lightgray"}>
                        {answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}