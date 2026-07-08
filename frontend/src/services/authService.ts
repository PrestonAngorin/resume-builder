import api from "D:/portfolio_projects/resume_builder/frontend/src/api/axios.ts";

type RegisterData = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
};

type LoginData = {
    email: string;
    password: string;
};

export async function registerUser(
    data: RegisterData
) {
    const response = await api.post(
        "/auth/register",
        data
    );
    return response.data;
}

export async function loginUser(
    data: LoginData
) {
    const response = await api.post(
        "/auth/login",
        data
    )

    return response.data;
}

export async function getCurrentUser(
    token: string
) {
    const response = await api.get(
        "/users/me",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data
}