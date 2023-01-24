import React from 'react';
import { useGlobalContext } from '../context/PostContext';

const Posts = () => {
  const { posts, removeId } = useGlobalContext();

  return (
    <div className="flex-col justify-center justify-items-center w-11/12 mx-16 my-4">
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className=" flex-col self-center rounded-md p-2 my-2 bg-slate-400"
          >
            <h2 className="text-blue-400 italic hover:not-italic">
              {post.title}
            </h2>
            <p className="text-gray-200">{post.body} </p>
            <button
              onClick={() => {
                removeId(post.id);
              }}
            >
              Supprimer article
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
