import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import type { ReactNode } from "react";
import type { User } from "../types/user.ts";
import { loginUser, getCurrentUser } from "../services/authService.ts";

interface AuthContextType {
    currentUser: User | null;
    loading: boolean;

    login: (
        email: string,
        password: string
    ) => Promise<void>;

    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const[loading, setLoading] = useState(true);

    const login = async (email: string, password: string) => {
        const response = await loginUser({
            email,
            password
        })

        localStorage.setItem("token", response.access_token);

        const user = await getCurrentUser(
            response.access_token
        );

        setCurrentUser(user);
        setLoading(false)
    };

    const logout = () => {
        localStorage.removeItem("token");
        setCurrentUser(null);
        setLoading(false)
    }

    useEffect(() => {
    const loadUser = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
        setLoading(false);
        return;
        }

        try {
        const user = await getCurrentUser(token);

        setCurrentUser(user);
        } catch (error) {
        localStorage.removeItem("token");
        setCurrentUser(null);
        } finally {
        setLoading(false);
        }
    };

    loadUser();
    }, []);

    const value: AuthContextType = {
        currentUser,
        loading,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context == undefined) {
        throw new Error(
            "useAuth must be used inside an AuthProvider"
        )
    }

    return context;
}