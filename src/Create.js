import {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const [ispending,setIspending] = useState(false);
    const history=useHistory();

    const handlesubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setIspending(true);
        
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-type": "application/json"},
            body:JSON.stringify(blog)
        })
        .then(()=>{
            console.log("added succesfully");
            setIspending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Space to create your blogs.</h2>
            <form onSubmit={handlesubmit}>
                <label>Blog Title:</label>
                <input type="text" required 
                  value={title}
                  onChange={(e)=>{
                      setTitle(e.target.value)
                  }}
                /> 
                <br></br>

                <label>Blog Body:</label>
                <textarea required value={body}
                  onChange={(e)=>{
                      setBody(e.target.value)
                  }} />

            
                <label>Blog author:</label>
                <input type="text" required
                    value={author} 
                    onChange={(e)=>{
                        setAuthor(e.target.value);
                }} /> 

                {!ispending  && <button>Add Blog</button>}
                {ispending  && <button>Adding...</button>}

            </form>
        </div>
     );
}
export default Create;