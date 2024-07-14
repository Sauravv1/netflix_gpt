import React from 'react';

const Header = () => {
  return (
    <div className="absolute  px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row items-center md:items-start justify-between">
  <img
    src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
    alt='Netflix Logo'
    className="w-44 mx-auto md:mx-8 md:ml-16 "
  />
</div>

  );
}

export default Header;
