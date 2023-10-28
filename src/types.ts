export type User = {
    id: string;
    username: string;
    pass: string;
    authKey: string;
    journals: Array<Journal>;
};

export type Journal = {
    id: string;
    name: string;
    content: string;
    prompt: string;
    user: User;
};