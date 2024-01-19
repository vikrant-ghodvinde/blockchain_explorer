import { Container } from "@/components/Container/Container";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs: NextPage = () => {
  const [values, setValues] = useState({
    subject: "0",
    customSubject: "",
    name: "",
    email: "",
    message: "",
  });
  const handleCaptchaChange = (value: any) => {
    console.log(value);
  };
  return (
    <div className="relative py-12">
      <Container>
        <div className="relative mb-12">
          <h2 className="text-2xl">Contact Us</h2>
          <div className="text-sm breadcrumbs text-gray-500">
            <ul>
              <li>
                <Link href="/" className="hover:text-primary decoration-none">
                  Home
                </Link>
              </li>
              <li>Add Document</li>
            </ul>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-3 gap-4">
            <div className="relative col-span-3 md:col-span-2">
              <div className="relative bg-white rounded-md">
                <div className="p-4 border-b border-gray-100">
                  Feedback Form
                </div>
                <div className="relative p-4">
                  <form className="grid grid-cols-2 gap-5">
                    <div className="relative col-span-2">
                      <label className="block mb-1.5">
                        Subject <span className="text-xs">*</span>
                      </label>
                      <select
                        value={values.subject}
                        className="w-full h-11 px-4 rounded-md outline-none border"
                        onChange={(e) =>
                          setValues({ ...values, subject: e.target.value })
                        }
                      >
                        <option value="0">
                          Please Select Your Message Subject
                        </option>
                        <option value="1">
                          1. General Inquiry (Non support related)
                        </option>
                        <option value="2">2. Support / Technical Issue</option>
                        <option value="3">
                          3. Name Tagging / Label Address
                        </option>
                        <option value="4">
                          4. Update Token Info (for Contract Owners)
                        </option>
                        <option value="5">5. API Support</option>
                        <option value="6">Other</option>
                      </select>
                    </div>
                    {values.subject === "6" && (
                      <div className="relative col-span-2">
                        <label className="block mb-1.5">
                          Enter Subject <span className="text-xs">*</span>
                        </label>
                        <input
                          type="text"
                          value={values.customSubject}
                          className="w-full h-11 bg-white px-4 rounded-md outline-none border"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              customSubject: e.target.value,
                            })
                          }
                        />
                        <span className="text-xs font-light text-primary">
                          Subject is required.
                        </span>
                      </div>
                    )}
                    <div className="relative col-span-2 lg:col-span-1">
                      <label className="block mb-1.5">
                        Name <span className="text-xs">*</span>
                      </label>
                      <input
                        type="text"
                        value={values.name}
                        className="w-full h-11 bg-white px-4 rounded-md outline-none border"
                        onChange={(e) =>
                          setValues({ ...values, name: e.target.value })
                        }
                      />
                      <span className="text-xs font-light text-primary">
                        Name is required.
                      </span>
                    </div>
                    <div className="relative col-span-2 lg:col-span-1">
                      <label className="block mb-1.5">
                        Email <span className="text-xs">*</span>
                      </label>
                      <input
                        type="email"
                        value={values.email}
                        className="w-full h-11 bg-white px-4 rounded-md outline-none border"
                        onChange={(e) =>
                          setValues({ ...values, email: e.target.value })
                        }
                      />
                      <span className="text-xs font-light text-primary">
                        Email is required.
                      </span>
                    </div>
                    <div className="relative col-span-2">
                      <label className="block mb-1.5">
                        Email <span className="text-xs">*</span>
                      </label>
                      <textarea
                        value={values.message}
                        className="w-full h-48 bg-white py-3 px-4 rounded-md outline-none border"
                        onChange={(e) =>
                          setValues({ ...values, message: e.target.value })
                        }
                      />
                      <span className="text-xs font-light text-primary">
                        Message is required.
                      </span>
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
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="relative col-span-3 md:col-span-1">
              <div className="relative bg-white rounded-md">
                <div className="p-4 border-b border-gray-100">
                  Helpful Links
                </div>
                <div className="relative p-4">
                  <ul className="flex flex-col gap-y-7">
                    <li>
                      <div>Wallets:</div>
                      <ul className="text-primary text-sm ms-2">
                        <li>
                          <Link
                            href="https://metamask.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:opacity-80"
                          >
                            <i className="fas fa-arrow-up-right-from-square text-xs me-1"></i>
                            Metamask (Browser web3)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div>Others:</div>
                      <ul className="text-primary text-sm ms-2">
                        <li>
                          <Link
                            href="https://erience.co/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:opacity-80"
                          >
                            <i className="fas fa-arrow-up-right-from-square text-xs me-1"></i>
                            What is Erience?
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
