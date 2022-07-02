import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import {   getPosts } from "./redux/postsSlice";


export default function Cartcomp() {
  
 

  const dispatch = useDispatch();
 
 

  useEffect(() => {
    dispatch(getPosts({ limit: 5 }))
  }, [dispatch])
 

  return (
    <div className="App">
           
      <button onClick={() => dispatch(add("apple"))}>add apple</button>
   
      <button onClick={() => dispatch(getPosts( {limit: 5}))}>get</button>
    </div>
  );
}
