import { Container } from "@/components/Container/Container";
import DisplayRows from "@/components/Pagination/DisplayRows";
import Pagination from "@/components/Pagination/Pagination";
import Link from "next/link";
import { FC } from "react";

const Accounts: FC = () => {
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative mb-12">
          <h2 className="text-2xl">Top Accounts by ETH Balance</h2>
          <div className="text-sm breadcrumbs text-gray-500">
            <ul>
              <li>
                <Link href="/" className="hover:text-primary decoration-none">
                  Home
                </Link>
              </li>
              <li>Top Accounts by ETH Balance</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full shadow-full-match bg-white rounded-md p-4">
          <div className="relative w-full overflow-x-auto">
            <div className="flex items-center justify-between flex-col md:flex-row gap-4 mb-8">
              <div className="relative">
                <h2 className="text-md">
                  More than{" "}
                  <Link href="/" className="text-primary hover:opacity-80">
                    2,783,298 accounts found
                  </Link>
                </h2>
                <p className="text-xs text-gray-400">
                  (Showing the last 10,000 top accounts only)
                </p>
              </div>
              <Pagination />
            </div>
            <table className="table align-middle whitespace-nowrap text-xs">
              <thead className="bg-light">
                <tr>
                  <th className="text-sm text-black font-bold">Rank</th>
                  <th className="text-sm text-black font-bold">Address</th>
                  <th className="text-sm text-black font-bold">Name Tag</th>
                  <th className="text-sm text-black font-bold">Balance</th>
                  <th className="text-sm text-black font-bold">Percentage</th>
                  <th className="text-sm text-black font-bold">Txn Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      0x5300000000000000000000000000000000000004
                    </Link>
                  </td>
                  <td>Scroll: WETH Token</td>
                  <td>1,485.56745277 ETH</td>
                  <td>0.00123611%</td>
                  <td>384,424</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <span
                        className="tooltip before:text-xs"
                        data-tip="Contract"
                      >
                        <i className="fa-regular fa-file-lines"></i>
                      </span>
                      <Link href="/" className="text-primary hover:opacity-80">
                        0x5300000000000000000000000000000000000004
                      </Link>
                    </div>
                  </td>
                  <td>Scroll: Vault</td>
                  <td>794.58897938 ETH</td>
                  <td>0.00066116%</td>
                  <td>3</td>
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

export default Accounts;
