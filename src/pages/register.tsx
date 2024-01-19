import { Container } from "@/components/Container/Container";
import { NextPage } from "next";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

const Register: NextPage = () => {
  const handleCaptchaChange = (value: any) => {
    console.log(value);
  };
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="relative w-full">
            <div className="mb-6">
              <h2 className="text-3xl bg-primary-gradient text-transparent bg-clip-text mb-1">
                Register a <span className="font-bold">New</span> Account
              </h2>
              <p>Fill out the form to get started.</p>
            </div>
            <form className="grid grid-col-2 gap-5">
              <div className="relative col-span-2">
                <label className="block mb-1.5">Username</label>
                <input
                  type="text"
                  placeholder="Username has to be from 5 to 30 characters in length, only alphanumeric characters allowed."
                  className="w-full h-11 bg-transparent px-4 rounded-md outline-none border"
                />
                <span className="text-xs font-light text-primary">
                  Username is required.
                </span>
              </div>
              <div className="relative col-span-2">
                <label className="block mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="A confirmation code will be sent to this address"
                  className="w-full h-11 bg-transparent px-4 rounded-md outline-none border"
                />
                <span className="text-xs font-light text-primary">
                  Username is required.
                </span>
              </div>
              <div className="relative col-span-2 lg:col-span-1">
                <label className="block mb-1.5">Password</label>
                <input
                  type="text"
                  placeholder="Password"
                  className="w-full h-11 bg-transparent px-4 rounded-md outline-none border"
                />
                <span className="text-xs font-light text-primary">
                  Your password is invalid. Please try again.
                </span>
              </div>
              <div className="relative col-span-2 lg:col-span-1">
                <label className="block mb-1.5">Confirm Password</label>
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="w-full h-11 bg-transparent px-4 rounded-md outline-none border"
                />
                <span className="text-xs font-light text-primary">
                  Your password is invalid. Please try again.
                </span>
              </div>
              <div className="relative col-span-2">
                <div className="flex flex-col gap-y-2">
                  <div className="form-control">
                    <label className="cursor-pointer flex items-center gap-x-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm checkbox-success"
                      />
                      <span
                        className="text-black text-sm"
                        data-tip="Please do not check this box if you are using a public or shared PC"
                      >
                        I agree to the{" "}
                        <Link
                          href="/"
                          className="hover:text-primary underline decoration-dashed decoration-1"
                        >
                          Terms and Conditions
                        </Link>
                      </span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="cursor-pointer flex items-center gap-x-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm checkbox-success"
                      />
                      <span
                        className="text-black text-sm"
                        data-tip="Please do not check this box if you are using a public or shared PC"
                      >
                        I agree to receive the Scrollscan newsletter and
                        understand that I can unsubscribe at any time.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="relative col-span-2 flex items-center justify-center">
                <ReCAPTCHA
                  sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                  onChange={handleCaptchaChange}
                />
              </div>
              <div className="relative col-span-2 text-center">
                <button
                  type="submit"
                  className="relative py-2 px-6 bg-primary-gradient text-black font-bold rounded-md overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary-gradient-reversed before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:-z-10"
                >
                  Create a account
                </button>
              </div>
              <div className="relative col-span-2 text-center">
                <p className="text-sm">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-primary hover:opacity-80"
                  >
                    Click to Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
