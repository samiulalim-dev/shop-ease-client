import { use } from "react";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import MyProductSkeleton from "../SellerSkeleton/MyProductSekelton/MyProductSkeleton";

const MyProducts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["myProducts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myProducts?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
  //   console.log(products);

  return (
    <div className="overflow-x-auto mt-3">
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
            // onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            // value={search}
            placeholder="Search"
          />
        </label>
      </div>
      {isLoading ? (
        <MyProductSkeleton></MyProductSkeleton>
      ) : (
        <table className="table">
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
                <td>{item.productName}</td>
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
                  <button className="btn btn-sm btn-error text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyProducts;
