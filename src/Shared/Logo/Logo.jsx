import { GiShoppingCart } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center justify-center sm:gap-1  relative group"
    >
      {/* Logo Image */}
      <div className="text-5xl md:text-5xl lg:text-6xl transition-transform duration-300 group-hover:scale-110">
        <GiShoppingCart className="text-[#EDA415]" />
      </div>

      {/* Text */}
      <div className="flex flex-col items-start">
        <h1 className="text-lg md:text-[27px] font-bold  leading-none bg-gradient-to-r from-[#EDA415] to-[#FF6B00] bg-clip-text text-transparent">
          <span className="  transition-all duration-300 ">Shop</span>
          <span className="sm:ml-1">Expo</span>
        </h1>
        <div className="h-1 w-0 bg-gradient-to-r from-[#EDA415] to-[#FF6B00]  group-hover:w-full transition-all duration-500 mt-1"></div>
      </div>
    </Link>
  );
};

export default Logo;
