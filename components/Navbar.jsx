import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Next E-Comm</Link>
      </p>
      <button className='cart-icon' type='button'>
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </button>
    </nav>
  );
};
export default Navbar;
