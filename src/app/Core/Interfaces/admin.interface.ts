export interface Admin{
    id?: number;
    first_name: string;
    last_name: string;
    cedula: string;
    status: "active" | "inactive" | "deleted";
}

export interface Login{
    cedula: string;
    password: string;
}

export interface loginResponse{
    message: string;
    data: {
        Admin: Admin;
        token: string;
    };
}