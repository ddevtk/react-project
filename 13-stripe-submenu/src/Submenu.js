import React, { useRef, useEffect, useContext } from 'react';
import { AppContext } from './context';

const Submenu = () => {
  const asideContainer = useRef();
  const { isShowSubmenu, location, subLink } = useContext(AppContext);
  const { page, links } = subLink;
  useEffect(() => {
    const { centerLocation, bottomCustom } = location;
    asideContainer.current.style.left = `${centerLocation}px`;
    asideContainer.current.style.top = `${bottomCustom}px`;
  }, [location]);
  return (
    <aside
      className={`${isShowSubmenu ? 'submenu show' : 'submenu'}`}
      ref={asideContainer}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center col-${links.length}`}>
          {links.map((link, idx) => {
            const { label, icon, url } = link;
            return (
              <a href={url} key={idx}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
