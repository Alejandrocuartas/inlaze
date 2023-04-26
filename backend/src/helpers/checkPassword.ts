const bcrypt = require("bcryptjs")

const checkPass = (password: string, userPw: string): boolean => {
    const passIsCorrect: boolean = bcrypt.compareSync(password, userPw)
    return passIsCorrect
}

export default checkPass;
