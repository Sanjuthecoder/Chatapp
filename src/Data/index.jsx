import { faker } from '@faker-js/faker';
import {ChatCircleDots , Users , Phone, SignOut, Gear} from 'phosphor-react'
export const Nav_Buttons = [
    {
      index: 0,
      icon: <ChatCircleDots />,
    },
    {
      index: 1,
      icon: <Users />,
    },
    {
      index: 2,
      icon: <Phone />,
    },
  ];
  export const ChatList = [
    {
      id: 0,
      img: faker.image.avatar(),
      name: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "9:36",
      unread: 0,
      pinned: true,
      online: true,
    },
    {
      id: 1,
      img: faker.image.avatar(),
      name: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "12:02",
      unread: 2,
      pinned: true,
      online: false,
    },
    {
      id: 2,
      img: faker.image.avatar(),
      name: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "10:35",
      unread: 3,
      pinned: false,
      online: true,
    },
    {
      id: 3,
      img: faker.image.avatar(),
      name: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "04:00",
      unread: 0,
      pinned: false,
      online: true,
    },
    {
      id: 4,
      img: faker.image.avatar(),
      name: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "08:42",
      unread: 0,
      pinned: false,
      online: false,
    },
    {
      id: 5,
      img: faker.image.avatar(),
      name: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "08:42",
      unread: 0,
      pinned: false,
      online: false,
    },
    {
      id: 6,
      img: faker.image.avatar(),
      name: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "08:42",
      unread: 0,
      pinned: false,
      online: false,
    },
    {
      id: 7,
      img: faker.image.avatar(),
      name: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "08:42",
      unread: 0,
      pinned: false,
      online: false,
    },
  ];

  export const Chat_History = [
    {
      id : 0,
      type: "msg",
      message: "Hi 👋🏻, How are ya ?",
      incoming: true,
      outgoing: false,
    },
    {
      id : 1,
      type: "divider",
      text: "Today",
    },
    {
      id : 2,
      type: "msg",
      message: "Hi 👋 Panda, not bad, u ?",
      incoming: false,
      outgoing: true,
    },
    {
      id : 3,
      type: "msg",
      message: "Can you send me an abstarct image?",
      incoming: false,
      outgoing: true,
    },
    {
      id : 4,
      type: "msg",
      message: "Ya sure, sending you a pic",
      incoming: true,
      outgoing: false,
    },
  
    {
      id : 5,
      type: "msg",
      subtype: "img",
      message: "Here You Go",
      img: faker.image.abstract(),
      incoming: true,
      outgoing: false,
    },
    {
      id : 6,
      type: "msg",
      message: "Can you please send this in file format?",
      incoming: false,
      outgoing: true,
    },
  
    {
      id : 7,
      type: "msg",
      subtype: "doc",
      message: "Yes sure, here you go.",
      incoming: true,
      outgoing: false,
    },
    {
      id : 8,
      type: "msg",
      subtype: "link",
      preview: faker.image.cats(),
      message: "Yep, I can also do that",
      incoming: true,
      outgoing: false,
    },
    {
      id : 9,
      type: "msg",
      subtype: "reply",
      reply: "This is a reply",
      message: "Yep, I can also do that",
      incoming: false,
      outgoing: true,
    },
  ];
  
export const Message_options = [
  {
    id : 1,
    title: "Reply",
  },
  {
    id : 2,
    title: "React to message",
  },
  {
    id : 3,
    title: "Forward message",
  },
  {
    id : 4,
    title: "Star message",
  },
  {
    id : 5,
    title: "Report",
  },
  {
    id : 6,
    title: "Delete Message",
  },
];


export const Profile_Menu = [
  {
    id : 0,
    title: "Profile",
    icon: <Users />,
  },
  {
    id : 1,
    title: "Settings",
    icon: <Gear />,
  },
  {
    id : 2,
    title: "Logout",
    icon: <SignOut />,
  },
];
