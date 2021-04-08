import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
   
    const {data,ispending,error}=useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            { ispending && <div>Loading... Please  wait</div>}
            { data && <BlogList blogs={data} title="All Blogs" /> }
        </div>
     );
}
export default Home;