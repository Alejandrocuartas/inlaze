import { User } from "../../entities";
import { UserType } from "../../types";

const signup = async (name: string, username: string, email: string, password: string): Promise<UserType> => {
    const newUser = new User({
        name,
        username,
        email,
        password,
    })
    return await newUser.save()
}

export default signup;