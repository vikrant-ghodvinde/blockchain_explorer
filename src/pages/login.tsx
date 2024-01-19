import { Container } from "@/components/Container/Container";
import { NextPage } from "next";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

const Login: NextPage = () => {
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
                Welcome <span className="font-bold">back</span>
              </h2>
              <p>Login to your account.</p>
            </div>
            <form className="grid grid-col-2 gap-5">
              <div className="relative col-span-2">
                <label className="block mb-1.5">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full h-11 bg-transparent px-4 rounded-md outline-none border"
                />
                <span className="text-xs font-light text-primary">
                  Username is required.
                </span>
              </div>
              <div className="relative col-span-2">
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
              <div className="relative col-span-2">
                <div className="form-control">
                  <label className="cursor-pointer flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-success"
                    />
                    <span
                      className="text-black text-sm tooltip tooltip-bottom before:text-xs before:max-w-48"
                      data-tip="Please do not check this box if you are using a public or shared PC"
                    >
                      Remember & Auto Login
                    </span>
                  </label>
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
                  Login
                </button>
              </div>
              <div className="relative col-span-2 lg:col-span-1">
                <Link href="/" className="text-sm hover:text-primary">
                  Forget Your Password?
                </Link>
              </div>
              <div className="relative col-span-2 lg:col-span-1 text-start lg:text-end">
                <p className="text-sm">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="text-primary hover:opacity-80"
                  >
                    Click to sign up
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

export default Login;
