import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { mainContainerStyles, smMarginStyles, actionDivStyles } from "./Styles";

const Posts = () => {

  // Why state.posts => reducers/index.js  export default combineReducers({ posts })
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div className=''>
      <Post />
      <Post />
    </div>
  )
}

export default Posts