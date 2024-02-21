import ProfileWrapper from "@/components/ProfileWrapper/ProfileWrapper";
import EditProfile from "@/screens/Profile/EditProfile";
import ViewProfile from "@/screens/Profile/ViewProfile";
import { NextPage } from "next";
import { useState } from "react";

const MyAccount: NextPage = () => {
  const [pageType, setPageType] = useState("overview");
  return (
    <ProfileWrapper>
      <div className="relative w-full bg-white rounded-md p-4">
        <div className="relative w-full">
          <div role="tablist" className="tabs tabs-bordered">
            <button
              type="button"
              role="tab"
              className={`tab ${pageType === "overview" ? "tab-active" : ""}`}
              onClick={() => setPageType("overview")}
            >
              Overview
            </button>
            <button
              type="button"
              role="tab"
              className={`tab ${pageType === "setting" ? "tab-active" : ""}`}
              onClick={() => setPageType("setting")}
            >
              Account Settings & Profile
            </button>
          </div>
          <div className="relative w-full text-sm">
            {pageType === "overview" ? <ViewProfile setPageType={setPageType} /> : <EditProfile />}
          </div>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default MyAccount;
