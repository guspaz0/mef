import style from './contacto.module.css'

export default function contacto() {

    return (
    <main className="flex min-h-screen flex-row items-start justify-start p-24">
        <h1>Este es el Contacto</h1>
        <section className='flex min-h-screen flex-row items-start justify-start p-24'>
            <p>Direccion:</p>
            <form className={style.form}>
                <label> Nombre:
                    <input className={style.input} type='text' name="nombre" placeholder="ingresar nombre"/>
                </label>
                <label> Email:
                    <input className={style.input} type='email' name="email" placeholder="ingresar correo electronico"/>
                </label>
                <label> Telefono / Celular:
                    <input className={style.input} type='number' name="telefono" placeholder=""/>
                </label>
                <label> Asunto:
                    <input className={style.input}  type='text' name="asunto" placeholder="ingrese asunto"/>
                </label>
                <label> Descripcion:
                    <textarea className={style.input} name="descripcion" placeholder="ingresar descripcion"/>
                </label>
                <input type='submit'/>
            </form>
        </section>
    </main>
    )
}