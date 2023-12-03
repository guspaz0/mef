import Link from "next/link"
import Navbar from "../navbar"
import styles from './home.module.css'

export default function Layout(
    { children } : { children: React.ReactNode }
)
{
    return (<>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1> Probando mi prinmera pagina con NextJs + typeScript</h1>
            {children}
        </main>
    </>
    )
}