export const FakeAPI = {
    login: async ({email, password}) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if(email === 'test@gmail.com' && password === '1234') {
                    resolve({success: true, user: {name: 'Admin'}})
                } else {
                    resolve({success: false, message: 'invalid credentials'})
                }
            }, 1000)
        })
    }
}