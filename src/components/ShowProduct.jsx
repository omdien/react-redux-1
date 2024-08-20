import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productSelectors,
  deleteProduct,
} from "../features/ProductSlice";
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <Link
                to="/products/add"
                className="button bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-700"
              >
                Add New
              </Link>
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead className="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      No
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Nama Barang
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Harga
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr
                      className="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10"
                      key={index}
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {product.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {product.price}{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Link
                          to={`/products/edit/${product.id}`}
                          className="button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => dispatch(deleteProduct(product.id))}
                          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
