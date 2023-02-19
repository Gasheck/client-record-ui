import { ApolloError } from "@apollo/client";

export interface AuthContextValue {
    authToken: string;
    login: (email: string, password: string) => void;
    logout: () => void;
    isAuth: boolean;
    loading: boolean;
    error?: ApolloError;
}
