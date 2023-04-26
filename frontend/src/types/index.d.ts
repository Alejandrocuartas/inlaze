export type GlobalContextType = {
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
    user: UserType
};

export type UserType = {
    _id: Types.ObjectId;
    name: string;
    username: string;
    email: string;
    jwt?: string;
}