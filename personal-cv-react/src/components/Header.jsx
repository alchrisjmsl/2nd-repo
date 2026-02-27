function Header({ darkMode, setDarkMode }) {
    return (
        <header>
            <section className="card">
                <h1>Alchris June J. Jamisola</h1>
                <p>IT Student | Web Systems and Technologies</p>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    style={{ margin: "1rem", padding: "0.5rem 1rem", cursor: "pointer" }}
                >
                    {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
                </button>
            </section>
        </header>
    );
}
export default Header;