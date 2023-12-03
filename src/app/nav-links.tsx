import Link from 'next/link';

export default function NavLinks() {

    const links = [
        { name: 'Inicio', href: '/home' },
        { name: 'Contacto', href: '/contacto'},
        { name: 'Sobre Nosotros', href: '/about'},
        { name: 'Servicios', href: '/servicios'},
    ]
    return (<>
        {links.map((link) => {
            return (
                <Link
                    key={link.name}
                    href={link.href}
                    className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"
                ><p className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">{link.name}</p>
                </Link>
            )
        })}
    </>
    )
}