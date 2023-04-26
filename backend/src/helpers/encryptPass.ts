const bcrypt = require('bcryptjs');

const encryptPassword = (password: string): string => {
    const hash = bcrypt.hashSync(password, 10)
    return hash
}

export default encryptPassword
