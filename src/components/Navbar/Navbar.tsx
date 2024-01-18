import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../Container/Container";
import { useRouter } from "next/router";

const Navbar: FC = () => {
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
    <div className="relative bg-black shadow-nav-s z-[999]">
      <div className="py-2 border-b border-gray-800 hidden lg:block">
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
              className={`flex gap-x-3 lg:items-center fixed lg:relative top-[67px] lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-black lg:bg-transparent flex-col lg:flex-row ${
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
                <a
                  href="#"
                  className={`group-hover:text-primary ${
                    blockchainRoutes ? "text-primary" : ""
                  }`}
                >
                  Blockchain
                </a>
                <div className="relative lg:absolute top-0 lg:top-[130%] lg:group-hover:top-full right-auto lg:right-[-80%] w-full lg:w-60 lg:pt-4 lg:opacity-0 lg:group-hover:opacity-100 lg:invisible lg:group-hover:visible h-0 lg:h-auto overflow-hidden lg:overflow-auto group-hover:h-auto group-hover:pt-4 transition-all duration-300">
                  <ul className="relative text-[13px] group-hover:border lg:group-hover:border-b-0 lg:group-hover:border-l-0 lg:group-hover:border-r-0 rounded-md lg:rounded-none lg:border-t-2 border-primary bg-black p-3">
                    <li>
                      <Link
                        href="/transactions"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
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
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
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
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
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
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
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
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
                          router.pathname === "/beacon-withdrawals"
                            ? "text-primary"
                            : ""
                        }`}
                      >
                        Beacon Withdrawals
                      </Link>
                    </li>
                    <hr className="my-3 border-gray-800" />
                    <li>
                      <Link
                        href="/blocks"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
                          router.pathname === "/blocks" ? "text-primary" : ""
                        }`}
                      >
                        View Blocks
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/batches"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
                          router.pathname === "/batches" ? "text-primary" : ""
                        }`}
                      >
                        View Batches
                      </Link>
                    </li>
                    <hr className="my-3 border-gray-800" />
                    <li>
                      <Link
                        href="/accounts"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
                          router.pathname === "/accounts" ? "text-primary" : ""
                        }`}
                      >
                        Top Accounts
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/verified-contracts"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
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
                <a
                  href="#"
                  className={`group-hover:text-primary ${
                    tokensRoutes ? "text-primary" : ""
                  }`}
                >
                  Tokens
                </a>
                <div className="relative lg:absolute top-0 lg:top-[130%] lg:group-hover:top-full right-auto lg:right-0 w-full lg:w-60 lg:pt-4 lg:opacity-0 lg:group-hover:opacity-100 lg:invisible lg:group-hover:visible h-0 lg:h-auto overflow-hidden lg:overflow-auto group-hover:h-auto group-hover:pt-4 transition-all duration-300">
                  <ul className="relative text-[13px] group-hover:border lg:group-hover:border-b-0 lg:group-hover:border-l-0 lg:group-hover:border-r-0 rounded-md lg:rounded-none lg:border-t-2 border-primary bg-black p-3">
                    <li>
                      <Link
                        href="/tokens"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
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
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
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
                <a
                  href="#"
                  className={`group-hover:text-primary ${
                    nftsRoutes ? "text-primary" : ""
                  }`}
                >
                  NFTs
                </a>
                <div className="relative lg:absolute top-0 lg:top-[130%] lg:group-hover:top-full right-auto lg:right-0 w-full lg:w-60 lg:pt-4 lg:opacity-0 lg:group-hover:opacity-100 lg:invisible lg:group-hover:visible h-0 lg:h-auto overflow-hidden lg:overflow-auto group-hover:h-auto group-hover:pt-4 transition-all duration-300">
                  <ul className="relative text-[13px] group-hover:border lg:group-hover:border-b-0 lg:group-hover:border-l-0 lg:group-hover:border-r-0 rounded-md lg:rounded-none lg:border-t-2 border-primary bg-black p-3">
                    <li>
                      <Link
                        href="/nft-top-contracts"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
                          router.pathname === "/nft-top-contracts" ? "text-primary" : ""
                        }`}
                      >
                        Top NFTs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/nft-top-mints"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
                          router.pathname === "/nft-top-mints" ? "text-primary" : ""
                        }`}
                      >
                        Top Mints
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/nft-transfers"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
                          router.pathname === "/nft-transfers" ? "text-primary" : ""
                        }`}
                      >
                        Latest Transfers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/nft-latest-mints"
                        className={`relative block w-full p-2 rounded-md bg-transparent hover:bg-dark ${
                          router.pathname === "/nft-latest-mints" ? "text-primary" : ""
                        }`}
                      >
                        Latest Mints
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative block py-2 px-4 group before:absolute before:content-['\f107'] before:font-awesome before:font-[900] before:right-2 lg:before:right-0 before:top-3.5 before:text-xs">
                <a href="#" className="group-hover:text-primary">
                  Resources
                </a>
                <div className="relative lg:absolute top-0 lg:top-[130%] lg:group-hover:top-full right-auto lg:right-0 w-full lg:w-60 lg:pt-4 lg:opacity-0 lg:group-hover:opacity-100 lg:invisible lg:group-hover:visible h-0 lg:h-auto overflow-hidden lg:overflow-auto group-hover:h-auto group-hover:pt-4 transition-all duration-300">
                  <ul className="relative text-[13px] group-hover:border lg:group-hover:border-b-0 lg:group-hover:border-l-0 lg:group-hover:border-r-0 rounded-md lg:rounded-none lg:border-t-2 border-primary bg-black p-3">
                    <li>
                      <Link
                        href="/"
                        className="relative block w-full p-2 rounded-md bg-transparent hover:bg-dark"
                      >
                        Charts And Stats
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="relative block w-full p-2 rounded-md bg-transparent hover:bg-dark"
                      >
                        Top Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="relative block w-full p-2 rounded-md bg-transparent hover:bg-dark"
                      >
                        Leaderboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="relative block w-full p-2 rounded-md bg-transparent hover:bg-dark"
                      >
                        Directory
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="relative block w-full p-2 rounded-md bg-transparent hover:bg-dark"
                      >
                        Newsletter
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="relative block w-full p-2 rounded-md bg-transparent hover:bg-dark"
                      >
                        Knowledge Base
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="flex items-center gap-x-4 ps-4 border-l-0 lg:border-l border-gray-800">
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
              <Link
                href="/login"
                className="hover:text-primary transition-all duration-300"
              >
                <i className="fas fa-user-circle text-sm me-px"></i> Sign In
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
