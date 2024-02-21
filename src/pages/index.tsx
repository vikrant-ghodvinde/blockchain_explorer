import { TransactionChart } from "@/components/TransactionChart/TransactionChart";
import { Container } from "@/components/Container/Container";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="relative w-full">
      <div className="relative h-80 py-14 bg-[url('/images/banner.webp')] bg-center bg-[100%,100%] flex justify-center before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-white before:opacity-50 ">
        <Container>
          <div className="relative grid grid-rows-2 gap-4 w-full max-w-2xl mx-auto">
            <div>
              <h2 className="text-center text-2xl font-bold">
                Scroll Blockchain Explorer
              </h2>
            </div>
            <form className="relative w-full h-12 flex items-center bg-white border border-light outline-none rounded-md overflow-hidden">
              <select className="select-sm w-full max-w-24 h-full border-0 outline-none bg-white px-2 pr-3 text-sm">
                <option value="">All Filters</option>
                <option value="">Addresses</option>
                <option value="">Tokens</option>
                <option value="">Name Tags</option>
                <option value="">Labels</option>
                <option value="">Websites</option>
              </select>
              <input
                type="text"
                placeholder="Search by Address / Txn Hash / Block / Token / Name Tags"
                className="relative w-full h-full bg-transparent bottom-0 border-l outline-none px-4 text-sm"
              />
              <button
                type="submit"
                className="relative w-20 h-full flex items-center justify-center bg-primary rounded-md bg-primary-gradient text-black"
              >
                <i className="fas fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </Container>
      </div>
      <div className="relative w-full bg-light">
        <Container>
          <div className="relative lg:absolute top-[-80px] lg:left-[50%] lg:translate-x-[-50%] w-full max-w-[1399px] lg:px-3">
            <div className="relative w-full shadow-full-match bg-white rounded-md p-4">
              <div className="grid grid-cols-3 items-center">
                <div className="relative col-span-3 lg:col-span-1 p-2 pb-4 lg:p-4 border-b lg:border-b-0 lg:border-r border-gray-100">
                  <div className="grid">
                    <div className="relative text-sm flex items-center gap-x-3 border-b border-gray-100 pb-4">
                      <Image
                        src="/images/icons/mainbrand-1.svg"
                        alt=""
                        width={500}
                        height={500}
                        className="w-6"
                      />
                      <div>
                        <h5 className="text-gray-500">ETH PRICE</h5>
                        <Link
                          href="/"
                          className="group tooltip before:text-xs"
                          data-tip="View Historical ETH Price"
                        >
                          <span className="group-hover:text-primary">
                            $2,589.68
                          </span>{" "}
                          @ 0.056283 BTC{" "}
                          <span className="text-[10px] text-primary">
                            (+8.49%)
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="relative text-sm flex items-center gap-x-3 pt-4">
                      <Image
                        src="/images/icons/mainbrand-1.svg"
                        alt=""
                        width={500}
                        height={500}
                        className="w-6"
                      />
                      <div>
                        <h5 className="text-gray-500">ETH PRICE</h5>
                        <Link
                          href="/"
                          className="group tooltip before:text-xs"
                          data-tip="View Historical ETH Price"
                        >
                          <span className="group-hover:text-primary">
                            $2,589.68
                          </span>{" "}
                          @ 0.056283 BTC{" "}
                          <span className="text-[10px] text-primary">
                            (+8.49%)
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative col-span-3 lg:col-span-1 p-2 pb-4 lg:p-4 border-b lg:border-b-0 lg:border-r border-gray-100">
                  <div className="grid">
                    <div className="relative text-sm flex items-center gap-x-3 border-b border-gray-100 pb-4">
                      <Image
                        src="/images/icons/mainbrand-1.svg"
                        alt=""
                        width={500}
                        height={500}
                        className="w-6"
                      />
                      <div>
                        <h5 className="text-gray-500">ETH PRICE</h5>
                        <Link
                          href="/"
                          className="group tooltip before:text-xs"
                          data-tip="View Historical ETH Price"
                        >
                          <span className="group-hover:text-primary">
                            $2,589.68
                          </span>{" "}
                          @ 0.056283 BTC{" "}
                          <span className="text-[10px] text-primary">
                            (+8.49%)
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="relative text-sm flex items-center gap-x-3 pt-4">
                      <Image
                        src="/images/icons/mainbrand-1.svg"
                        alt=""
                        width={500}
                        height={500}
                        className="w-6"
                      />
                      <div>
                        <h5 className="text-gray-500">ETH PRICE</h5>
                        <Link
                          href="/"
                          className="group tooltip before:text-xs"
                          data-tip="View Historical ETH Price"
                        >
                          <span className="group-hover:text-primary">
                            $2,589.68
                          </span>{" "}
                          @ 0.056283 BTC{" "}
                          <span className="text-[10px] text-primary">
                            (+8.49%)
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative col-span-3 lg:col-span-1 p-4">
                  {/* <TransactionChart /> */}
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="pb-14 lg:py-14">
          <Container>
            <div className="relative mt-[-60px] lg:mt-20 w-full grid grid-cols-3 gap-4">
              <div className="relative col-span-3 lg:col-span-1">
                <div className="relative w-full shadow-full-match min-h-48 bg-white rounded-md py-4">
                  <div className="text-md font-bold border-b border-gray-100 pb-4 px-4">
                    Latest Blocks
                  </div>
                  <div className="relative w-full h-auto max-h-[500px] overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
                    <div className="relative py-4 border-b border-gray-100 last:border-b-0 flex items-center justify-between gap-x-6 text-sm">
                      <div className="relative hidden md:flex lg:hidden xl:flex items-center gap-x-2">
                        <div className="relative w-12 h-12 bg-light rounded-sm flex items-center justify-center">
                          BK
                        </div>
                        <div>
                          <Link
                            href="/"
                            className="text-primary hover:opacity-80"
                          >
                            2358314
                          </Link>
                          <p className="text-xs text-gray-400">2 secs ago</p>
                        </div>
                      </div>
                      <div>
                        <p>
                          Sequenced By{" "}
                          <Link
                            href="/"
                            className="text-primary hover:opacity-80"
                          >
                            0x2448e8bb66f2e7...
                          </Link>
                        </p>
                        <p className="text-xs">
                          <Link
                            href="/"
                            className="tooltip text-sm text-primary before:text-xs"
                            data-tip="Transactions in this block"
                          >
                            3 txns
                          </Link>{" "}
                          in 3 secs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 text-center pt-4 px-4">
                    <button
                      type="button"
                      className="relative btn btn-sm border-0 w-full py-1.5 px-6 bg-primary-gradient text-black font-semibold rounded-md text-xs overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary-gradient-reversed before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:-z-10"
                    >
                      View All Blocks
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative col-span-3 lg:col-span-1">
                <div className="relative w-full shadow-full-match min-h-48 bg-white rounded-md py-4">
                  <div className="text-md font-bold border-b border-gray-100 pb-4 px-4">
                    Latest Blocks
                  </div>
                  <div className="relative w-full h-auto max-h-[500px] overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
                    <div className="relative py-4 border-b border-gray-100 last:border-b-0 flex items-center justify-between gap-x-6 text-sm">
                      <div className="relative hidden md:flex lg:hidden xl:flex items-start gap-x-2">
                        <div className="relative w-12 h-12 bg-light rounded-full flex items-center justify-center">
                          Tx
                        </div>
                        <div>
                          <p>
                            Tx#
                            <Link
                              href="/"
                              className="text-primary hover:opacity-80"
                            >
                              0x7673d153d684eccabe039cc...
                            </Link>
                          </p>
                          <p>
                            From{" "}
                            <Link
                              href="/"
                              className="text-primary hover:opacity-80"
                            >
                              0x77df3be1a43bf...
                            </Link>{" "}
                            To{" "}
                            <Link
                              href="/"
                              className="text-primary hover:opacity-80"
                            >
                              0xca9fbef94d7cc...
                            </Link>
                          </p>
                          <p className="text-xs text-gray-400">
                            2 secs ago{" "}
                            <span
                              className="tooltip before:text-xs bg-light py-1 px-2 rounded-md"
                              data-tip="Amount"
                            >
                              0.00158 ETH
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 text-center pt-4 px-4">
                    <button
                      type="button"
                      className="relative btn btn-sm border-0 w-full py-1.5 px-6 bg-primary-gradient text-black font-semibold rounded-md text-xs overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary-gradient-reversed before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:-z-10"
                    >
                      View All Blocks
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative col-span-3 lg:col-span-1">
                <div className="relative w-full shadow-full-match min-h-48 bg-white rounded-md py-4">
                  <div className="text-md font-bold border-b border-gray-100 pb-4 px-4">
                    <div
                      className="tooltip before:text-xs before:font-normal before:max-w-48"
                      data-tip="Latest Transactions submitted from L1 to L2"
                    >
                      Latest L1→L2 Transactions
                    </div>
                  </div>
                  <div className="relative w-full h-auto max-h-[500px] overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
                    <div className="relative py-4 border-b border-gray-100 last:border-b-0 flex items-center justify-between gap-x-6 text-sm">
                      <div className="relative hidden md:flex lg:hidden xl:flex items-center gap-x-2">
                        <div className="relative w-12 h-12 bg-light rounded-full flex items-center justify-center">
                          BK
                        </div>
                        <div>
                          <p>
                            Bk{" "}
                            <Link
                              href="/"
                              className="text-primary hover:opacity-80"
                            >
                              2358314{" "}
                              <i className="fas fa-arrow-up-right-from-square text-xs"></i>
                            </Link>
                          </p>
                          <p>
                            L1 Tx#{" "}
                            <Link
                              href="/"
                              className="text-primary hover:opacity-80"
                            >
                              0x002c0c75d910...
                            </Link>
                            L2 Tx#{" "}
                            <Link
                              href="/"
                              className="text-primary hover:opacity-80"
                            >
                              0x44e508bee9e46...
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 text-center pt-4 px-4">
                    <button
                      type="button"
                      className="relative btn btn-sm border-0 w-full py-1.5 px-6 bg-primary-gradient text-black font-semibold rounded-md text-xs overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary-gradient-reversed before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:-z-10"
                    >
                      View All Blocks
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
