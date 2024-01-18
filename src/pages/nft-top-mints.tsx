import { Container } from "@/components/Container/Container";
import TimeFilter from "@/components/TimeFilter/TimeFilter";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const NftTopMints: NextPage = () => {
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative mb-12">
          <h2 className="text-2xl">NFT Top Mints</h2>
          <div className="text-sm breadcrumbs text-gray-500">
            <ul>
              <li>
                <Link href="/" className="hover:text-primary decoration-none">
                  Home
                </Link>
              </li>
              <li>NFT Top Mints</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full shadow-full-match bg-black rounded-md p-4">
          <div className="relative w-full overflow-x-auto">
            <div className="relative w-full pb-4 mb-4 flex items-center flex-col md:flex-row justify-end">
              <TimeFilter />
            </div>
            <table className="table align-middle whitespace-nowrap text-xs">
              <thead className="bg-dark">
                <tr>
                  <th className="text-sm text-white font-bold">#</th>
                  <th className="text-sm text-white font-bold">Collection</th>
                  <th className="text-sm text-white font-bold">Type</th>
                  <th className="text-sm text-white font-bold">Mints</th>
                  <th className="text-sm text-white font-bold">
                    Unique Minters
                  </th>
                  <th className="text-sm text-white font-bold">Total Owners</th>
                  <th className="text-sm text-white font-bold">Total Assets</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Link
                      href="/"
                      target="_blank"
                      className="flex items-center gap-2 tooltip tooltip-right before:text-xs"
                      data-tip="0x9236ca1d6e59f8ab672269443e13669d0bd5b353"
                    >
                      <div className="relative w-8 min-w-8 h-8 rounded-full overflow-hidden bg-dark">
                        <Image
                          src="/images/nft/mintid_32.webp"
                          alt=""
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-bold">MintID</span>
                    </Link>
                  </td>
                  <td>
                    <span className="badge badge-outline text-xs">ERC-721</span>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">42</span>
                      <span className="text-gray-400">(1.44%)</span>
                      <progress
                        className="progress progress-success w-full max-w-20 h-1"
                        value="10"
                        max="100"
                      ></progress>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">3</span>
                      <span className="text-gray-400">(7.14%)</span>
                      <progress
                        className="progress progress-success w-full max-w-20 h-1"
                        value="10"
                        max="100"
                      ></progress>
                    </div>
                  </td>
                  <td>455</td>
                  <td>2,915</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <Link
                      href="/"
                      target="_blank"
                      className="flex items-center gap-2 tooltip tooltip-right before:text-xs"
                      data-tip="0x9236ca1d6e59f8ab672269443e13669d0bd5b353"
                    >
                      <div className="relative w-8 min-w-8 h-8 rounded-full overflow-hidden bg-dark">
                        <Image
                          src="/images/nft/mintid_32.webp"
                          alt=""
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-bold">MintID</span>
                    </Link>
                  </td>
                  <td>
                    <span className="badge badge-outline text-xs">ERC-721</span>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">42</span>
                      <span className="text-gray-400">(1.44%)</span>
                      <progress
                        className="progress progress-success w-full max-w-20 h-1"
                        value="10"
                        max="100"
                      ></progress>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">3</span>
                      <span className="text-gray-400">(7.14%)</span>
                      <progress
                        className="progress progress-success w-full max-w-20 h-1"
                        value="10"
                        max="100"
                      ></progress>
                    </div>
                  </td>
                  <td>455</td>
                  <td>2,915</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default NftTopMints;
