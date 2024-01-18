import { Container } from "@/components/Container/Container";
import DisplayRows from "@/components/Pagination/DisplayRows";
import Pagination from "@/components/Pagination/Pagination";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const TokenTxns: FC = () => {
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative mb-12">
          <h2 className="text-2xl">Token Transfers (ERC-20)</h2>
          <div className="text-sm breadcrumbs text-gray-500">
            <ul>
              <li>
                <Link href="/" className="hover:text-primary decoration-none">
                  Home
                </Link>
              </li>
              <li>Token Transfers (ERC-20)</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full shadow-full-match bg-black rounded-md p-4">
          <div className="relative w-full overflow-x-auto">
            <div className="flex items-center justify-between flex-col md:flex-row gap-4 mb-8">
              <div className="relative">
                <h2 className="text-md">
                  More than 10,000,000 transactions found
                </h2>
                <p className="text-xs text-gray-400">
                  (Showing the last 5,000 records only)
                </p>
              </div>
              <Pagination />
            </div>
            <table className="table align-middle whitespace-nowrap text-xs">
              <thead className="bg-dark">
                <tr>
                  <th className="text-sm text-white font-bold">
                    <span
                      className="tooltip tooltip-right before:text-xs"
                      data-tip="Function executed based on decoded input data. For unidentified functions, method ID is displayed instead."
                    >
                      <i className="fas fa-circle-exclamation"></i>
                    </span>
                  </th>
                  <th className="text-sm text-white font-bold">Txn Hash</th>
                  <th className="text-sm text-white font-bold">
                    Method
                    <span
                      className="tooltip before:text-xs"
                      data-tip="Function executed based on decoded input data. For unidentified functions, method ID is displayed instead."
                    >
                      <i className="fas fa-circle-exclamation ms-0.5"></i>
                    </span>
                  </th>
                  <th className="text-sm text-white font-bold">
                    <button
                      type="button"
                      className="text-primary tooltip before:text-xs"
                      data-tip="Click to show Datetime Format"
                    >
                      Age
                    </button>
                  </th>
                  <th className="text-sm text-white font-bold">From</th>
                  <th className="text-sm text-white font-bold"></th>
                  <th className="text-sm text-white font-bold">To</th>
                  <th className="text-sm text-white font-bold">Value</th>
                  <th className="text-sm text-white font-bold">Token</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="w-5 h-5 flex items-center justify-center text-[10px] rounded bg-dark hover:bg-primary hover:text-black transition-all duration-300"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </td>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      0x636396c40cc5587158...
                    </Link>
                  </td>
                  <td>
                    <span
                      className="text-[10px] py-0.5 px-2 rounded-md bg-gray-700 tooltip before:text-xs"
                      data-tip="Transfer"
                    >
                      Transfer
                    </span>
                  </td>
                  <td>
                    <span
                      className="tooltip before:text-xs"
                      data-tip="2024-01-15 7:57:46"
                    >
                      3 secs ago
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs before:max-w-80"
                        data-tip="0x48c04ed5691981c42154c6167398f95e8f38a7ff"
                      >
                        0x48c04e...8f38a7fF
                      </Link>
                      <button
                        type="button"
                        className="text-sm hover:text-primary tooltip before:text-xs"
                        data-tip="Copy"
                      >
                        <i className="fa-regular fa-copy"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <span className="flex items-center justify-center text-primary text-[8px] bg-green-950 w-6 h-6 rounded-full">
                      <i className="fas fa-right-long"></i>
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs before:max-w-80"
                        data-tip="0x48c04ed5691981c42154c6167398f95e8f38a7ff"
                      >
                        0x48c04e...8f38a7fF
                      </Link>
                      <button
                        type="button"
                        className="text-sm hover:text-primary tooltip before:text-xs"
                        data-tip="Copy"
                      >
                        <i className="fa-regular fa-copy"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <span
                      className="tooltip before:text-xs"
                      data-tip="10.683755"
                    >
                      10.683755
                    </span>
                  </td>
                  <td>
                    <Link href="/" className="flex items-center gap-1.5">
                      <Image
                        src="/images/blockchain/tethernew_32.webp"
                        alt=""
                        width={100}
                        height={100}
                        className="w-4"
                      />
                      Tether USD <span className="text-gray-400">(USDT)</span>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="w-5 h-5 flex items-center justify-center text-[10px] rounded bg-dark hover:bg-primary hover:text-black transition-all duration-300"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </td>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      0x636396c40cc5587158...
                    </Link>
                  </td>
                  <td>
                    <span
                      className="text-[10px] py-0.5 px-2 rounded-md bg-gray-700 tooltip before:text-xs"
                      data-tip="Transfer"
                    >
                      Transfer
                    </span>
                  </td>
                  <td>
                    <span
                      className="tooltip before:text-xs"
                      data-tip="2024-01-15 7:57:46"
                    >
                      3 secs ago
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs before:max-w-80"
                        data-tip="0x48c04ed5691981c42154c6167398f95e8f38a7ff"
                      >
                        0x48c04e...8f38a7fF
                      </Link>
                      <button
                        type="button"
                        className="text-sm hover:text-primary tooltip before:text-xs"
                        data-tip="Copy"
                      >
                        <i className="fa-regular fa-copy"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <span className="flex items-center justify-center text-primary text-[8px] bg-green-950 w-6 h-6 rounded-full">
                      <i className="fas fa-right-long"></i>
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs before:max-w-80"
                        data-tip="0x48c04ed5691981c42154c6167398f95e8f38a7ff"
                      >
                        0x48c04e...8f38a7fF
                      </Link>
                      <button
                        type="button"
                        className="text-sm hover:text-primary tooltip before:text-xs"
                        data-tip="Copy"
                      >
                        <i className="fa-regular fa-copy"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <span
                      className="tooltip before:text-xs"
                      data-tip="10.683755"
                    >
                      10.683755
                    </span>
                  </td>
                  <td>
                    <Link href="/" className="flex items-center gap-1.5">
                      <Image
                        src="/images/blockchain/tethernew_32.webp"
                        alt=""
                        width={100}
                        height={100}
                        className="w-4"
                      />
                      Tether USD <span className="text-gray-400">(USDT)</span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex items-center justify-between flex-col md:flex-row gap-4 mt-8">
              <DisplayRows />
              <Pagination />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TokenTxns;
