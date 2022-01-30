import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png";

const MenuHome = () => {

    const navHeight = window.innerHeight/10;
    const [navToggle, setNavToggle] = useState(false);

   const handleScroll =() => {    
        if (window.scrollY > navHeight){
            //console.log("scroll class")
            setNavToggle(true)
        } else {        
            setNavToggle(false)
        }
    }
   
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);


    return (
        <nav className={`nav-home ${navToggle? "scrolledNavbar" : ""}`} >
            <Link className="nav-left" to="/">                
                <img className="logo" src={logo} alt="logo" />
                <div className="text-logo">         
                    <div className="sport">Sport</div><div className="eat">eat</div>
                </div>
            </Link>
            <div className="nav-right">
                <Link className="navItems" to="/">
                    Accueil
                </Link> 
                <Link className="navItems" to="/sport">
                    Le sport
                </Link>  
                <Link className="navItems" to="/meal">
                    Les repas
                </Link>  
                <Link className="navItems" to="/login">
                    Me connecter
                </Link>                
            </div>
        </nav>
    )
}

export default MenuHome;