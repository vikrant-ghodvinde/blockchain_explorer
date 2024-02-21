import { FC, useEffect, useState } from "react";

export const ScrollToTop: FC = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return (
    <button type="button" className={`fixed right-6 bottom-6 w-10 h-10 bg-primary-gradient rounded-md transition-all duration-300 text-black ${offset > 100 ? "visible opacity-50 hover:opacity-100": "invisible opacity-0"} z-50`} onClick={() => window.scrollTo(0, 0)}>
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};
