import React, { FC, useCallback, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import Cookies from "js-cookie";
import { useLoginMutation } from "graphql/generated/graphql";

const AuthProvider: FC = ({ children }) => {
    const [authToken, setAuthToken] = useState(Cookies.get("token") || "");
    const [isAuth, setIsAuth] = useState(!!authToken);
    const [loginMutation, { data, loading, error }] = useLoginMutation();

    useEffect(() => {
        if (data) {
            setAuthToken(data.login.accessToken);
        }
    }, [data, setAuthToken]);

    useEffect(() => {
        if (authToken) {
            Cookies.set("token", authToken, { expires: 1 });
        } else {
            Cookies.remove("token");
        }
    }, [authToken]);

    useEffect(() => {
        setIsAuth(!!authToken);
    }, [authToken]);

    const login = useCallback(
        async (email: string, password: string) => {
            await loginMutation({
                variables: {
                    email,
                    password,
                },
            });
        },
        [loginMutation]
    );

    const logout = useCallback(() => {
        setAuthToken("");
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                login,
                logout,
                error,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
