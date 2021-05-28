import React, { useContext } from 'react';
import { AppContext } from './context';
import phoneImg from './images/phone.svg';

const Hero = () => {
  const { hiddenSubmenu } = useContext(AppContext);
  return (
    <section className='hero' onMouseOver={hiddenSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Lorem ipsum dolor sit, amet cons tur! Molestias, r</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            accusantium molestiae dignissimos asperiores ullam dolore voluptatum
            neque nostrum h
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' className='phone-img' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
