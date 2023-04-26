const jwt = require('jsonwebtoken')

const jwtGenerator = (username: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const payload = {
            username
        }
        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '6h'
        }, (err: any, token: string) => {
            if (err) {
                reject('Could not generate token.')
            } else {
                resolve(token)
            }
        })
    })
}

export default jwtGenerator;
