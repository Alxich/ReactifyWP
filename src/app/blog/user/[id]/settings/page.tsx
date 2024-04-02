import { FC } from "react";

import { Breadcrumbs, Button, Container } from "@/components";

interface UserSettingsPageProps {}

const UserSettingsPage: FC<UserSettingsPageProps> = (props) => {
  return (
    <Container
      classNames="flex flex-col justify-center items-start post py-7xl px-3xl space-y-7xl"
      width="md"
    >
      <Breadcrumbs />
      <div className="flex w-full flex-row items-start justify-between text-2xl font-semibold leading-normal ">
        <h4 className="text-inherit">Explore all categories</h4>
      </div>
      <form className="settings-form flex w-full flex-col items-center justify-center gap-y-7xl">
        <div className="form-inputs-container flex w-full items-start justify-center gap-x-xs">
          <div className="container flex w-1/2 flex-col items-start justify-start space-y-lg">
            <h5 className="inline-block w-full border-b-2 border-b-black pb-xxs text-normal font-medium ">
              Details
            </h5>
            <div className="inputs flex w-full flex-col items-start justify-start space-y-sm">
              <input
                id="user-mail"
                name="user-mail"
                type="email"
                className="block w-full border-0 border-b border-b-gray bg-white py-sm pl-0 pr-md text-normal placeholder:text-gray focus:outline-none"
                placeholder="Email"
              />
              <input
                id="user-phone"
                name="user-phone"
                type="tel"
                className="block w-full border-0 border-b border-b-gray bg-white py-sm pl-0 pr-md text-normal placeholder:text-gray focus:outline-none"
                placeholder="Phone"
              />
              <input
                id="user-region"
                name="user-region"
                type="text"
                className="block w-full border-0 border-b border-b-gray bg-white py-sm pl-0 pr-md text-normal placeholder:text-gray focus:outline-none"
                placeholder="Region"
              />
              <input
                id="user-city"
                name="user-city"
                type="text"
                className="block w-full border-0 border-b border-b-gray bg-white py-sm pl-0 pr-md text-normal placeholder:text-gray focus:outline-none"
                placeholder="City"
              />
            </div>
          </div>
          <div className="container flex w-1/2 flex-col items-start justify-start space-y-lg">
            <h5 className="inline-block w-full border-b-2 border-b-black pb-xxs text-normal font-medium ">
              Passwords
            </h5>
            <div className="inputs flex w-full flex-col items-start justify-start space-y-sm">
              <input
                id="user-pass"
                name="user-pass"
                type="password"
                className="block w-full border-0 border-b border-b-gray bg-white py-sm pl-0 pr-md text-normal placeholder:text-gray focus:outline-none"
                placeholder="Enter your old password"
              />
              <input
                id="user-new-pass"
                name="user-new-pass"
                type="password"
                className="block w-full border-0 border-b border-b-gray bg-white py-sm pl-0 pr-md text-normal placeholder:text-gray focus:outline-none"
                placeholder="Enter your new password"
              />
            </div>
          </div>
        </div>
        <div className="form-actions flex w-full items-center justify-end space-x-lg">
          <Button type="submit" formType="form__error">
            Delete my account
          </Button>
          <Button type="submit" formType="form">
            Save new details
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default UserSettingsPage;
