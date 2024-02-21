import { FC } from "react";

const TimeFilter: FC = () => {
  return (
    <div className="join">
      <button type="button" className="btn-sm border border-light text-xs join-item bg-primary text-black">1h</button>
      <button type="button" className="btn-sm border border-light text-xs join-item bg-light">6h</button>
      <button type="button" className="btn-sm border border-light text-xs join-item bg-light">12h</button>
      <button type="button" className="btn-sm border border-light text-xs join-item bg-light">1d</button>
      <button type="button" className="btn-sm border border-light text-xs join-item bg-light">7d</button>
      <button type="button" className="btn-sm border border-light text-xs join-item bg-light">30d</button>
    </div>
  );
};

export default TimeFilter;
