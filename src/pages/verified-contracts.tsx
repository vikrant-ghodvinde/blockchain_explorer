import { Container } from "@/components/Container/Container";
import FilterDropdown from "@/components/FilterDropdown/FilterDropdown";
import DisplayRows from "@/components/Pagination/DisplayRows";
import Pagination from "@/components/Pagination/Pagination";
import TableSearch from "@/components/TableSearch/TableSearch";
import { NextPage } from "next";
import Link from "next/link";

const VerifiedContracts: NextPage = () => {
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative mb-12">
          <h2 className="text-2xl">Verified Contracts</h2>
          <div className="text-sm breadcrumbs text-gray-500">
            <ul>
              <li>
                <Link href="/" className="hover:text-primary decoration-none">
                  Home
                </Link>
              </li>
              <li>Verified Contracts</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full shadow-full-match bg-white rounded-md p-4">
          <div className="relative w-full overflow-x-auto">
            <div className="relative w-full pb-4 mb-4 border-b border-gray-100 flex items-center flex-col md:flex-row justify-between">
              <FilterDropdown />
              <TableSearch />
            </div>
            <div className="flex items-center justify-between flex-col md:flex-row gap-4 mb-8">
              <div className="relative">
                <h2 className="text-md">
                  Showing the last 500 verified contracts source code
                </h2>
              </div>
              <Pagination />
            </div>
            <table className="table align-middle whitespace-nowrap text-xs">
              <thead className="bg-light">
                <tr>
                  <th className="text-sm text-black font-bold">Address</th>
                  <th className="text-sm text-black font-bold">
                    Contract Name
                  </th>
                  <th className="text-sm text-black font-bold">Compiler</th>
                  <th className="text-sm text-black font-bold">Version</th>
                  <th className="text-sm text-black font-bold">Balance</th>
                  <th className="text-sm text-black font-bold">Txns</th>
                  <th className="text-sm text-black font-bold">Setting</th>
                  <th className="text-sm text-black font-bold">Verified</th>
                  <th className="text-sm text-black font-bold">
                    Audited{" "}
                    <span
                      className="tooltip tooltip-left before:text-xs"
                      data-tip="Smart Contracts Audit and Security"
                    >
                      <i className="fas fa-circle-exclamation ms-0.5 text-gray-500"></i>
                    </span>
                  </th>
                  <th className="text-sm text-black font-bold">
                    License{" "}
                    <span
                      className="tooltip tooltip-left before:text-xs"
                      data-tip="Contract Source Code License Type, click for more info"
                    >
                      <i className="fas fa-circle-exclamation ms-0.5 text-gray-500"></i>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center gap-1">
                      <span
                        className="tooltip tooltip-right before:text-xs"
                        data-tip="Verified Code"
                      >
                        <i className="fas fa-check-circle text-green-600"></i>
                      </span>
                      <span
                        className="tooltip tooltip-right before:text-xs"
                        data-tip="0xe53b916e0b2d99756130e804C04c838aA022Adc7"
                      >
                        0xe53b916e0b2d997561...
                      </span>
                    </div>
                  </td>
                  <td>myGreeter</td>
                  <td>Solidity(Json)</td>
                  <td>
                    <span
                      className="tooltip before:text-xs"
                      data-tip="3 known solidity compiler vulnerabilities exists for this compiler version"
                    >
                      <i className="fa fa-exclamation-triangle text-yellow-300"></i>
                    </span>{" "}
                    0.8.19
                  </td>
                  <td>0 ETH</td>
                  <td>2</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center text-gray-500 text-[8px] bg-light w-6 h-6 rounded-full tooltip before:text-xs" data-tip="Optimization Enabled">
                        <i className="fas fa-bolt"></i>
                      </span>
                      <span className="flex items-center justify-center text-gray-500 text-[8px] bg-light w-6 h-6 rounded-full tooltip before:text-xs" data-tip="Constructor Arguments">
                        <i className="fas fa-wrench"></i>
                      </span>
                      <span></span>
                    </div>
                  </td>
                  <td>1/17/2024</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center gap-1">
                      <span
                        className="tooltip tooltip-right before:text-xs"
                        data-tip="Verified Code"
                      >
                        <i className="fas fa-check-circle text-green-600"></i>
                      </span>
                      <span
                        className="tooltip tooltip-right before:text-xs"
                        data-tip="0xe53b916e0b2d99756130e804C04c838aA022Adc7"
                      >
                        0xe53b916e0b2d997561...
                      </span>
                    </div>
                  </td>
                  <td>myGreeter</td>
                  <td>Solidity(Json)</td>
                  <td>
                    <span
                      className="tooltip before:text-xs"
                      data-tip="3 known solidity compiler vulnerabilities exists for this compiler version"
                    >
                      <i className="fa fa-exclamation-triangle text-yellow-300"></i>
                    </span>{" "}
                    0.8.19
                  </td>
                  <td>0 ETH</td>
                  <td>2</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center text-gray-500 text-[8px] bg-light w-6 h-6 rounded-full tooltip before:text-xs" data-tip="Optimization Enabled">
                        <i className="fas fa-bolt"></i>
                      </span>
                      <span className="flex items-center justify-center text-gray-500 text-[8px] bg-light w-6 h-6 rounded-full tooltip before:text-xs" data-tip="Constructor Arguments">
                        <i className="fas fa-wrench"></i>
                      </span>
                      <span></span>
                    </div>
                  </td>
                  <td>1/17/2024</td>
                  <td>-</td>
                  <td>-</td>
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

export default VerifiedContracts;
