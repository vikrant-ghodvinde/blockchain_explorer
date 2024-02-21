import Pagination from "@/components/Pagination/Pagination";
import ProfileWrapper from "@/components/ProfileWrapper/ProfileWrapper";
import { NextPage } from "next";

const MyCustomAbi: NextPage = () => {
  return (
    <ProfileWrapper>
      <div className="relative w-full bg-white rounded-md p-4">
        <div className="relative w-full font-semibold border-b border-gray-100 pb-4 mb-4">
          My Custom ABIs
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
                <th className="text-sm text-black font-bold">Action</th>
                <th className="text-sm text-black font-bold">Title</th>
                <th className="text-sm text-black font-bold">Address</th>
                <th className="text-sm text-black font-bold">Created</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="alert alert-secondary">
          <i className="fa-solid fa-circle-exclamation"></i> You have not
          entered any custom ABIs
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default MyCustomAbi;
