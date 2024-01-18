import { FC } from "react";

interface MyComponentProps {
  children: React.ReactNode;
}

export const Container: FC<MyComponentProps> = ({ children }) => {
  return <div className="w-full max-w-[1399px] px-3 mx-auto h-auto">{children}</div>;
};
