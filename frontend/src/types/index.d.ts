export type GlobalContextType = {
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
    user: UserType
};

export type UserType = {
    _id: string;
    name: string;
    username: string;
    email: string;
    jwt: string;
};

export type MessageType = {
    _id: string;
    title: string;
    text: string;
    date: string;
    user: UserType;
};
