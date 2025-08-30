import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { LuPackage } from "react-icons/lu";

function Header() {
  return (
    <div className="flex items-center justify-between px-6 border-b h-16 bg-white shadow-sm">
      <div className="flex items-center space-x-1 text-sm text-gray-600">
        <LuPackage className="h-6 w-6" />
        <Link className="text-lg text-black font-bold" to="/">
          Registry
        </Link>
      </div>
      <div className="w-full max-w-xl ml-4">
        <SearchInput />
      </div>
    </div>
  );
}

export default Header;
