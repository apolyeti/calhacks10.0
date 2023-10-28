export type User = {
    id: string;
    user: string;
    pass: string;
    authKey: string;
    journals: Array<Journal>;
};

export type Journal = {
    id: string;
    name: string;
    content: string;
    emotion: string;
};