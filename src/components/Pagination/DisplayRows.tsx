import { FC } from "react";

const DisplayRows: FC = () => {
  return (
    <div className="relative flex items-center gap-2 text-sm">
      Show{" "}
      <select className="w-14 select-sm rounded-md border outline-none bg-black px-2 pr-3 text-sm">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      Records
    </div>
  );
};

export default DisplayRows;
