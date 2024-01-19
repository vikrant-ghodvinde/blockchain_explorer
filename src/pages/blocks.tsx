import { Container } from "@/components/Container/Container";
import DisplayRows from "@/components/Pagination/DisplayRows";
import Pagination from "@/components/Pagination/Pagination";
import { NextPage } from "next";
import Link from "next/link";

const Blocks: NextPage = () => {
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative mb-12">
          <h2 className="text-2xl">Blocks</h2>
          <div className="text-sm breadcrumbs text-gray-500">
            <ul>
              <li>
                <Link href="/" className="hover:text-primary decoration-none">
                  Home
                </Link>
              </li>
              <li>Blocks</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full shadow-full-match bg-white rounded-md p-4">
          <div className="relative w-full overflow-x-auto">
            <div className="flex items-center justify-between flex-col md:flex-row gap-4 mb-8">
              <div className="relative">
                <h2 className="text-md">
                  Block #2502268 to #2502292 (Total of 2,502,293 blocks)
                </h2>
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
                  <th className="text-sm text-black font-bold">Txn</th>
                  <th className="text-sm text-black font-bold">Sequencer</th>
                  <th className="text-sm text-black font-bold">Gas Used</th>
                  <th className="text-sm text-black font-bold">Gas Limit</th>
                  <th className="text-sm text-black font-bold">Reward</th>
                </tr>
              </thead>
              <tbody>
                <tr>
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
                    <Link href="/" className="text-primary hover:opacity-80">
                      3
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/"
                      className="text-primary tooltip before:text-xs"
                      data-tip="0x2448e8bb66f2e79163a6afe95a91fc024e59dfb2"
                    >
                      0x2448e8bb66f2e79163...
                    </Link>
                  </td>
                  <td>
                    <div>
                      <p>
                        487,892{" "}
                        <span className="text-[10px] text-gray-400">
                          (4.88%)
                        </span>
                      </p>
                      <progress
                        className="progress progress-success w-full h-0.5"
                        value="10"
                        max="100"
                      ></progress>
                    </div>
                  </td>
                  <td>10,000,000</td>
                  <td>0.00021 ETH</td>
                </tr>
                <tr>
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
                    <Link href="/" className="text-primary hover:opacity-80">
                      3
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/"
                      className="text-primary tooltip before:text-xs"
                      data-tip="0x2448e8bb66f2e79163a6afe95a91fc024e59dfb2"
                    >
                      0x2448e8bb66f2e79163...
                    </Link>
                  </td>
                  <td>
                    <div>
                      <p>
                        487,892{" "}
                        <span className="text-[10px] text-gray-400">
                          (4.88%)
                        </span>
                      </p>
                      <progress
                        className="progress progress-success w-full h-0.5"
                        value="10"
                        max="100"
                      ></progress>
                    </div>
                  </td>
                  <td>10,000,000</td>
                  <td>0.00021 ETH</td>
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

export default Blocks;
