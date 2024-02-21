import { FC } from "react";

const Pagination: FC = () => {
  return (
    <div className="join flex-wrap gap-1.5">
      <button type="button" className="btn btn-xs md:btn-sm md:text-xs rounded border-light hover:border-light bg-light text-gray-500 hover:bg-primary hover:text-black text-xs">
        First
      </button>
      <button type="button" className="btn btn-xs md:btn-sm md:text-xs rounded border-light hover:border-light bg-light text-gray-500 hover:bg-primary hover:text-black text-xs">
        <i className="fas fa-angle-left"></i>
      </button>
      <button
        className="btn btn-xs md:btn-sm md:text-xs rounded disabled:bg-light disabled:text-gray-500 text-xs"
        disabled
      >
        Page 1 of 200
      </button>
      <button type="button" className="btn btn-xs md:btn-sm md:text-xs rounded border-light hover:border-light bg-light text-gray-500 hover:bg-primary hover:text-black text-xs">
        <i className="fas fa-angle-right"></i>
      </button>
      <button type="button" className="btn btn-xs md:btn-sm md:text-xs rounded border-light hover:border-light bg-light text-gray-500 hover:bg-primary hover:text-black text-xs">
        Last
      </button>
    </div>
  );
};

export default Pagination;
