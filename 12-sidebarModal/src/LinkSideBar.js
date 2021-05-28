import React from 'react';
import { links } from './data';

const LinkSideBar = () => {
  return (
    <ul className='links'>
      {links.map(link => {
        const { id, text, url, icon } = link;
        return (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default LinkSideBar;
