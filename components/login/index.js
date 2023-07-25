"use client"
import Link from "next/link"
import styles from "./login.module.css"
import { useState } from "react"

const Login = () => {

    const [value, setValue] = useState("")

    return (
        <div className={styles.login}>

            <div className={styles.header}>
                <div className={styles.line}></div>
                <div className="medium-text">
                    <strong>Fast Login</strong>
                </div>
                <div className={styles.line}></div>
            </div>

            <div className={styles.form}>

                <input type="text" placeholder="nickname"
                    className={styles.input}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />

                <Link href={{ pathname: "/chat", query: { nickname: value } }}>
                    <button className={styles.button}>Giriş yap</button>
                </Link>

            </div>
        </div>
    )
}

export default Login
