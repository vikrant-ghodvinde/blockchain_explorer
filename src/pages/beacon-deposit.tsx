import { Container } from "@/components/Container/Container";
import DisplayRows from "@/components/Pagination/DisplayRows";
import Pagination from "@/components/Pagination/Pagination";
import TableSearch from "@/components/TableSearch/TableSearch";
import { NextPage } from "next";
import Link from "next/link";

const BeaconDeposit: NextPage = () => {
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative mb-12">
          <h2 className="text-2xl">Eth2 Beacon Chain Deposits</h2>
          <div className="text-sm breadcrumbs text-gray-500">
            <ul>
              <li>
                <Link href="/" className="hover:text-primary decoration-none">
                  Home
                </Link>
              </li>
              <li>Eth2 Beacon Chain Deposits</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full shadow-full-match bg-black rounded-md p-4">
          <div className="relative w-full overflow-x-auto">
            <div className="relative w-full pb-4 mb-4 border-b border-gray-800 flex justify-end">
              <TableSearch />
            </div>
            <div className="flex items-center justify-between flex-col md:flex-row gap-4 mb-8">
              <div className="relative">
                <h2 className="text-md">A total of 1,169,388 deposits found</h2>
                <p className="text-xs text-gray-400">
                  (Showing the last 10000 records)
                </p>
              </div>
              <Pagination />
            </div>
            <table className="table align-middle whitespace-nowrap text-xs">
              <thead className="bg-dark">
                <tr>
                  <th className="text-sm text-white font-bold">Txn Hash</th>
                  <th className="text-sm text-white font-bold">Block</th>
                  <th className="text-sm text-white font-bold">
                    <button
                      type="button"
                      className="text-primary tooltip before:text-xs"
                      data-tip="Click to show Datetime Format"
                    >
                      Age
                    </button>
                  </th>
                  <th className="text-sm text-white font-bold">Value</th>
                  <th className="text-sm text-white font-bold">From</th>
                  <th className="text-sm text-white font-bold">Eth2 PubKey</th>
                  <th className="text-sm text-white font-bold">Signature</th>
                  <th className="text-sm text-white font-bold">Valid?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      0x636396c40cc5587158...
                    </Link>
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
                  <td>32 ETH</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs"
                        data-tip="Kraken: Eth2 Depositor 0xa40dFEE99E1C85DC97Fdc594b16A460717838703"
                      >
                        Kraken: Eth2 Depositor
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
                    <div className="flex items-center gap-1">
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs before:max-w-80"
                        data-tip="0xa20cb5864a5f813805406d027eebd924d9b9147977b591a0082dbe0e95d0fb0d58a2739ef52067577c288a2ade287937"
                      >
                        0xa20cb5864a5f81380...
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
                  <td>0x90fa2130be027dda7...</td>
                  <td>
                    <span className="text-primary">Yes</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      0x636396c40cc5587158...
                    </Link>
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
                  <td>32 ETH</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs"
                        data-tip="Kraken: Eth2 Depositor 0xa40dFEE99E1C85DC97Fdc594b16A460717838703"
                      >
                        Kraken: Eth2 Depositor
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
                    <div className="flex items-center gap-1">
                      <Link
                        href="/"
                        className="text-primary tooltip before:text-xs before:max-w-80"
                        data-tip="0xa20cb5864a5f813805406d027eebd924d9b9147977b591a0082dbe0e95d0fb0d58a2739ef52067577c288a2ade287937"
                      >
                        0xa20cb5864a5f81380...
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
                  <td>0x90fa2130be027dda7...</td>
                  <td>
                    <span className="text-primary">Yes</span>
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
        <div className="text-end text-xs mt-4 text-gray-400">
          [ Download: <span className="text-primary">CSV Export</span>{" "}
          <i className="fas fa-download text-[10px]"></i> ]
        </div>
      </Container>
    </div>
  );
};

export default BeaconDeposit;
