'use client'
import { useSearchParams } from 'next/navigation'
import styles from "./profil.module.css"
import { FaUserAlt } from "react-icons/fa"

const Profil = () => {

    const searchParams = useSearchParams()
    const nickname = searchParams.get('nickname')

    return (
        <div className={styles.profil}>

            <div>
                <FaUserAlt size="40" fill="white" />
            </div>
            <div className={styles.textArea}>
                <div className="medium-text">
                    {nickname}
                </div>
                <div className="small-text">
                    iyiyim sen?
                </div>
            </div>

        </div>
    )
}

export default Profil
