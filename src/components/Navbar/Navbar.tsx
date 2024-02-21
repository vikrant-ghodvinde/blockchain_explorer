import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../Container/Container";
import { useRouter } from "next/router";

const Navbar: FC = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [menuToggle, setMenuToggle] = useState(false);
  const router = useRouter();
  const blockchainRoutes =
    router.pathname === "/transactions" ||
    router.pathname === "/txs-pending" ||
    router.pathname === "/internal-transactions" ||
    router.pathname === "/beacon-deposit" ||
    router.pathname === "/beacon-withdrawals" ||
    router.pathname === "/blocks" ||
    router.pathname === "/batches" ||
    router.pathname === "/accounts" ||
    router.pathname === "/verified-contracts";
  const tokensRoutes =
    router.pathname === "/tokens" || router.pathname === "/tokentxns";
  const nftsRoutes =
    router.pathname === "/nft-top-contracts" ||
    router.pathname === "/nft-top-mints" ||
    router.pathname === "/nft-transfers" ||
    router.pathname === "/nft-latest-mints";
  return (
    <div className="sticky top-0 left-0 lg:relative lg:top-auto lg:left-auto bg-white shadow-nav-s z-[999]">
      <div className="py-2 border-b border-gray-100 hidden lg:block">
        <Container>
          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center gap-x-2 text-sm">
              <div>
                ETH Price:{" "}
                <span className="text-primary">
                  $2,370.39{" "}
                  <div
                    className="tooltip tooltip-right before:text-xs"
                    data-tip="Changes in the last 24 hours"
                  >
                    <span>(+2.72%)</span>
                  </div>
                </span>
              </div>
              <div>
                Gas:{" "}
                <div
                  className="tooltip tooltip-bottom before:text-xs"
                  data-tip="Base Free: 17 Gwei, Priority Fee: 0 Gwei"
                >
                  <span className="text-primary">17 Gwei</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="relative py-4 flex items-center justify-between gap-4">
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt=""
              width={500}
              height={500}
              className="w-14 h-auto"
            />
          </Link>
          <div className="relative flex items-center gap-x-4 z-[999]">
            <ul
              className={`flex gap-x-3 lg:items-center fixed lg:relative top-[67px] lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent flex-col lg:flex-row ${
                menuToggle ? "max-h-[calc(100%-67px)]" : "max-h-0"
              } lg:max-h-auto lg:overflow-visible transition-all duration-500 overflow-y-hidden`}
            >
              <li className="relative group block py-2 px-4">
                <Link
                  href="/"
                  className={`group-hover:text-primary ${
                    router.pathname === "/" ? "text-primary" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="relative block py-2 px-4 group before:absolute before:content-['\f107'] before:font-awesome before:font-[900] before:right-2 lg:before:right-0 before:top-3.5 before:text-xs">
                <span
                  className={`group-hover:text-primary cursor-pointer ${
                    blockchainRoutes ? "text-primary" : ""
                  }`}
                >
                  Blockchain
                </span>
                <div className="relative lg:absolute top-0 lg:top-[130%] lg:group-hover:top-full right-auto lg:right-[-80%] w-full lg:w-60 lg:pt-4 lg:opacity-0 lg:group-hover:opacity-100 lg:invisible lg:group-hover:visible h-0 lg:h-auto overflow-hidden lg:overflow-auto group-hover:h-auto group-hover:pt-4 transition-all duration-300">
                  <ul className="relative text-[13px] group-hover:border lg:group-hover:border-b-0 lg:group-hover:border-l-0 lg:group-hover:border-r-0 rounded-md lg:rounded-none lg:border-t-2 border-primary bg-white p-3">
                    <li>
                      <Link
                        href="/transactions"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/transactions"
                            ? "text-primary"
                            : ""
                        }`}
                      >
                        Transactions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/txs-pending"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/txs-pending"
                            ? "text-primary"
                            : ""
                        }`}
                      >
                        Pending Transactions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/internal-transactions"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/internal-transactions"
                            ? "text-primary"
                            : ""
                        }`}
                      >
                        Contract Internal Transactions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/beacon-deposit"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/beacon-deposit"
                            ? "text-primary"
                            : ""
                        }`}
                      >
                        Beacon Deposits
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/beacon-withdrawals"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/beacon-withdrawals"
                            ? "text-primary"
                            : ""
                        }`}
                      >
                        Beacon Withdrawals
                      </Link>
                    </li>
                    <hr className="my-3 border-gray-100" />
                    <li>
                      <Link
                        href="/blocks"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/blocks" ? "text-primary" : ""
                        }`}
                      >
                        View Blocks
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/batches"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/batches" ? "text-primary" : ""
                        }`}
                      >
                        View Batches
                      </Link>
                    </li>
                    <hr className="my-3 border-gray-100" />
                    <li>
                      <Link
                        href="/accounts"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/accounts" ? "text-primary" : ""
                        }`}
                      >
                        Top Accounts
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/verified-contracts"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/verified-contracts"
                            ? "text-primary"
                            : ""
                        }`}
                      >
                        Verified Contracts
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative block py-2 px-4 group before:absolute before:content-['\f107'] before:font-awesome before:font-[900] before:right-2 lg:before:right-0 before:top-3.5 before:text-xs">
                <span
                  className={`group-hover:text-primary cursor-pointer ${
                    tokensRoutes ? "text-primary" : ""
                  }`}
                >
                  Tokens
                </span>
                <div className="relative lg:absolute top-0 lg:top-[130%] lg:group-hover:top-full right-auto lg:right-0 w-full lg:w-60 lg:pt-4 lg:opacity-0 lg:group-hover:opacity-100 lg:invisible lg:group-hover:visible h-0 lg:h-auto overflow-hidden lg:overflow-auto group-hover:h-auto group-hover:pt-4 transition-all duration-300">
                  <ul className="relative text-[13px] group-hover:border lg:group-hover:border-b-0 lg:group-hover:border-l-0 lg:group-hover:border-r-0 rounded-md lg:rounded-none lg:border-t-2 border-primary bg-white p-3">
                    <li>
                      <Link
                        href="/tokens"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/tokens" ? "text-primary" : ""
                        }`}
                      >
                        Top Tokens{" "}
                        <span className="text-xs text-gray-400">(ERC-20)</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tokentxns"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/tokentxns" ? "text-primary" : ""
                        }`}
                      >
                        Token Transfers{" "}
                        <span className="text-xs text-gray-400">(ERC-20)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative block py-2 px-4 group before:absolute before:content-['\f107'] before:font-awesome before:font-[900] before:right-2 lg:before:right-0 before:top-3.5 before:text-xs">
                <span
                  className={`group-hover:text-primary cursor-pointer ${
                    nftsRoutes ? "text-primary" : ""
                  }`}
                >
                  NFTs
                </span>
                <div className="relative lg:absolute top-0 lg:top-[130%] lg:group-hover:top-full right-auto lg:right-0 w-full lg:w-60 lg:pt-4 lg:opacity-0 lg:group-hover:opacity-100 lg:invisible lg:group-hover:visible h-0 lg:h-auto overflow-hidden lg:overflow-auto group-hover:h-auto group-hover:pt-4 transition-all duration-300">
                  <ul className="relative text-[13px] group-hover:border lg:group-hover:border-b-0 lg:group-hover:border-l-0 lg:group-hover:border-r-0 rounded-md lg:rounded-none lg:border-t-2 border-primary bg-white p-3">
                    <li>
                      <Link
                        href="/nft-top-contracts"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/nft-top-contracts"
                            ? "text-primary"
                            : ""
                        }`}
                      >
                        Top NFTs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/nft-top-mints"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/nft-top-mints"
                            ? "text-primary"
                            : ""
                        }`}
                      >
                        Top Mints
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/nft-transfers"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/nft-transfers"
                            ? "text-primary"
                            : ""
                        }`}
                      >
                        Latest Transfers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/nft-latest-mints"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-light ${
                          router.pathname === "/nft-latest-mints"
                            ? "text-primary"
                            : ""
                        }`}
                      >
                        Latest Mints
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative block py-2 px-4 group before:absolute before:content-['\f107'] before:font-awesome before:font-[900] before:right-2 lg:before:right-0 before:top-3.5 before:text-xs">
                <span className="group-hover:text-primary cursor-pointer">
                  Resources
                </span>
                <div className="relative lg:absolute top-0 lg:top-[130%] lg:group-hover:top-full right-auto lg:right-0 w-full lg:w-60 lg:pt-4 lg:opacity-0 lg:group-hover:opacity-100 lg:invisible lg:group-hover:visible h-0 lg:h-auto overflow-hidden lg:overflow-auto group-hover:h-auto group-hover:pt-4 transition-all duration-300">
                  <ul className="relative text-[13px] group-hover:border lg:group-hover:border-b-0 lg:group-hover:border-l-0 lg:group-hover:border-r-0 rounded-md lg:rounded-none lg:border-t-2 border-primary bg-white p-3">
                    <li>
                      <Link
                        href="/"
                        className="relative block w-full p-2 rounded-md bg-transparent hover:bg-light"
                      >
                        Charts And Stats
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="relative block w-full p-2 rounded-md bg-transparent hover:bg-light"
                      >
                        Top Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="relative block w-full p-2 rounded-md bg-transparent hover:bg-light"
                      >
                        Leaderboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="relative block w-full p-2 rounded-md bg-transparent hover:bg-light"
                      >
                        Directory
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="relative block w-full p-2 rounded-md bg-transparent hover:bg-light"
                      >
                        Newsletter
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="relative block w-full p-2 rounded-md bg-transparent hover:bg-light"
                      >
                        Knowledge Base
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {loggedIn ? (
                <li className="relative block py-2 px-4 group before:absolute before:content-['\f107'] before:font-awesome before:font-[900] before:right-2 lg:before:right-0 before:top-3.5 before:text-xs">
                  <span className="group-hover:text-primary cursor-pointer">
                    <i className="fas fa-user-circle text-sm me-px"></i> John227
                  </span>
                  <div className="relative lg:absolute top-0 lg:top-[130%] lg:group-hover:top-full right-auto lg:right-0 w-full lg:w-60 lg:pt-4 lg:opacity-0 lg:group-hover:opacity-100 lg:invisible lg:group-hover:visible h-0 lg:h-auto overflow-hidden lg:overflow-auto group-hover:h-auto group-hover:pt-4 transition-all duration-300">
                    <ul className="relative text-[13px] group-hover:border lg:group-hover:border-b-0 lg:group-hover:border-l-0 lg:group-hover:border-r-0 rounded-md lg:rounded-none lg:border-t-2 border-primary bg-white p-3">
                      <li>
                        <Link
                          href="/my-account"
                          className="relative block w-full p-2 rounded-md bg-transparent hover:bg-light"
                        >
                          My Profile
                        </Link>
                      </li>
                      <hr className="my-3 border-gray-100" />
                      <li>
                        <Link
                          href="/my-address"
                          className="relative block w-full p-2 rounded-md bg-transparent hover:bg-light"
                        >
                          Watch List
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/my-private-notes"
                          className="relative block w-full p-2 rounded-md bg-transparent hover:bg-light"
                        >
                          Txn Private Notes
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/my-private-address"
                          className="relative block w-full p-2 rounded-md bg-transparent hover:bg-light"
                        >
                          Private Name Tags
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/my-token-ignore"
                          className="relative block w-full p-2 rounded-md bg-transparent hover:bg-light"
                        >
                          Token Ignore List
                        </Link>
                      </li>
                      <hr className="my-3 border-gray-100" />
                      <li>
                        <Link
                          href="/my-api-key"
                          className="relative block w-full p-2 rounded-md bg-transparent hover:bg-light"
                        >
                          API Keys
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/my-verified-address"
                          className="relative block w-full p-2 rounded-md bg-transparent hover:bg-light"
                        >
                          Verified Address
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/my-custom-abi"
                          className="relative block w-full p-2 rounded-md bg-transparent hover:bg-light"
                        >
                          Custom ABI
                        </Link>
                      </li>
                      <hr className="my-3 border-gray-100" />
                      <li>
                        <button
                          type="button"
                          className="relative btn btn-sm border-0 w-full py-1.5 px-6 bg-primary-gradient text-black font-semibold rounded-md text-xs overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary-gradient-reversed before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:-z-10"
                        >
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                <li className="ps-4 border-l-0 lg:border-l border-gray-100">
                  <Link
                    href="/login"
                    className="hover:text-primary transition-all duration-300"
                  >
                    <i className="fas fa-user-circle text-sm me-px"></i> Sign In
                  </Link>
                </li>
              )}
            </ul>
            <div className="relative">
              <div
                className="block lg:hidden text-lg"
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
