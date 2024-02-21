import { FC } from "react";
import { Container } from "../Container/Container";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div className="relative w-full bg-white">
      <Container>
        <div className="relative w-full flex items-center flex-col justify-center gap-4 sm:flex-row sm:justify-between py-8 border-b border-gray-100">
          <div className="flex items-center gap-x-3">
            <Image
              src="/images/logo.png"
              alt=""
              width={500}
              height={500}
              className="w-10 h-auto"
            />
            <h2 className="text-lg">Powered By Erience</h2>
          </div>
          <div className="relative flex items-center gap-2">
            <button
              type="button"
              className="relative inline-flex items-center gap-x-1 bg-light py-1.5 px-2 rounded-md text-xs hover:bg-white hover:text-black active:bg-white active:text-black transition duration-300"
            >
              <Image
                src="/images/icons/metamask.svg"
                alt="metamask"
                width={500}
                height={500}
                className="w-4"
              />
              Add Scroll Network
            </button>
            <button
              type="button"
              className="relative inline-flex items-center gap-x-1 bg-light py-1.5 px-2 rounded-md text-xs hover:bg-white hover:text-black active:bg-white active:text-black transition duration-300"
            >
              <i className="fas fa-gears"></i>
              Preferences
            </button>
            {/* <button
              type="button"
              className="relative bg-light py-1.5 px-2 rounded-md text-xs hover:bg-white hover:text-black active:bg-white active:text-black transition duration-300"
            >
              <i className="fas fa-moon"></i>
            </button> */}
          </div>
        </div>
        <div className="relative w-full flex items-center flex-col justify-center gap-4 sm:flex-row sm:justify-between py-6">
          <p className="text-sm">&copy;2024. All rights reserved.</p>
          <div className="relative flex items-center gap-2 gap-x-3 text-xs">
            <Link
              href="/"
              className="inline-block text-primary hover:opacity-80"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="inline-block text-primary hover:opacity-80"
            >
              Network Status
            </Link>
            <Link href="/contact-us" className="inline-block">
              <div
                className="w-8 h-8 bg-light flex items-center justify-center rounded-full hover:bg-white hover:text-black tooltip tooltip-left lg:tooltip-top before:text-xs after:hidden"
                data-tip="Contact Us"
              >
                <i className="fa-regular fa-envelope"></i>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
