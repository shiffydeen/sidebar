import React from 'react';
import Facebook from './facebook.svg'
import Twitter from './twitter.svg'
import Behance from './behance.svg'
import Linkedin from './linkedin.svg'
import Calendar from './calendar-week-fill.svg'
import People from './people-fill.svg'
import Folder from './folder2-open.svg'
import Home from './house-fill.svg'
import File from './file-text.svg'

// import {
//   FaBehance,
//   FaFacebook,
//   FaLinkedin,
//   FaTwitter,
//   FaSketch,
//   FaHome,
//   FaUserFriends,
//   FaFolderOpen,
//   FaCalendarAlt,
//   FaWpforms,
// } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: Home,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: People,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: Folder,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: Calendar,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: File,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: Facebook,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: Twitter,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: Linkedin,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: Behance,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: Behance,
  },
];
