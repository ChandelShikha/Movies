import { Outlet, Link } from "react-router-dom";

function Layout(){
    return(
        <div>
            <h1 >Movie Finder</h1>
            <div className="link">
                <Link className="link1" to="/moviedetails">Details<br></br></Link>
                <Link className="link1" to="/">Home</Link> 
            <Outlet />
            </div>
        </div>
    );
}

export default Layout;