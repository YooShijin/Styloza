import { ReactNode } from "react";

const CardHolder = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="grid grid-cols-2 gap-5 justify-center items-center px-10 h-[60vh] my-5">
      {children}
    </div>
  );
};

export default CardHolder;
