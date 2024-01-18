import { FC } from "react";

const TimeFilter: FC = () => {
  return (
    <div className="join">
      <button className="btn-sm border border-gray-800 text-xs join-item bg-primary text-black">1h</button>
      <button className="btn-sm border border-gray-800 text-xs join-item bg-dark">6h</button>
      <button className="btn-sm border border-gray-800 text-xs join-item bg-dark">12h</button>
      <button className="btn-sm border border-gray-800 text-xs join-item bg-dark">1d</button>
      <button className="btn-sm border border-gray-800 text-xs join-item bg-dark">7d</button>
      <button className="btn-sm border border-gray-800 text-xs join-item bg-dark">30d</button>
    </div>
  );
};

export default TimeFilter;
