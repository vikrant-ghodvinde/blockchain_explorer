import { FC } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const DeleteProfile: FC = () => {
  const handleCaptchaChange = (value: any) => {
    console.log(value);
  };
  return (
    <dialog id="delete_profile" className="modal">
      <div className="modal-box bg-white">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Confirmation Required</h3>
        <p className="pt-4 text-dark">
          <strong>
            Are you sure you want to permanently delete your user account?
          </strong>
        </p>
        <p className="text-dark">
          Deleting your user account will also delete all the watchlists,
          transaction notes, private tags and verified addresses ownership.
          Recovery of the above is not possible upon delete confirmation.
        </p>
        <div className="grid grid-cols-1 py-10">
          <div className="relative flex items-center justify-center">
            <ReCAPTCHA
              sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
              onChange={handleCaptchaChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button type="button" className="btn-grey">
            Cancel
          </button>
          <button className="relative py-1.5 px-4 bg-primary-gradient text-black text-xs font-medium rounded-md overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary-gradient-reversed before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:-z-10">
            Confirm Delete
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteProfile;
