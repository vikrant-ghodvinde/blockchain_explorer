import { FC } from "react";
import { Container } from "../Container/Container";
import Link from "next/link";
import { useRouter } from "next/router";

interface ProfileWrapperProps {
  children: React.ReactNode;
}

const ProfileWrapper: FC<ProfileWrapperProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="relative w-full py-12">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="relative col-span-12 lg:col-span-3">
            <div className="grid grid-rows-2 gap-4">
              <div className="relative">
                <div className="relative bg-white rounded-md overflow-hidden">
                  <ul>
                    <li
                      className={`profile-menu-item ${
                        router.pathname === "/my-account" ? "active" : ""
                      }`}
                    >
                      <Link href="/my-account" className="profile-menu-link">
                        <i className="fas fa-user-circle me-1"></i> My Profile
                      </Link>
                    </li>
                    <li
                      className={`profile-menu-item ${
                        router.pathname === "/my-address" ? "active" : ""
                      }`}
                    >
                      <Link href="/my-address" className="profile-menu-link">
                        <i className="fas fa-heart me-1"></i> Watch List
                      </Link>
                    </li>
                    <li
                      className={`profile-menu-item ${
                        router.pathname === "/my-private-notes" ? "active" : ""
                      }`}
                    >
                      <Link
                        href="/my-private-notes"
                        className="profile-menu-link"
                      >
                        <i className="far fa-sticky-note me-1"></i> Txn Private
                        Notes
                      </Link>
                    </li>
                    <li
                      className={`profile-menu-item ${
                        router.pathname === "/my-private-address"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link
                        href="/my-private-address"
                        className="profile-menu-link"
                      >
                        <i className="far fa-sticky-note me-1"></i> Private Name
                        Tags
                      </Link>
                    </li>
                    <li
                      className={`profile-menu-item ${
                        router.pathname === "/my-token-ignore" ? "active" : ""
                      }`}
                    >
                      <Link
                        href="/my-token-ignore"
                        className="profile-menu-link"
                      >
                        <i className="fas fa-eye-slash me-1"></i> Token Ignore
                        List
                      </Link>
                    </li>
                    <li
                      className={`profile-menu-item ${
                        router.pathname === "/my-api-key" ? "active" : ""
                      }`}
                    >
                      <Link href="/my-api-key" className="profile-menu-link">
                        <i className="fas fa-key me-1"></i> API-KEYs
                      </Link>
                    </li>
                    <li
                      className={`profile-menu-item ${
                        router.pathname === "/my-verified-address"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link
                        href="/my-verified-address"
                        className="profile-menu-link"
                      >
                        <i className="fas fa-check-circle me-1"></i> Verified
                        Addresses
                      </Link>
                    </li>
                    <li
                      className={`profile-menu-item ${
                        router.pathname === "/my-custom-abi" ? "active" : ""
                      }`}
                    >
                      <Link href="/my-custom-abi" className="profile-menu-link">
                        <i className="fas fa-tasks me-1"></i> Custom ABIs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="relative bg-white rounded-md overflow-hidden">
                  <div className="relative p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-light text-primary text-xs">
                        <i className="fas fa-info"></i>
                      </span>
                      <h4 className="text-lg font-medium">Watch List?</h4>
                    </div>
                    <p className="text-sm">
                      An Email notification can be sent to you when an address
                      on your watch list receives an incoming ETH transaction.
                      The address watch list can also be useful for portfolio
                      tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative col-span-12 lg:col-span-9">
            <div className="relative w-full">
              <div className="relative">{children}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfileWrapper;
