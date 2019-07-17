const _USERS_ = [
    {
        userId: 1,
        username: 'user1',
        avatar: 'https://comps.canstockphoto.com/front-face-redhead-kid-hairstyle-vector-clipart_csp42066801.jpg'
    },
    {
        userId: 3,
        username: 'user3',
        avatar: 'https://comps.canstockphoto.com/front-face-redhead-kid-hairstyle-vector-clipart_csp42066801.jpg'
    },
    {
        userId: 12,
        username: 'user12',
        avatar: 'https://comps.canstockphoto.com/front-face-redhead-kid-hairstyle-vector-clipart_csp42066801.jpg'
    }
];

const _CHATS_ = {
    3: [
        {
            userId: 12,
            chatId: 1212,
            name: 'user12',
            avatar: 'https://comps.canstockphoto.com/front-face-redhead-kid-hairstyle-vector-clipart_csp42066801.jpg'
        },
        {
            userId: 1,
            chatId: 33,
            name: 'user1',
            avatar: 'https://comps.canstockphoto.com/front-face-redhead-kid-hairstyle-vector-clipart_csp42066801.jpg'
        }
    ]
};

const _MESSAGES_ = {
    33: [
        {
            userId: 3,
            text: 'hy!'
        },
        {
            userId: 1,
            text: 'How are you'
        }
    ],
    1212: []
};

export class HttpService {
    static login(username) {
        return new Promise((res, rej) => {
            const user = _USERS_.find(x => x.username === username);
            if (user) {
                res(user);
            } else {
                rej('User Not Found');
            }
        })
    }

    static fetchUser(userId) {
        return new Promise(res => {
            res(_USERS_.find(x => x.userId === userId));
        })
    }

    static fetchChats(userId) {
        return new Promise(res => {
            res(_CHATS_[userId]);
        });
    }

    static fetchMessages(chatId) {
        return new Promise((res) => {
            res(_MESSAGES_[chatId]);
        });
    }

    static sendMessage(chatId, message) {
        return new Promise(res => {
            if (_MESSAGES_.hasOwnProperty(chatId)) {
                _MESSAGES_[chatId].push(message);
                console.log(_MESSAGES_);
                res();
            }
        });
    }
}

