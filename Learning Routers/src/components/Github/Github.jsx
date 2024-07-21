import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 rounded-lg shadow-lg'>
      <h2 className='text-3xl mb-4'>Github Username: {data.login}</h2>
      <div className='flex flex-col items-center'>
        <img 
          src={data.avatar_url} 
          alt="GitHub avatar" 
          className='w-32 h-32 rounded-full mb-4 border-4 border-white'
        />
        <div className='text-lg bg-gray-700 p-4 rounded-md'>
          {data.bio}
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/zynalex9');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
