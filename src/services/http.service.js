export class HttpService {
    static login(username) {
        return new Promise(res => {
            res({
                userId: 1,
                username: username,
                avatar: 'https://comps.canstockphoto.com/front-face-redhead-kid-hairstyle-vector-clipart_csp42066801.jpg'
            })
        })
    }
}
