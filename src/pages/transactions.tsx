import { Container } from "@/components/Container/Container";
import DisplayRows from "@/components/Pagination/DisplayRows";
import Pagination from "@/components/Pagination/Pagination";
import { NextPage } from "next";
import Link from "next/link";

const Transactions: NextPage = () => {
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative mb-12">
          <h2 className="text-2xl">Transactions</h2>
          <div className="text-sm breadcrumbs text-gray-500">
            <ul>
              <li>
                <Link href="/" className="hover:text-primary decoration-none">
                  Home
                </Link>
              </li>
              <li>Transactions</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full shadow-full-match bg-white rounded-md p-4">
          <div className="relative w-full overflow-x-auto">
            <div className="flex items-center justify-between flex-col md:flex-row gap-4 mb-8">
              <div className="relative">
                <h2 className="text-md">
                  More than 12,378,769 transactions found
                </h2>
                <p className="text-xs text-gray-400">
                  (Showing the last 500k records)
                </p>
              </div>
              <Pagination />
            </div>
            <table className="table align-middle whitespace-nowrap text-xs">
              <thead className="bg-light">
                <tr>
                  <th className="text-sm text-black font-bold"></th>
                  <th className="text-sm text-black font-bold">Txn Hash</th>
                  <th className="text-sm text-black font-bold">
                    Method
                    <span
                      className="tooltip before:text-xs"
                      data-tip="Function executed based on decoded input data. For unidentified functions, method ID is displayed instead."
                    >
                      <i className="fas fa-circle-exclamation ms-0.5 text-gray-500"></i>
                    </span>
                  </th>
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
                  <th className="text-sm text-black font-bold">From</th>
                  <th className="text-sm text-black font-bold"></th>
                  <th className="text-sm text-black font-bold">To</th>
                  <th className="text-sm text-black font-bold">Value</th>
                  <th className="text-sm text-black font-bold">
                    <button
                      type="button"
                      className="text-primary tooltip before:text-xs"
                      data-tip="Gas Price in Gwei"
                    >
                      Txn Fee
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="w-5 h-5 flex items-center justify-center text-[10px] rounded bg-light hover:bg-primary hover:text-black transition-all duration-300"
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
                      className="text-[10px] py-0.5 px-2 rounded-md bg-light tooltip before:text-xs"
                      data-tip="Swap With Permit"
                    >
                      Swap With Permit
                    </span>
                  </td>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      2475130
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
                    <Link
                      href="/"
                      className="text-primary tooltip before:text-xs"
                      data-tip="0xb08863a5b5670e94e8e9ff2fd116c6677ac4971a"
                    >
                      0xb08863a5b5670e94e8...
                    </Link>
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
                        data-tip="Scroll: Router (0x80e38291e06339d10aab483c65695d004dbd5c69)"
                      >
                        Scroll: Router
                      </Link>
                    </div>
                  </td>
                  <td>0 ETH</td>
                  <td>0.43 </td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="w-5 h-5 flex items-center justify-center text-[10px] rounded bg-light hover:bg-primary hover:text-black transition-all duration-300"
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
                      className="text-[10px] py-0.5 px-2 rounded-md bg-light tooltip before:text-xs"
                      data-tip="Swap With Permit"
                    >
                      Swap With Permit
                    </span>
                  </td>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      2475130
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
                    <Link
                      href="/"
                      className="text-primary tooltip before:text-xs"
                      data-tip="0xb08863a5b5670e94e8e9ff2fd116c6677ac4971a"
                    >
                      0xb08863a5b5670e94e8...
                    </Link>
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
                        data-tip="Scroll: Router (0x80e38291e06339d10aab483c65695d004dbd5c69)"
                      >
                        Scroll: Router
                      </Link>
                    </div>
                  </td>
                  <td>0 ETH</td>
                  <td>0.43 </td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="w-5 h-5 flex items-center justify-center text-[10px] rounded bg-light hover:bg-primary hover:text-black transition-all duration-300"
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
                      className="text-[10px] py-0.5 px-2 rounded-md bg-light tooltip before:text-xs"
                      data-tip="Swap With Permit"
                    >
                      Swap With Permit
                    </span>
                  </td>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      2475130
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
                    <Link
                      href="/"
                      className="text-primary tooltip before:text-xs"
                      data-tip="0xb08863a5b5670e94e8e9ff2fd116c6677ac4971a"
                    >
                      0xb08863a5b5670e94e8...
                    </Link>
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
                        data-tip="0xa6b71e26c5e0845f74c812102ca7114b6a896ab2"
                      >
                        0xa6b71e26c5e0845f74...
                      </Link>
                    </div>
                  </td>
                  <td>0 ETH</td>
                  <td>0.43 </td>
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

export default Transactions;
