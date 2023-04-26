const jwt = require('jsonwebtoken')

const jwtGenerator = (id: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const payload = {
            id
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
