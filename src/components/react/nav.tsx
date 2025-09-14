import { Search } from "lucide-react";

export const Nav = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <div className="flex items-center">
        <input
          placeholder="Search"
          className="outline-none text-slate-500 w-16 focus:w-full sm:focus:w-48 transition-all duration-500"
        />
        <Search className="text-slate-500 cursor-pointer" size="16" />
      </div>
      <a href="/" className="hover:text-orange-500 dark:hover:text-purple-500">
        Home
      </a>
      <a href="/" className="hover:text-orange-500 dark:hover:text-purple-500">
        About me
      </a>
    </div>
  );
};
