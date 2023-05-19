//context Api
//create context

//consumer(using useContext()hooks)
import React, { useContext ,useEffect,useState} from 'react'; 

export const API_URl=`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext=React.createContext();

//create provider and wrapper in index.js

const AppProvider=({children})=>{
    const [isLoading,setisLoading]=useState(true);
    const [movie,setMovie]=useState([]);
    const[isError,setIsError]=useState({show:"false",msg:""})
    const[query,setQuery]=useState('titanic')

    const getMovies=async(url)=>{
        setisLoading(true);  
        try{
        const res=await fetch(url);
        const data=await res.json();
        console.log(data);
        if(data.Response==="True"){
            setisLoading(false);
            setIsError({
                show:false,
                msg:"",
    
              })
            setMovie(data.Search);
        }else{
          setIsError({
            show:true,
            msg:data.Error,

          })
        }
        }catch(error){
            console.log(error)
        }
    };
   useEffect(()=>{
    let timerOut=setTimeout(()=>{getMovies (`${API_URl}&s=${query}`);},800);

    return()=>clearTimeout(timerOut);
},[query])

    return<AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>
        {children}
    </AppContext.Provider>
};

//global hook
const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalContext};