import Login from "../login"
import styles from "./welcome.module.css"
import Image from "next/image"

const Welcome = () => {
    return (
        <article className='container' style={{
            paddingTop: "64px", paddingBottom: "64px",
        }}>
            <section className='containerInner'>

                <div className={styles.content}>

                    <div className={styles.leftArea}>
                        <Image src="/welcome.jpg" layout="fill" className={styles.image} />
                    </div>

                    <div className={styles.rightArea}>
                        <div className="title-3">
                            <strong>WELCOME</strong>
                        </div>
                        <div className="title-4">
                            <strong>a fast, secure, backupable chat</strong>
                        </div>
                        <Login />
                    </div>

                </div>

            </section>
        </article>
    )
}

export default Welcome
