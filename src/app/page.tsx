
import Link from "next/link"
import style from './app.module.css'
import logo from '../../public/logo.png';
import Image from "next/image";

export default function Prueba() {
    return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <main className={style.landing}>
        <Image className={style.logo} src={logo} alt='MéF!'/>
        <p className={style.bienvenido}>Bienvenido</p>
        <Link
            href='/home'
            className={style.a}
        >Ingresar al Home
        </Link>
        </main>
    </div>
    )
}