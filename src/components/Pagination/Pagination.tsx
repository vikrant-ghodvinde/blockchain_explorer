import { FC } from "react";

const Pagination: FC = () => {
  return (
    <div className="join flex-wrap gap-1.5">
      <button className="btn btn-xs md:btn-sm md:text-xs rounded bg-dark hover:bg-primary hover:text-black text-xs">
        First
      </button>
      <button className="btn btn-xs md:btn-sm md:text-xs rounded bg-dark hover:bg-primary hover:text-black text-xs">
        <i className="fas fa-angle-left"></i>
      </button>
      <button
        className="btn btn-xs md:btn-sm md:text-xs rounded disabled:bg-dark disabled:text-gray-400 text-xs"
        disabled
      >
        Page 1 of 200
      </button>
      <button className="btn btn-xs md:btn-sm md:text-xs rounded bg-dark hover:bg-primary hover:text-black text-xs">
        <i className="fas fa-angle-right"></i>
      </button>
      <button className="btn btn-xs md:btn-sm md:text-xs rounded bg-dark hover:bg-primary hover:text-black text-xs">
        Last
      </button>
    </div>
  );
};

export default Pagination;
