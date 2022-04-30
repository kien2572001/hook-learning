import './Nav.scss'

const Nav = (props) => {
    return (
        <>
            <div class="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </>
    )
}

export default Nav;