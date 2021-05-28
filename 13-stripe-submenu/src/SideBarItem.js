const SideBarItem = ({ page, links }) => {
  return (
    <article>
      <h4>{page}</h4>
      <div className='sidebar-sublinks'>
        {links.map((link, idx) => {
          const { label, url, icon } = link;
          return (
            <a key={idx} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </article>
  );
};
export default SideBarItem;
