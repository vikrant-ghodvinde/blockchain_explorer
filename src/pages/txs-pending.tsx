import { Container } from "@/components/Container/Container";
import DisplayRows from "@/components/Pagination/DisplayRows";
import Pagination from "@/components/Pagination/Pagination";
import TableSearch from "@/components/TableSearch/TableSearch";
import { NextPage } from "next";
import Link from "next/link";

const TxsPending: NextPage = () => {
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative mb-12">
          <h2 className="text-2xl">Pending Transactions</h2>
          <div className="text-sm breadcrumbs text-gray-500">
            <ul>
              <li>
                <Link href="/" className="hover:text-primary decoration-none">
                  Home
                </Link>
              </li>
              <li>Pending Transactions</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full shadow-full-match bg-white rounded-md p-4">
          <div className="relative w-full overflow-x-auto">
            <div className="relative w-full pb-4 mb-4 border-b border-gray-100 flex justify-between">
              <Link
                href="/"
                className="relative btn btn-sm border-0 py-1.5 px-6 bg-primary-gradient text-black font-semibold rounded-md text-xs overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary-gradient-reversed before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:-z-10"
              >
                <i className="fas fa-chart-column me-1"></i> Pending Transaction
                Pool
              </Link>
              <TableSearch />
            </div>
            <div className="flex items-center justify-between flex-col md:flex-row gap-4 mb-8">
              <div className="relative">
                <h2 className="text-md">A total of 33 pending txns found</h2>
              </div>
              <Pagination />
            </div>
            <table className="table align-middle whitespace-nowrap text-xs">
              <thead className="bg-light">
                <tr>
                  <th className="text-sm text-black font-bold">Txn Hash</th>
                  <th className="text-sm text-black font-bold">
                    <button
                      type="button"
                      className="text-primary tooltip before:text-xs"
                      data-tip="Unsorted, click to sort"
                    >
                      Nonce
                    </button>
                  </th>
                  <th className="text-sm text-black font-bold">
                    Method
                    <span
                      className="tooltip before:text-xs"
                      data-tip="Function executed based On decoded input data. For unidentified functions, method ID Is displayed instead."
                    >
                      <i className="fas fa-circle-exclamation ms-0.5 text-gray-500"></i>
                    </span>
                  </th>
                  <th className="text-sm text-black font-bold">Last Seen</th>
                  <th className="text-sm text-black font-bold">
                    <button
                      type="button"
                      className="text-primary tooltip before:text-xs"
                      data-tip="Unsorted, click to sort"
                    >
                      Gas Limit
                    </button>
                  </th>
                  <th className="text-sm text-black font-bold">
                    <button
                      type="button"
                      className="text-primary tooltip before:text-xs"
                      data-tip="Unsorted, click to sort"
                    >
                      Gas Price
                    </button>
                  </th>
                  <th className="text-sm text-black font-bold">From</th>
                  <th className="text-sm text-black font-bold">To</th>
                  <th className="text-sm text-black font-bold">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      0x636396c40cc5587158...
                    </Link>
                  </td>
                  <td>3</td>
                  <td>
                    <span
                      className="text-[10px] py-0.5 px-2 rounded-md bg-light tooltip before:text-xs"
                      data-tip="Mint"
                    >
                      Mint
                    </span>
                  </td>
                  <td>4 secs ago</td>
                  <td>129838</td>
                  <td>1 Gwei</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs"
                        data-tip="0x87578bfb14bf2f9e251dc2d56901f325a1011af8"
                      >
                        0x87578bfb14bf2f9e251...
                      </Link>
                      <button
                        type="button"
                        className="text-sm hover:text-primary tooltip before:text-xs"
                        data-tip="Apply filter by address"
                      >
                        <i className="fas fa-filter text-xs text-gray-500"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs"
                        data-tip="0x87578bfb14bf2f9e251dc2d56901f325a1011af8"
                      >
                        0x87578bfb14bf2f9e251...
                      </Link>
                      <button
                        type="button"
                        className="text-sm hover:text-primary tooltip before:text-xs"
                        data-tip="Apply filter by address"
                      >
                        <i className="fas fa-filter text-xs text-gray-500"></i>
                      </button>
                    </div>
                  </td>
                  <td>0.00005 ETH</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      0x636396c40cc5587158...
                    </Link>
                  </td>
                  <td>3</td>
                  <td>
                    <span
                      className="text-[10px] py-0.5 px-2 rounded-md bg-light tooltip before:text-xs"
                      data-tip="Mint"
                    >
                      Mint
                    </span>
                  </td>
                  <td>4 secs ago</td>
                  <td>129838</td>
                  <td>1 Gwei</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs"
                        data-tip="0x87578bfb14bf2f9e251dc2d56901f325a1011af8"
                      >
                        0x87578bfb14bf2f9e251...
                      </Link>
                      <button
                        type="button"
                        className="text-sm hover:text-primary tooltip before:text-xs"
                        data-tip="Apply filter by address"
                      >
                        <i className="fas fa-filter text-xs text-gray-500"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs"
                        data-tip="0x87578bfb14bf2f9e251dc2d56901f325a1011af8"
                      >
                        0x87578bfb14bf2f9e251...
                      </Link>
                      <button
                        type="button"
                        className="text-sm hover:text-primary tooltip before:text-xs"
                        data-tip="Apply filter by address"
                      >
                        <i className="fas fa-filter text-xs text-gray-500"></i>
                      </button>
                    </div>
                  </td>
                  <td>0.00005 ETH</td>
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

export default TxsPending;
