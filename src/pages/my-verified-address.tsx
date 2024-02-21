import Pagination from "@/components/Pagination/Pagination";
import ProfileWrapper from "@/components/ProfileWrapper/ProfileWrapper";
import TableSearch from "@/components/TableSearch/TableSearch";
import { NextPage } from "next";
import Link from "next/link";

const MyVerifiedAddress: NextPage = () => {
  return (
    <ProfileWrapper>
      <div className="relative w-full bg-white rounded-md p-4">
        <div className="relative w-full border-b border-gray-100 pb-4 mb-4">
          <div className="flex flex-col md:flex-row items-center justify-start md:justify-between gap-2">
            <div className="font-semibold">My Verified Addresses</div>
            <TableSearch />
          </div>
        </div>
        <div className="relative w-full overflow-x-auto mb-4">
          <div className="flex items-center justify-between flex-col md:flex-row gap-4 mb-8">
            <div className="relative">
              <h2 className="text-sm">0 used (Out of 50 max quota)</h2>
            </div>
            <Pagination />
          </div>
          <table className="table align-middle whitespace-nowrap text-xs">
            <thead className="bg-light">
              <tr>
                <th className="text-sm text-black font-bold">Address</th>
                <th className="text-sm text-black font-bold">Quick Links</th>
                <th className="text-sm text-black font-bold">Verified Date</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="alert alert-secondary mb-4">
          <i className="fa-solid fa-circle-exclamation"></i> You have yet to
          verify any address.
        </div>
        <div className="relative w-full p-4 rounded-md bg-primary-light text-dark text-sm">
          <p className="mb-2">
            Verify Address Ownership process involves verifying the ownership of
            Scroll address used to create an Scroll smart contract, and this
            verification will link to an Scrollscan account.
          </p>
          <p>
            Once a user has claim ownership of an address or contract address,
            the user will be able to update their token information, dapp page
            and address name tag without needing to sign a new message for
            future submission. Find out more about{" "}
            <Link href="/" className="text-primary hover:opacity-90">
              verify address ownership.
            </Link>
          </p>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default MyVerifiedAddress;
