import { Container } from "@/components/Container/Container";
import DisplayRows from "@/components/Pagination/DisplayRows";
import Pagination from "@/components/Pagination/Pagination";
import TimeFilter from "@/components/TimeFilter/TimeFilter";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const NftTopContracts: NextPage = () => {
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative mb-12">
          <h2 className="text-2xl">Top NFTs</h2>
          <div className="text-sm breadcrumbs text-gray-500">
            <ul>
              <li>
                <Link href="/" className="hover:text-primary decoration-none">
                  Home
                </Link>
              </li>
              <li>Top NFTs</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full shadow-full-match bg-white rounded-md p-4">
          <div className="relative w-full overflow-x-auto">
            <div className="relative w-full pb-4 mb-4 border-b border-gray-100 flex items-center flex-col md:flex-row justify-end">
              <TimeFilter />
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
                  <th className="text-sm text-black font-bold">#</th>
                  <th className="text-sm text-black font-bold">Collection</th>
                  <th className="text-sm text-black font-bold">Type</th>
                  <th className="text-sm text-black font-bold">
                    Volume
                    <span
                      className="tooltip before:text-xs"
                      data-tip="This column is updated every few hours instead of in real-time"
                    >
                      <i className="fas fa-circle-exclamation ms-0.5 text-gray-500"></i>
                    </span>
                  </th>
                  <th className="text-sm text-black font-bold">
                    Change(%)
                    <span
                      className="tooltip before:text-xs"
                      data-tip="This column is updated every few hours instead of in real-time"
                    >
                      <i className="fas fa-circle-exclamation ms-0.5 text-gray-500"></i>
                    </span>
                  </th>
                  <th className="text-sm text-black font-bold">
                    Sales
                    <span
                      className="tooltip before:text-xs"
                      data-tip="This column is updated every few hours instead of in real-time"
                    >
                      <i className="fas fa-circle-exclamation ms-0.5 text-gray-500"></i>
                    </span>
                  </th>
                  <th className="text-sm text-black font-bold">
                    Min Price (24H)
                    <span
                      className="tooltip before:text-xs"
                      data-tip="Lowest 24 hour last sale price for NFTs in this token contract"
                    >
                      <i className="fas fa-circle-exclamation ms-0.5 text-gray-500"></i>
                    </span>
                  </th>
                  <th className="text-sm text-black font-bold">
                    Min Price (24H)
                    <span
                      className="tooltip before:text-xs"
                      data-tip="Highest 24 hour last sale price for NFTs in this token contract"
                    >
                      <i className="fas fa-circle-exclamation ms-0.5 text-gray-500"></i>
                    </span>
                  </th>
                  <th className="text-sm text-black font-bold">
                    Transfers
                    <span
                      className="tooltip before:text-xs"
                      data-tip="This column displays the all-time total transfer count and is updated every few hours instead of in real-time"
                    >
                      <i className="fas fa-circle-exclamation ms-0.5 text-gray-500"></i>
                    </span>
                  </th>
                  <th className="text-sm text-black font-bold">
                    Owners
                    <span
                      className="tooltip tooltip-left before:text-xs"
                      data-tip="This column is updated every few hours instead of in real-time"
                    >
                      <i className="fas fa-circle-exclamation ms-0.5 text-gray-500"></i>
                    </span>
                  </th>
                  <th className="text-sm text-black font-bold">
                    Total Assets
                    <span
                      className="tooltip tooltip-left before:text-xs"
                      data-tip="This column is updated every few hours instead of in real-time"
                    >
                      <i className="fas fa-circle-exclamation ms-0.5 text-gray-500"></i>
                    </span>
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
                      className="flex items-center gap-1"
                    >
                      <div
                        className="inline-flex items-center gap-2 tooltip tooltip-right before:text-xs"
                        data-tip="0xbd3531da5cf5857e7cfaa92426877b022e612cf8"
                      >
                        <div className="relative w-8 min-w-8 h-8 rounded-full overflow-hidden bg-light">
                          <Image
                            src="/images/nft/pudgypenguins_32.webp"
                            alt=""
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-bold">PudgyPenguins</span>
                      </div>
                      <div
                        className="tooltip tooltip-right before:text-xs"
                        data-tip="The Blue Checkmark represents a token or project of public interest."
                      >
                        <Image
                          src="/images/icons/verified-fill.svg"
                          alt=""
                          width={50}
                          height={50}
                          className="w-4"
                        />
                      </div>
                    </Link>
                  </td>
                  <td>
                    <span className="badge badge-outline text-xs">ERC-721</span>
                  </td>
                  <td>223.8569 ETH</td>
                  <td>
                    <span className="text-red-600">-5.03%</span>
                  </td>
                  <td>12</td>
                  <td>0.0000 ETH</td>
                  <td>21.4269 ETH</td>
                  <td>129,531</td>
                  <td>4,342</td>
                  <td>8,888</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <Link
                      href="/"
                      target="_blank"
                      className="flex items-center gap-1"
                    >
                      <div
                        className="inline-flex items-center gap-2 tooltip tooltip-right before:text-xs"
                        data-tip="0xbd3531da5cf5857e7cfaa92426877b022e612cf8"
                      >
                        <div className="relative w-8 min-w-8 h-8 rounded-full overflow-hidden bg-light">
                          <Image
                            src="/images/nft/ageofdinodinosty_32.webp"
                            alt=""
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-bold">PudgyPenguins</span>
                      </div>
                      <div
                        className="tooltip tooltip-right before:text-xs"
                        data-tip="Reputation NEUTRAL: Some information on this token has been verified by Etherscan. Click for more info."
                      >
                        <Image
                          src="/images/icons/verified.svg"
                          alt=""
                          width={50}
                          height={50}
                          className="w-4"
                        />
                      </div>
                    </Link>
                  </td>
                  <td>
                    <span className="badge badge-outline text-xs">ERC-721</span>
                  </td>
                  <td>223.8569 ETH</td>
                  <td>
                    <span className="text-green-600">21.05%</span>
                  </td>
                  <td>12</td>
                  <td>0.0000 ETH</td>
                  <td>21.4269 ETH</td>
                  <td>129,531</td>
                  <td>4,342</td>
                  <td>
                    0
                    <span
                      className="tooltip tooltip-left before:text-xs"
                      data-tip="Note: Filtered by  totalSupply() , method returned a zero value."
                    >
                      <i className="fas fa-circle-exclamation ms-1"></i>
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

export default NftTopContracts;
