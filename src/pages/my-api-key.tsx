import Pagination from "@/components/Pagination/Pagination";
import ProfileWrapper from "@/components/ProfileWrapper/ProfileWrapper";
import { NextPage } from "next";

const MyApiKey: NextPage = () => {
  return (
    <ProfileWrapper>
      <div className="relative w-full bg-white rounded-md p-4">
        <div className="relative w-full font-semibold border-b border-gray-100 pb-4 mb-4">
          My API Keys
        </div>
        <div className="relative w-full overflow-x-auto mb-4">
          <div className="flex items-center justify-between flex-col md:flex-row gap-4 mb-8">
            <div className="relative">
              <h2 className="text-sm">0 used (Out of 3 max limit)</h2>
            </div>
            <Pagination />
          </div>
          <table className="table align-middle whitespace-nowrap text-xs">
            <thead className="bg-light">
              <tr>
                <th className="text-sm text-black font-bold">Action</th>
                <th className="text-sm text-black font-bold">Api-Key Token</th>
                <th className="text-sm text-black font-bold">Created</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="alert alert-secondary">
          <i className="fa-solid fa-circle-exclamation"></i> You have yet to
          create an Api-Key Token.
        </div>
      </div>
      <div className="relative w-full bg-white rounded-md p-4 mt-4">
        <div className="relative w-full font-semibold border-b border-gray-100 pb-4">
          Current API Plans
        </div>
        <div className="grid grid-cols-1">
          <div className="relative text-sm py-4">
            Below are the username, email and overview information for your
            account.
          </div>
          <div className="relative text-sm py-4 border-b border-gray-100">
            <div className="grid grid-cols-12">
              <div className="relative col-span-12 md:col-span-5">
                My API Plan:
              </div>
              <div className="relative col-span-12 md:col-span-5">
                <h5 className="font-bold">FREE API PLAN</h5>
              </div>
              <div className="relative col-span-12 md:col-span-2">
                <button
                  type="button"
                  className="relative py-1.5 px-4 bg-primary-gradient text-black text-xs font-medium rounded-md overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary-gradient-reversed before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:-z-10"
                >
                  Upgrade <i className="fas fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="relative text-sm pt-4">
            <div className="grid grid-cols-12">
              <div className="relative col-span-12 md:col-span-5">
                API calls per second:
              </div>
              <div className="relative col-span-12 md:col-span-5">
                <h5 className="font-bold">5 calls</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default MyApiKey;
