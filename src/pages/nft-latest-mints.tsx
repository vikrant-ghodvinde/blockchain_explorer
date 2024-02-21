import { Container } from "@/components/Container/Container";
import Pagination from "@/components/Pagination/Pagination";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const NftLatestMints: NextPage = () => {
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative mb-12">
          <h2 className="text-2xl">NFT Latest Mints</h2>
          <div className="text-sm breadcrumbs text-gray-500">
            <ul>
              <li>
                <Link href="/" className="hover:text-primary decoration-none">
                  Home
                </Link>
              </li>
              <li>NFT Latest Mints</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full shadow-full-match bg-white rounded-md p-4">
          <div className="relative w-full overflow-x-auto">
            <div className="flex items-center justify-between flex-col md:flex-row gap-4 mb-8">
              <div className="relative">
                <h2 className="text-md">More than 100,000 records found</h2>
                <p className="text-xs text-gray-400">
                  (Showing last 10,000 records)
                </p>
              </div>
              <Pagination />
            </div>
            <table className="table align-middle whitespace-nowrap text-xs">
              <thead className="bg-light">
                <tr>
                  <th className="text-sm text-black font-bold"></th>
                  <th className="text-sm text-black font-bold">
                    Transaction Info
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
                  <th className="text-sm text-black font-bold">Maker</th>
                  <th className="text-sm text-black font-bold">Type</th>
                  <th className="text-sm text-black font-bold">Item</th>
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
                      0x55b104faabe1ad9f2...
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
                    <span className="badge badge-outline text-xs">ERC-721</span>
                  </td>
                  <td>
                    <div className="inline-flex items-center gap-2">
                      <Link
                        href="/"
                        target="_blank"
                        className="relative w-9 min-w-9 h-9 rounded-md overflow-hidden bg-light"
                      >
                        <Image
                          src="/images/nft/nft-placeholder.svg"
                          alt=""
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      <div className="relative text-start">
                        <Link
                          href="/"
                          target="_blank"
                          className="block font-bold tooltip before:text-xs"
                          data-tip="Uniswap V3: Positions NFT#654922"
                        >
                          Uniswap V3: Positions NF...
                        </Link>
                        <p
                          className="relative tooltip before:text-xs before:max-w-60"
                          data-tip="0xc36442b4a4522e871399cd717abdd847ab11fe88/654922 | Uniswap V3: Positions NFT#654922"
                        >
                          Uniswap V3: Positions NFT
                        </p>
                      </div>
                    </div>
                  </td>
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
                      0x55b104faabe1ad9f2...
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
                    <span className="badge badge-outline text-xs">ERC-721</span>
                  </td>
                  <td>
                    <div className="inline-flex items-center gap-2">
                      <Link
                        href="/"
                        target="_blank"
                        className="relative w-9 min-w-9 h-9 rounded-md overflow-hidden bg-light"
                      >
                        <Image
                          src="/images/nft/nft-placeholder.svg"
                          alt=""
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      <div className="relative text-start">
                        <Link
                          href="/"
                          target="_blank"
                          className="block font-bold tooltip before:text-xs"
                          data-tip="Uniswap V3: Positions NFT#654922"
                        >
                          Uniswap V3: Positions NF...
                        </Link>
                        <p
                          className="relative tooltip before:text-xs before:max-w-60"
                          data-tip="0xc36442b4a4522e871399cd717abdd847ab11fe88/654922 | Uniswap V3: Positions NFT#654922"
                        >
                          Uniswap V3: Positions NFT
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NftLatestMints;
