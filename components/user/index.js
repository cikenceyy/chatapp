'use client'
import { useSearchParams } from 'next/navigation'
import styles from "./user.module.css"
import { FaUserAlt } from "react-icons/fa"
import { users } from '@/data/data'

const User = () => {

    const searchParams = useSearchParams()
    var user
    if (searchParams.get('activeuser')) {
        user = searchParams.get('activeuser')
    }
    else {
        user = 0
    }

    return (
        <div className={styles.user}>

            <div>
                <FaUserAlt size="32" fill="white" />
            </div>
            <div className={styles.textArea}>
                <div className="medium-text">
                    {users[user].userName}
                </div>
                <div className="small-text">
                    çevrimiçi
                </div>
            </div>

        </div>
    )
}

export default User
