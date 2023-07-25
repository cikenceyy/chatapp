'use client'
import { useSearchParams } from 'next/navigation'
import { users } from "@/data/data"
import { FaUserAlt } from "react-icons/fa"
import styles from "./users.module.css"
import Link from "next/link"


const Users = () => {
    const searchParams = useSearchParams()
    const nickname = searchParams.get('nickname')
    return (
        <div className={styles.users}>
            {
                users.map((dataOne, index) => {
                    return (
                        <Link className={styles.user} href={{
                            pathname: "/chat",
                            query: { nickname: nickname, activeuser: index }
                        }}
                        >
                            <div>
                                <FaUserAlt size="32" fill='white' />
                            </div>
                            <div>
                                <div className="small-text" style={{ marginBottom: "2px" }}>
                                    {dataOne.userName}
                                </div>
                                <div className="small-text">
                                    {dataOne.active ? "çevrimiçi" : "çevrimdışı"}
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Users
