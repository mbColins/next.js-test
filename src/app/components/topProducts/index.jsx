"use client";
import Link from "next/link";
import React from "react";
import { FaCartPlus } from "react-icons/fa6";

const TopProducts = () => {
  const [products, setProducts] = React.useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data);
  };

  const pp = products?.products;
  console.log(pp);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {pp
        ?.filter((item) => item.rating >= 3)
        .slice(0, 12)
        .map((item, index) => (
          <Link href={'#'} className="card w-[300px] bg-white shadow-xl m-2 rounded-none p-4">
            <figure className="bg-gray-100">
              <img src={item.images.at(0)} alt="Shoes" className="h-[250px] " />
            </figure>
            <div className=" flex-col justify-center ">
              <h2 className="card-title text-center text-blue-950">
                {item.title}
              </h2>
              <div className="flex justify-between">
                <div className="flex">
                  Rating {item.rating}{" "}
                  <input
                    name="rating-1"
                    className="mask mask-star bg-orange-400 h-5 w-10"
                  />
                </div>

                <h1> ${item.price} </h1>
              </div>
            </div>
              <div className="flex justify-center mt-5">
                <div className="btn w-[100%] ">add to cart<FaCartPlus /></div>
              </div>
          </Link>
        ))}
    </div>
  );
};

export default TopProducts;
