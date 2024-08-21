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
  const { buka } = useSelector((state) => state.closeOpen); //destructuring
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={`${buka ? "ml-72" : "ml-16"} duration-500`}>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div className="px-5 pb-5 mt-5">
                <Link
                  to="/products/add"
                  className="px-4 py-2 text-white rounded button bg-emerald-500 hover:bg-emerald-700"
                >
                  Add New
                </Link>
              </div>
              <table className="min-w-full text-sm font-light text-left text-surface dark:text-slate-700">
                <thead className="font-medium bg-white border-b border-neutral-200 dark:border-white/10 dark:bg-body-dark">
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
                      <td className="px-6 py-4 font-medium whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {product.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {product.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                          to={`/products/edit/${product.id}`}
                          className="px-4 py-2 text-white bg-blue-500 rounded button hover:bg-blue-700"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => dispatch(deleteProduct(product.id))}
                          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
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
