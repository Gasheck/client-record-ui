import React, { FC } from "react";
import { Grid } from "@mui/material";

const AppointmentGridItem: FC = ({ children }) => {
    return (
        <Grid
            sx={{
                gridColumn: {
                    xs: "span 12",
                    md: "span 6",
                    lg: "span 4",
                    xl: "span 3",
                },
            }}
        >
            {children}
        </Grid>
    );
};

export default AppointmentGridItem;
