import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {

    const {id}=useParams();
    const {data,ispending,error}= useFetch(`http://localhost:8000/blogs/${id}`);
    const history=useHistory();

    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/' + data.id,{
            method:'DELETE'
        })
        .then(()=>{
            console.log("deleted succesfully");
            history.push('/');
        })
    }

    return (  
        <div className="blog-details">
            {ispending && <h2>Loading ...</h2>};
            {error && <h4>{error}</h4>}
            {data && <article>
                <h2>Blog Title : {data.title}</h2>

                <hr></hr>
                <h3>Blog Details:</h3>
                <div>{data.body}</div>
                <button onClick={handleDelete}>Delete</button>
            </article>}
        </div>
    );
}
 
export default BlogDetails;