import Pagination from "@/components/Pagination/Pagination";
import ProfileWrapper from "@/components/ProfileWrapper/ProfileWrapper";
import TableSearch from "@/components/TableSearch/TableSearch";
import { NextPage } from "next";

const MyPrivateAddress: NextPage = () => {
  return (
    <ProfileWrapper>
      <div className="relative w-full bg-white rounded-md p-4">
        <div className="relative w-full font-semibold border-b border-gray-100 pb-4 mb-4">
          <div className="flex flex-col md:flex-row items-center justify-start md:justify-between gap-2">
            <div className="font-semibold">Address Private Name Tags</div>
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
                <th className="text-sm text-black font-bold">
                  <span
                    className="tooltip tooltip-right"
                    data-tip="Mark your favorite address to the top of the list"
                  >
                    <i className="far fa-circle-question"></i>
                  </span>
                </th>
                <th className="text-sm text-black font-bold">Action</th>
                <th className="text-sm text-black font-bold">Name Tag</th>
                <th className="text-sm text-black font-bold">Address Note</th>
                <th className="text-sm text-black font-bold">Created</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="alert alert-secondary">
          <i className="fa-solid fa-circle-exclamation"></i> There are no
          private name tag found
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default MyPrivateAddress;
