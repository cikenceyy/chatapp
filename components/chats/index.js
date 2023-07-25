'use client'
import { useSearchParams } from 'next/navigation'
import styles from "./chats.module.css"
import { users } from '@/data/data'


const Chats = () => {

    const searchParams = useSearchParams()
    var user
    if (searchParams.get('activeuser')) {
        user = searchParams.get('activeuser')
    }
    else {
        user = 0
    }

    return (
        <div className={styles.chat} style={{ backgroundColor: "white" }}>
            <div className={styles.getArea}>
                {
                    users[user].messageData.send.map((messageOne, index) => {
                        return (
                            <div className={styles.sendMessage}>
                                <div>
                                    {messageOne[0]}
                                </div>
                                <div style={{ textAlign: "right" }}>
                                    {messageOne[1]}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.sendArea}>
                {
                    users[user].messageData.get.map((messageOne, index) => {
                        return (
                            <div className={styles.getMessage}>
                                <div>
                                    {messageOne[0]}
                                </div>
                                <div style={{ textAlign: "right" }}>
                                    {messageOne[1]}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Chats
