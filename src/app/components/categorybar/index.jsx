'use client'

import Link from 'next/link';
import React , { useEffect } from 'react';

const CategoryBar = () => {
  const[category, setCategory] = React.useState();


  const fetchCategory = async () => {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then((res) => setCategory(res))
    
  };
  console.log(category)

  useEffect(() =>{
    fetchCategory();
  },[])

  return (
    <div className="navbar bg-white py-5 pl-10 h-10">
      <div className="navbar-center hidden lg:flex space-x-5">
        <ul className="menu menu-horizontal px-1 grid-cols-2 ">
          <div className="dropdown">
            <Link href={'#'}> Category </Link>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow w-[500px]  bg-base-100  flex-col grid-cols-3  h-[400px] ">
             {
                category?.map((item, index) =>  <li key={index}><Link href={item.url}> {item.name} </Link></li>)
             }
            </ul>
          </div>
        </ul>
        <ul className="menu menu-horizontal px-1">
          <div className="dropdown">
            <button>
              Click
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow   w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </ul>
        <ul className="menu menu-horizontal px-1">
          <div className="dropdown">
            <button>
              Click
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow   w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
     
    </div>
  );
};

export default CategoryBar;
