export type User = {
    id: string;
    user: string;
    pass: string;
    authkey: string;
    journals: Array<Journal>;
};

export type Journal = {
    id: string;
    name: string;
    content: string;
    prompt: string;
    user: User;
};