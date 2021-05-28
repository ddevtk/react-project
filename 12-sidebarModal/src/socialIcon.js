import { social } from './data';

const SocialIcon = () => {
  return (
    <ul className='social-icons'>
      {social.map(el => {
        const { id, url, icon } = el;
        return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcon;
