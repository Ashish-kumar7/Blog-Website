import {useEffect,useState } from 'react' ;

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [ispending,setispending] = useState(true);
    const [error,seterror]=useState(null);

useEffect(()=>{

        const abortCont=new AbortController();

        console.log("use effect ran");
        fetch(url , {signal : abortCont.signal} )
        .then((res)=>{
            if(!res.ok){
                throw Error("Could not fetch the resource");
            }
            return res.json();
        })
        .then((val)=>{
            // console.log(data);
            setData(val);
            setispending(false);
            seterror(null);
        })
        .catch((err)=>{
            if(err.message==='AbortError'){
                console.log("AbortError");
            }
            else {
                setispending(false);
                seterror(err.message);
            }
        })

        return ( ()=>{
            abortCont.abort();
        }); 

    },[url]) ;

    return {data,ispending,error};
}
export default useFetch;