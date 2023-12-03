import Link from 'next/link';
import logo from '../../public/logo.png';
import Image from 'next/image';
import NavLinks from './nav-links';
import style from './navbar.module.css'

export default function Navbar() {

    //const img: Image = logo

    return (
    <nav>
        <Image className={style.logo} src={logo} alt='MéF!'/>
        <span className={style.navbar}>
            <NavLinks/>
        </span>
    </nav>
    )
}