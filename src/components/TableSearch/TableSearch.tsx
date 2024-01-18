import { FC } from "react";

const TableSearch: FC = () => {
  return (
    <div className="relative group z-50">
      <button
        type="button"
        className="btn btn-sm bg-dark text-xs group-focus-within:bg-primary group-focus-within:text-black"
      >
        <i className="fas fa-magnifying-glass"></i>
      </button>
      <div className="absolute right-0 -bottom-16 w-72 h-14 px-2 bg-dark rounded-md shadow-full-match flex items-center justify-center invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-300">
        <input
          type="text"
          className="w-full h-10 outline-none border border-r-0 bg-transparent px-3 rounded-tl-md rounded-bl-md text-sm"
          placeholder="Filter by Address"
        />
        <button
          type="button"
          className="text-xs font-bold w-12 h-10 bg-primary text-black border border-primary rounded-tr-md rounded-br-md"
        >
          Find
        </button>
      </div>
    </div>
  );
};

export default TableSearch;
