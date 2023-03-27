import { v1 } from "uuid";

export type navPropsType = {
    id: string
    name: string
    link: string
}

export type navNamePropsType = {
    navName: navPropsType[]
}

export type DialPropsType = {
    id: string
    name: string
}

export type MessPropsType = {
    id: string
    message: string
}

export type DialogsPropsType = {
    dialogsData: DialPropsType[]
    messagesData: MessPropsType[]
}

export type PostPropsType = {
    id: string
    message: string
    mess: number
}

export type PostsPropsType = {
    posts: PostPropsType[]
}

export type StatePropsType = {
    headerPage: string
    navPage: navNamePropsType
    dialogsPages: DialogsPropsType
    profilePage: PostsPropsType
}


let state: StatePropsType = {
    headerPage: 'https://img.freepik.com/free-psd/logo-mockup-on-grey-wall_35913-2122.jpg?w=740&t=st=1664805418~exp=1664806018~hmac=f10f6fc8146cdcb3aa59776dd32732d40674037fa0519902e7de616960ec568c',
    navPage: {
        navName: [
            {id: v1(), link: '/profile', name: 'Profile'},
            {id: v1(), link: '/dialogs', name: 'Messages'},
            {id: v1(), link: '/news', name: 'News'},
            {id: v1(), link: '/music', name: 'Music'},
            {id: v1(), link: '/settings', name: 'Settings'}
        ],
    },
    dialogsPages: {
        dialogsData: [
            {id: v1(), name: 'Dima'},
            {id: v1(), name: 'Billy'},
            {id: v1(), name: 'Arny'},
            {id: v1(), name: 'Mihalych'},
            {id: v1(), name: 'Piter'},
            {id: v1(), name: 'Bob'},
            {id: v1(), name: 'Ivan'}
        ],
        messagesData: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'Hello!'},
            {id: v1(), message: 'How are your?'},
            {id: v1(), message: 'Yo!'}
        ]
    },
    profilePage: {
        posts : [
            {id: v1(), message: 'Hi!!', mess: 28},
            {id: v1(), message: 'Hello!!!', mess: 35},

        ]
    },
}




export default state;