import Link from "next/link"
import Navbar from "../navbar"
import styles from './home.module.css'
import Image from "next/image"
import backgroundMef from '../../../public/background.jpeg'

export default function Layout(
    { children } : { children: React.ReactNode }
)
{
    return (<>
        <main className="">
            <Image src={backgroundMef} className={styles.image} alt='background'/>
            <p>Pontenciá tu empresa tomando mejores decisiones ¿Quienes somos?</p>
            {children}
        </main>
    </>
    )
}