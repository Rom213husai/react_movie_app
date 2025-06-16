function Header({ children} : { children:React.ReactNode}){
    return (
        <>
            <header>
                <h1>MOVIEFLTX</h1>
            </header>
            <main>{children}</main>
        </>
    );
}

export default Header;