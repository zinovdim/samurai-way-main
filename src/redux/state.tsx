let state = {
    headerPage: 'https://img.freepik.com/free-psd/logo-mockup-on-grey-wall_35913-2122.jpg?w=740&t=st=1664805418~exp=1664806018~hmac=f10f6fc8146cdcb3aa59776dd32732d40674037fa0519902e7de616960ec568c',
    navPage: {
        navName: [
            {id: 1, link: '/profile', name: 'Profile'},
            {id: 2, link: '/dialogs', name: 'Messages'},
            {id: 3, link: '/news', name: 'News'},
            {id: 4, link: '/music', name: 'Music'},
            {id: 5, link: '/settings', name: 'Settings'}
        ],
    },
    dialogsPages: {
        dialogsData: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Billy'},
            {id: 3, name: 'Arny'},
            {id: 4, name: 'Mihalych'},
            {id: 5, name: 'Piter'},
            {id: 6, name: 'Bob'},
            {id: 7, name: 'Ivan'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello!'},
            {id: 3, message: 'How are your?'},
            {id: 4, message: 'Yo!'}
        ]
    },
    profilePage: {
        posts : [
            {id: 1, message: 'Hi!!', mess: 28},
            {id: 2, message: 'Hello!!!', mess: 35},
            {id: 3, message: 'Hy!!!', mess: 21},
            {id: 4, message: 'Respect!!!', mess: 18},
            {id: 5, message: 'Good Lack', mess: 35},
            {id: 6, message: 'Good!!!', mess: 35},
            {id: 7, message: 'Good Bye', mess: 35},
            {id: 8, message: 'Helllooo', mess: 35}
        ]
    },
}

export default state;