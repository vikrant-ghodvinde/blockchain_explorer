import { Container } from "@/components/Container/Container";
import DisplayRows from "@/components/Pagination/DisplayRows";
import Pagination from "@/components/Pagination/Pagination";
import TableSearch from "@/components/TableSearch/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Tokens: FC = () => {
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative mb-12">
          <h2 className="text-2xl">Token Tracker (ERC-20)</h2>
          <div className="text-sm breadcrumbs text-gray-500">
            <ul>
              <li>
                <Link href="/" className="hover:text-primary decoration-none">
                  Home
                </Link>
              </li>
              <li>Token Tracker (ERC-20)</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full shadow-full-match bg-white rounded-md p-4">
          <div className="relative w-full overflow-x-auto">
            <div className="relative w-full pb-4 mb-4 border-b border-gray-100 flex justify-end">
              <TableSearch />
            </div>
            <div className="flex items-center justify-between flex-col md:flex-row gap-4 mb-8">
              <div className="relative">
                <h2 className="text-md">
                  A total of 1,275 Token Contracts found
                </h2>
              </div>
              <Pagination />
            </div>
            <table className="table align-middle whitespace-nowrap text-xs">
              <thead className="bg-light">
                <tr>
                  <th className="text-sm text-black font-bold">#</th>
                  <th className="text-sm text-black font-bold">Token</th>
                  <th className="text-sm text-black font-bold">
                    <button
                      type="button"
                      className="text-primary tooltip before:text-xs"
                      data-tip="Click to sort"
                    >
                      Price
                    </button>
                  </th>
                  <th className="text-sm text-black font-bold">
                    <button
                      type="button"
                      className="text-primary tooltip before:text-xs"
                      data-tip="Click to sort"
                    >
                      Change (%)
                    </button>
                  </th>
                  <th className="text-sm text-black font-bold">
                    <button
                      type="button"
                      className="text-primary tooltip before:text-xs"
                      data-tip="Click to sort"
                    >
                      Volume (24H)
                    </button>
                  </th>
                  <th className="text-sm text-black font-bold">
                    <button type="button" className="text-primary">
                      Circulating Market Cap
                    </button>
                    <span
                      className="tooltip before:text-xs"
                      data-tip="Calculated by multiplying the number of tokens in circulating supply across all chains with the current market price per token."
                    >
                      <i className="fas fa-circle-exclamation ms-0.5 text-gray-500"></i>
                    </span>
                  </th>
                  <th className="text-sm text-black font-bold">
                    On-Chain Market Cap
                    <span
                      className="tooltip before:text-xs"
                      data-tip="Calculated by multiplying the number of tokens in circulating supply across all chains with the current market price per token."
                    >
                      <i className="fas fa-circle-exclamation ms-0.5 text-gray-500"></i>
                    </span>
                  </th>
                  <th className="text-sm text-black font-bold">
                    <button
                      type="button"
                      className="text-primary tooltip before:text-xs"
                      data-tip="Click to sort"
                    >
                      Holders
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Link
                      href="/"
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <Image
                        src="/images/blockchain/tethernew_32.webp"
                        alt=""
                        width={100}
                        height={100}
                        className="w-6"
                      />
                      <span className="font-bold">Tether USD</span> (USDT)
                    </Link>
                  </td>
                  <td>
                    <p className="tooltip before:text-xs" data-tip="$0.998993">
                      $0.999
                    </p>
                    <p className="text-gray-400">0.000395 ETH</p>
                  </td>
                  <td>
                    <div className="text-red-600">
                      <i className="fas fa-caret-down me-1"></i> -0.01%
                    </div>
                  </td>
                  <td>$37,631,433,364.00</td>
                  <td>$95,089,489,761.00 </td>
                  <td>$39,783,017,963.32 </td>
                  <td>
                    5,046,449
                    <span
                      className="block text-start text-green-300 tooltip tooltip-left before:text-xs"
                      data-tip="A 0.010% increase in Token holders from previous day count of 5045960"
                    >
                      0.010%
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <Link
                      href="/"
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <Image
                        src="/images/blockchain/tethernew_32.webp"
                        alt=""
                        width={100}
                        height={100}
                        className="w-6"
                      />
                      <span className="font-bold">Tether USD</span> (USDT)
                    </Link>
                  </td>
                  <td>
                    <p className="tooltip before:text-xs" data-tip="$0.998993">
                      $0.999
                    </p>
                    <p className="text-gray-400">0.000395 ETH</p>
                  </td>
                  <td>
                    <div className="text-green-600">
                      <i className="fas fa-caret-up me-1"></i> 0.09%
                    </div>
                  </td>
                  <td>$37,631,433,364.00</td>
                  <td>$95,089,489,761.00 </td>
                  <td>$39,783,017,963.32 </td>
                  <td>
                    5,046,449
                    <span
                      className="block text-start text-green-300 tooltip tooltip-left before:text-xs"
                      data-tip="A 0.010% increase in Token holders from previous day count of 5045960"
                    >
                      0.010%
                    </span>
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

export default Tokens;
