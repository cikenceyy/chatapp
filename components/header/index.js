import Link from "next/link"

const Header = () => {
    return (
        <header className='container' style={{
            backgroundColor: "#fafafa",
            boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        }}>

            <nav className='containerInner'>

                <div className="medium-text" style={{
                    padding: "12px 0",
                    color: "#333",
                    letterSpacing: "1px"
                }}>
                    <strong> ChatApp </strong>
                    <Link href="https://www.linkedin.com/in/omer-akcay34/" style={{ color: "#333" }} className="small-text">
                        by: cikencey
                    </Link>
                </div>

            </nav>
        </header>
    )
}

export default Header
