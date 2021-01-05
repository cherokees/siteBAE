
export default function Layout({ children }) {
    return (
        <>
            <nav className="layoutNav">
                <p>Bernard Aurélien Elagage</p>
                <p>06 77 74 53 99</p>
                <p>aurelien.78@orange.fr</p>
            </nav>
            <div className="containerLayout">
                {children}
            </div>
        </>
    )
}