import Chats from "@/components/chats"
import Profil from "../../components/profil"
import User from "../../components/user"
import Users from "../../components/users"
import styles from "./chatContainer.module.css"

const ChatContainer = () => {
    return (
        <article className='container' style={{ paddingTop: "64px", paddingBottom: "64px" }}>
            <section className='containerInner'>

                <div className={styles.chat}>

                    <div className={styles.leftArea}>
                        <Profil />
                        <Users />
                    </div>

                    <div className={styles.rightArea}>
                        <User />
                        <Chats />
                    </div>

                </div>
            </section>
        </article>
    )
}

export default ChatContainer
