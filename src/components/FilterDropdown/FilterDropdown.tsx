import Image from "next/image";
import { FC, useState } from "react";

const FilterDropdown: FC = () => {
  const [value, setValue] = useState("Latest 500 Contracts");
  return (
    <div className="relative w-full max-w-[280px] group text-xs z-50">
      <button
        type="button"
        className="relative btn btn-sm w-auto text-[10px] bg-transparent hover:bg-transparent border-white hover:border-white inline-flex items-center justify-between gap-1 after:content-['\f0d7'] after:relative after:font-awesome after:font-[900]"
      >
        Select View / Filter Type <span className="mx-auto">|</span> {value}
      </button>
      <ul className="absolute left-0 top-100 mt-2 w-full max-w-[220px] text-start p-3 bg-dark rounded-md shadow-full-match invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-300">
        <li
          className="relative w-full p-2 hover:text-primary cursor-pointer"
          onClick={() => setValue("Latest 500 Contracts")}
        >
          Latest 500 Contracts Verified
        </li>
        <hr className="my-2 border-gray-800" />
        <li
          className="relative w-full p-2 hover:text-primary cursor-pointer"
          onClick={() => setValue("Open Source License")}
        >
          <span
            className="tooltip tooltip-right before:text-xs"
            data-tip="Display Contract Source codes with an Open Source License"
          >
            <i className="fas fa-lock-open me-1"></i> Open Source License
          </span>
        </li>
        <hr className="my-2 border-gray-800" />
        <li
          className="relative w-full p-2 hover:text-primary cursor-pointer inline-flex items-center gap-1"
          onClick={() => setValue("Solidity Compiler")}
        >
          <Image
            src="/images/icons/Solidity_logo.png"
            alt=""
            width={50}
            height={50}
            className="w-3 me-1"
          />
          Solidity Compiler
        </li>
        <li
          className="relative w-full p-2 hover:text-primary cursor-pointer inline-flex items-center gap-1"
          onClick={() => setValue("Vyper Compiler")}
        >
          <Image
            src="/images/icons/Vyper_logo.png"
            alt=""
            width={50}
            height={50}
            className="w-3 me-1"
          />
          Vyper Compiler
        </li>
        <li
          className="relative w-full p-2 hover:text-primary cursor-pointer inline-flex items-center gap-1"
          onClick={() => setValue("Contract Security Audit")}
        >
          <span
            className="inline-flex items-center gap-1 tooltip tooltip-right before:text-xs"
            data-tip="Display Contract Source codes with audit report"
          >
            <i className="far fa-file-alt text-md me-1.5"></i> Contract Security Audit
          </span>
        </li>
      </ul>
    </div>
  );
};
export default FilterDropdown;
