import React, { use, useState } from "react";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import MyProductSkeleton from "../SellerSkeleton/MyProductSekelton/MyProductSkeleton";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "react-router";
const MyProducts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  //   console.log(search);
  const { data, isLoading, refetch, error, isError } = useQuery({
    queryKey: ["myProducts", user?.email, search, page],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/myProducts?email=${user?.email}&search=${search}&page=${page}&limit=10`
      );
      return res.data;
    },
    enabled: !!user?.email,
    keepPreviousData: true, // for pagination  smooth transition
  });

  const products = data?.products || [];
  const totalPages = data?.totalPages || 1;

  if (isError) return <p>Error: {error.message}</p>;
  //   console.log(products);

  return (
    <div className=" mt-3">
      <div className="flex  mb-3 flex-col gap-4 sm:flex-row items-center sm:justify-between">
        <h2 className="text-2xl text-[#003F62] dark:text-white font-bold">
          My Products
        </h2>
        <label className="input m-1  focus-within:outline-[#EDA415]  rounded-xl text-black ">
          <svg
            className="h-[1em] opacity-50 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            value={search}
            placeholder="Search"
          />
        </label>
      </div>
      {isLoading ? (
        <MyProductSkeleton></MyProductSkeleton>
      ) : (
        <div className="overflow-x-auto">
          <table className="table ">
            <thead>
              <tr className="dark:text-white">
                <th>No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="dark:text-white">
              {products.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={item.images?.[0]}
                      alt={item.productName}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                  </td>
                  <td className="max-w-[80px] sm:max-w-[120px] md:max-w-[200px] truncate">
                    {item.productName}
                  </td>
                  <td>${item.price}</td>
                  <td>
                    {item.stock}
                    <span className=" ml-1">Pcs</span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        item.status === "approved"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <div className=" cursor-pointer items-center flex gap-2 sm:gap-3 ">
                      <Link to={`/dashboard/updateProducts/${item._id}`}>
                        <span
                          data-tooltip-id="edit-tooltip"
                          data-tooltip-content="Update Products"
                          className="text-2xl tooltip text-green-600"
                        >
                          <FaEdit></FaEdit>
                          <Tooltip
                            style={{
                              backgroundColor: "#003F62",
                              color: "#fff",
                              fontWeight: "200",
                              fontSize: "13px",
                              borderRadius: "8px",
                              padding: "3px 4px",
                            }}
                            id="edit-tooltip"
                          />
                        </span>
                      </Link>
                      <button>
                        <span
                          data-tooltip-id="delete-tooltip"
                          data-tooltip-content="Delete Products"
                          className="text-red-500 text-3xl"
                        >
                          <MdDelete></MdDelete>
                          <Tooltip
                            style={{
                              backgroundColor: "#003F62",
                              color: "#fff",
                              fontWeight: "200",
                              fontSize: "13px",
                              borderRadius: "8px",
                              padding: "3px 4px",
                            }}
                            id="delete-tooltip"
                          />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Pagination Buttons */}
      <div className="flex justify-center mt-6 gap-2 flex-wrap">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-sm"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(
            (num) =>
              num === 1 || // প্রথম পেজ
              num === totalPages || // শেষ পেজ
              (num >= page - 1 && num <= page + 1) // current পেজের আশেপাশে
          )
          .map((num, idx, arr) => {
            const prev = arr[idx - 1];
            const showDots = prev && num - prev > 1;
            return (
              <React.Fragment key={num}>
                {showDots && <span className="px-2">...</span>}
                <button
                  onClick={() => setPage(num)}
                  className={`btn btn-sm ${
                    page === num ? "bg-[#EDA415] text-white" : "btn-ghost"
                  }`}
                >
                  {num}
                </button>
              </React.Fragment>
            );
          })}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="btn btn-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyProducts;
