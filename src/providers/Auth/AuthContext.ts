import React from "react";
import { AuthContextValue } from "./types";

const AuthContext = React.createContext<AuthContextValue>({
    authToken: "",
    login: () => void 0,
    logout: () => void 0,
    isAuth: false,
    loading: false,
});

export default AuthContext;
