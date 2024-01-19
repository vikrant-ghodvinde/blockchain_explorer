import { Container } from "@/components/Container/Container";
import DisplayRows from "@/components/Pagination/DisplayRows";
import Pagination from "@/components/Pagination/Pagination";
import { NextPage } from "next";
import Link from "next/link";

const InternalTransactions: NextPage = () => {
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative mb-12">
          <h2 className="text-2xl">Contract Internal Transactions</h2>
          <div className="text-sm breadcrumbs text-gray-500">
            <ul>
              <li>
                <Link href="/" className="hover:text-primary decoration-none">
                  Home
                </Link>
              </li>
              <li>Contract Internal Transactions</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full shadow-full-match bg-white rounded-md p-4">
          <div className="relative w-full overflow-x-auto">
            <div className="flex items-center justify-between flex-col md:flex-row gap-4 mb-8">
              <div className="relative">
                <h2 className="text-md">
                  A total of 31,635,030 withdrawals found (Total
                  16,931,135.673018 ETH withdrawn)
                </h2>
                <p className="text-xs text-gray-400">
                  (Showing the last 10000 records)
                </p>
              </div>
              <Pagination />
            </div>
            <table className="table align-middle whitespace-nowrap text-xs">
              <thead className="bg-light">
                <tr>
                  <th className="text-sm text-black font-bold">Block</th>
                  <th className="text-sm text-black font-bold">
                    <button
                      type="button"
                      className="text-primary tooltip before:text-xs"
                      data-tip="Click to show Datetime Format"
                    >
                      Age
                    </button>
                  </th>
                  <th className="text-sm text-black font-bold">
                    Parent Txn Hash
                  </th>
                  <th className="text-sm text-black font-bold">Type</th>
                  <th className="text-sm text-black font-bold">From</th>
                  <th className="text-sm text-black font-bold"></th>
                  <th className="text-sm text-black font-bold">To</th>
                  <th className="text-sm text-black font-bold">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      19012149
                    </Link>
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
                      <Link href="/" className="text-primary">
                        1082659
                      </Link>
                      <i className="fa-solid fa-arrow-up-right-from-square text-gray-500"></i>
                    </div>
                  </td>
                  <td>call</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs before:max-w-80"
                        data-tip="0x6357E4BDafF733dFE8F50d12d07c03B3beD0884B"
                      >
                        0x6357E4...beD0884B
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
                    <span className="flex items-center justify-center text-primary text-[8px] bg-green-50 w-6 h-6 rounded-full">
                      <i className="fas fa-right-long"></i>
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <span
                        className="tooltip before:text-xs"
                        data-tip="Contract"
                      >
                        <i className="fa-regular fa-file-lines"></i>
                      </span>
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs before:max-w-80"
                        data-tip="Wrapped Ether (0x80e38291e06339d10aab483c65695d004dbd5c69)"
                      >
                        Wrapped Ether
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
                  <td>0.014042414176140356 ETH</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      19012149
                    </Link>
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
                      <Link href="/" className="text-primary">
                        1082659
                      </Link>
                      <i className="fa-solid fa-arrow-up-right-from-square text-gray-500"></i>
                    </div>
                  </td>
                  <td>call</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs before:max-w-80"
                        data-tip="0x6357E4BDafF733dFE8F50d12d07c03B3beD0884B"
                      >
                        0x6357E4...beD0884B
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
                    <span className="flex items-center justify-center text-primary text-[8px] bg-green-50 w-6 h-6 rounded-full">
                      <i className="fas fa-right-long"></i>
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <span
                        className="tooltip before:text-xs"
                        data-tip="Contract"
                      >
                        <i className="fa-regular fa-file-lines"></i>
                      </span>
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs before:max-w-80"
                        data-tip="Wrapped Ether (0x80e38291e06339d10aab483c65695d004dbd5c69)"
                      >
                        Wrapped Ether
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
                  <td>0.014042414176140356 ETH</td>
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

export default InternalTransactions;
