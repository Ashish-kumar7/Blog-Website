import { Link } from "react-router-dom"

const Page404 = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Page not Found</p>
            <Link to="/">Back to Home Page...</Link>
        </div>
     );
}
 
export default Page404;