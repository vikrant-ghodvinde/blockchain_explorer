import Link from "next/link";
import { FC } from "react";

interface ViewProfileProps {
  setPageType: any;
}

const ViewProfile: FC<ViewProfileProps> = ({ setPageType }) => {
  return (
    <div className="grid grid-cols-1">
      <div className="relative border-b border-gray-100 py-4">
        Below are the username, email and overview information for your account.
      </div>
      <div className="relative">
        <div className="relative w-full overflow-x-auto">
          <table className="table">
            <tbody>
              <tr>
                <td>Your Username :</td>
                <td>John227</td>
              </tr>
              <tr>
                <td>Your Email Address :</td>
                <td>vikrantghodvinde2@gmail.com</td>
                <td>
                  <button
                    className="text-primary hover:text-secondary"
                    onClick={() => setPageType("setting")}
                  >
                    <i className="fas fa-pen"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Address Watch List :</td>
                <td>0 Address Alert(s)</td>
                <td>
                  <Link href="/my-address" className="text-primary hover:text-secondary">
                    <i className="fas fa-magnifying-glass-plus"></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Transaction Notes :</td>
                <td>0 out of 4000 available limit</td>
                <td>
                  <Link href="/my-private-notes" className="text-primary hover:text-secondary">
                    <i className="fas fa-magnifying-glass-plus"></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Address Tags :</td>
                <td>0 out of 2000 available limit</td>
                <td>
                  <Link href="/my-private-address" className="text-primary hover:text-secondary">
                    <i className="fas fa-magnifying-glass-plus"></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Email Notification Limit :</td>
                <td>0 emails sent out 200 daily limit available</td>
              </tr>
              <tr>
                <td>Total ETH Balance :</td>
                <td>0 ETH @ ($0.00)</td>
              </tr>
              <tr>
                <td>Last Login :</td>
                <td>2024-02-08 12:54:09 (UTC)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
