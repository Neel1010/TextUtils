import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.theme.mode} bg-${props.theme.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>                        
                    </ul>
                    
                </div>
            </div>

            <div className={`form-check form-switch text-${props.theme.mode==='light'?'dark':'light'}`} style={{width:"10%"}}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
            </div>
        </nav>

    );

}
Navbar.propTypes={
    title: PropTypes.string,
    aboutText:PropTypes.string
}
Navbar.defaultProps={
    title:"Title",
    aboutText:"About",

}
export default Navbar;