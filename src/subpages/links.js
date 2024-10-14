import React from 'react';
import '../styles/links.css';
import {AiFillLinkedin, AiFillGithub, AiFillMail, AiFillFilePdf} from 'react-icons/ai';

const Links = () => {
  const links = [
    { icon: <AiFillLinkedin size="38" />, href: 'https://www.linkedin.com/in/hisham-haque-794062258/', text: 'LinkedIn' },
    { icon: <AiFillGithub size="38" />, href: 'https://github.com/HishamHXS', text: 'Github' },
    { icon: <AiFillMail size="38" />, href: 'mailto:hishamhaque11@gmail.com', text: 'Email' },
    { icon: <AiFillFilePdf size="38" />, href: '/test.pdf', target: '_blank', text: 'Resume' }, 
  ];

  return (
    <div className="linkbar">
      {links.map((link) => (
        <a key={link.text} href={link.href} className="linkbar-icon group">
          {link.icon}
          <span className="linkbar-tooltip">
            {link.text}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Links;

