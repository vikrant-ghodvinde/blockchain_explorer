import { Container } from "@/components/Container/Container";
import DisplayRows from "@/components/Pagination/DisplayRows";
import Pagination from "@/components/Pagination/Pagination";
import Link from "next/link";
import { FC } from "react";

const Batches: FC = () => {
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative mb-12">
          <h2 className="text-2xl">Batches</h2>
          <div className="text-sm breadcrumbs text-gray-500">
            <ul>
              <li>
                <Link href="/" className="hover:text-primary decoration-none">
                  Home
                </Link>
              </li>
              <li>Batches</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full shadow-full-match bg-white rounded-md p-4">
          <div className="relative w-full overflow-x-auto">
            <div className="flex items-center justify-between flex-col md:flex-row gap-4 mb-8">
              <div className="relative">
                <h2 className="text-md">
                  Batch #56874 to #56898 (Total of 56,898 batches)
                </h2>
              </div>
              <Pagination />
            </div>
            <table className="table align-middle whitespace-nowrap text-xs">
              <thead className="bg-light">
                <tr>
                  <th className="text-sm text-black font-bold">Batch</th>
                  <th className="text-sm text-black font-bold">Status</th>
                  <th className="text-sm text-black font-bold">
                    Committed Block
                  </th>
                  <th className="text-sm text-black font-bold">
                    Committed Tx Hash
                  </th>
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
                    Finalized Block
                  </th>
                  <th className="text-sm text-black font-bold">
                    Finalized Tx Hash
                  </th>
                  <th className="text-sm text-black font-bold">Blocks</th>
                  <th className="text-sm text-black font-bold">Txn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      56898
                    </Link>
                  </td>
                  <td>
                    <span className="text-[10px] py-1 px-2 rounded-md bg-light">
                      Committed
                    </span>
                  </td>
                  <td>
                    <div className="text-primary flex items-center gap-1">
                      <Link href="/">1082659</Link>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                  </td>
                  <td>
                    <div
                      className="text-primary flex items-center gap-1 tooltip before:text-xs"
                      data-tip="0xdabe8eefdbc2239d8229395a393a312cc634a79d5f8e7924d958caab5da68de2"
                    >
                      <Link href="/">0xdabe8eefdbc2239d82...</Link>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                  </td>
                  <td>38 secs ago</td>
                  <td>
                    <span className="italic">Pending</span>
                  </td>
                  <td>
                    <span className="italic">Pending</span>
                  </td>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      46
                    </Link>
                  </td>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      272
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      56898
                    </Link>
                  </td>
                  <td>
                    <span className="text-[10px] py-1 px-2 rounded-md bg-light">
                      Committed
                    </span>
                  </td>
                  <td>
                    <div className="text-primary flex items-center gap-1">
                      <Link href="/">1082659</Link>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                  </td>
                  <td>
                    <div
                      className="text-primary flex items-center gap-1 tooltip before:text-xs"
                      data-tip="0xdabe8eefdbc2239d8229395a393a312cc634a79d5f8e7924d958caab5da68de2"
                    >
                      <Link href="/">0xdabe8eefdbc2239d82...</Link>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                  </td>
                  <td>38 secs ago</td>
                  <td>
                    <span className="italic">Pending</span>
                  </td>
                  <td>
                    <span className="italic">Pending</span>
                  </td>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      46
                    </Link>
                  </td>
                  <td>
                    <Link href="/" className="text-primary hover:opacity-80">
                      272
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

export default Batches;
