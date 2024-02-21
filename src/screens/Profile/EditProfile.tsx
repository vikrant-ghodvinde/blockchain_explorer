import { FC } from "react";
import Image from "next/image";

const EditProfile: FC = () => {
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 gap-2 border-b border-gray-100 pb-8">
        <div className="relative py-4 text-gray-300">
          YOUR USER LOGIN SETTINGS
        </div>
        <div className="relative py-4">
          <div className="grid grid-cols-2">
            <div className="relative">
              <label className="block mb-1.5 md:mb-0 font-bold">Username</label>
            </div>
            <div className="relative">
              <p>vicky2707</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2">
            <div className="relative col-span-2 md:col-span-1">
              <label className="block mb-1.5 md:mb-0">Email address</label>
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <input
                type="email"
                placeholder="Email address"
                className="w-full h-11 bg-transparent px-4 rounded-md outline-none border"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2">
            <div className="relative col-span-2 md:col-span-1">
              <label className="block mb-1.5 md:mb-0">Enter OLD password</label>
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <input
                type="password"
                placeholder="Password"
                autoComplete="false"
                className="w-full h-11 bg-transparent px-4 rounded-md outline-none border"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2">
            <div className="relative col-span-2 md:col-span-1">
              <label className="block mb-1.5 md:mb-0">Enter NEW password</label>
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <input
                type="password"
                placeholder="New Password"
                autoComplete="false"
                className="w-full h-11 bg-transparent px-4 rounded-md outline-none border"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2">
            <div className="relative col-span-2 md:col-span-1">
              <label className="block mb-1.5 md:mb-0">
                Re-Confirm password
              </label>
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <input
                type="password"
                placeholder="Confirm Password"
                autoComplete="false"
                className="w-full h-11 bg-transparent px-4 rounded-md outline-none border"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 border-b border-gray-100 pb-8">
        <div className="relative py-4 text-gray-300">
          YOUR USER LOGIN SETTINGS
        </div>
        <div className="relative">
          <div className="grid grid-cols-2">
            <div className="relative col-span-2 md:col-span-1">
              <label className="block mb-1.5 md:mb-0">
                Public Profile Name
              </label>
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <input
                type="text"
                placeholder="Public Profile Name"
                className="w-full h-11 bg-transparent px-4 rounded-md outline-none border"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2">
            <div className="relative col-span-2 md:col-span-1">
              <label className="block mb-1.5 md:mb-0">
                Public Profile Name
              </label>
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="relative w-12 min-w-12 h-12 bg-dark rounded-full overflow-hidden">
                  <Image
                    src="/images/user.png"
                    alt=""
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="relative py-1.5 px-4 bg-primary-gradient text-black text-xs font-medium rounded-md overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary-gradient-reversed before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:-z-10">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2">
            <div className="relative col-span-2 md:col-span-1">
              <label className="block mb-1.5 md:mb-0">Public Profile Bio</label>
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <input
                type="text"
                placeholder="Public Profile Bio"
                className="w-full h-11 bg-transparent px-4 rounded-md outline-none border"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2">
            <div className="relative col-span-2 md:col-span-1">
              <label className="block mb-1.5 md:mb-0">Profile Website</label>
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <input
                type="text"
                placeholder="https://yourwebsite.com"
                className="w-full h-11 bg-transparent px-4 rounded-md outline-none border"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 border-b border-gray-100 pb-8">
        <div className="relative py-4 text-gray-300">
          MONTHLY NEWSLETTER SUBSCRIPTION AND GIVEAWAYS
        </div>
        <div className="relative">
          <div className="grid grid-cols-2">
            <div className="relative col-span-2 md:col-span-1">
              <label className="block mb-1.5 md:mb-0">Newsletter</label>
            </div>
            <div className="relative col-span-2 md:col-span-1">
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
                    (click to Subscribe for Newsletter)
                  </span>
                </label>
              </div>
              <div className="relative mt-8">
                <div className="relative py-4 text-gray-300">
                  Please let us know why you unsubscribed:
                </div>
                <div className="grid grid-cols-1">
                  <div className="relative">
                    <div className="form-control">
                      <label className="cursor-pointer flex items-center gap-x-2">
                        <input
                          type="radio"
                          name="unsubscribed_reason"
                          className="radio radio-accent"
                        />
                        <span className="text-black">
                          I no longer want to receive these emails
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="cursor-pointer flex items-center gap-x-2">
                        <input
                          type="radio"
                          name="unsubscribed_reason"
                          className="radio radio-accent"
                        />
                        <span className="text-black">
                          I never signed up for this mailing list
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="cursor-pointer flex items-center gap-x-2">
                        <input
                          type="radio"
                          name="unsubscribed_reason"
                          className="radio radio-accent"
                        />
                        <span className="text-black">
                          The emails are inappropriate
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="cursor-pointer flex items-center gap-x-2">
                        <input
                          type="radio"
                          name="unsubscribed_reason"
                          className="radio radio-accent"
                        />
                        <span className="text-black">
                          The emails are spam and should be reported
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="cursor-pointer flex items-center gap-x-2">
                        <input
                          type="radio"
                          name="unsubscribed_reason"
                          className="radio radio-accent"
                        />
                        <span className="text-black">Other</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 pt-8">
        <div className="relative">
          <div className="grid grid-cols-2">
            <div className="relative col-span-2 md:col-span-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <button className="relative py-1.5 px-4 bg-primary-gradient text-black text-xs font-medium rounded-md overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary-gradient-reversed before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:-z-10">
                  Save Changes
                </button>
                <button type="button" className="btn-grey">
                  Cancel
                </button>
              </div>
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <div className="text-center md:text-end">
                <button type="button" className="btn-danger">
                  <i className="far fa-trash-can me-1"></i> Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
