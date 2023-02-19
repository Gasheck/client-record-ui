import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ApolloClient, InMemoryCache, ApolloProvider, ApolloLink} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./providers/Auth";
import createTheme from "@mui/material/styles/createTheme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import SidebarProvider from "./providers/Sidebar";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterLuxon";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <AuthProvider>
                        <ThemeProvider theme={darkTheme}>
                            <CssBaseline enableColorScheme />
                            <SidebarProvider>
                                <App />
                            </SidebarProvider>
                        </ThemeProvider>
                    </AuthProvider>
                </LocalizationProvider>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
