import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='logo.svg' alt='' />
        <span>React Admin</span>
      </div>
      <div className='icons'>
        <img src='/search.svg' alt='icon' />
        <img src='/app.svg' alt='icon' />
        <img src='/expand.svg' alt='icon' />
        <div className='notification'>
          <img src='/notifications.svg' alt='' />
          <span>1</span>
        </div>
        <div className='user'>
          <img
            src='https://avatars.githubusercontent.com/u/36846475?v=4'
            alt=''
          />
          <span>Gerrard</span>
        </div>
        <img src='/settings.svg' alt='icon' />
      </div>
    </div>
  );
};
export default Navbar;
