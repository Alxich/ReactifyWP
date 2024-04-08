import { FC } from "react";

import { Breadcrumbs, Button, Container } from "@/components";

interface UserSettingsPageProps {}

const UserSettingsPage: FC<UserSettingsPageProps> = (props) => {
  return (
    <Container
      classNames="flex-dcol flex-tcenter post wrapper-conspace space-y-7xl"
      width="md"
    >
      <Breadcrumbs />
      <div className="flex-tspace f2xl-semibold flex-drow w-full leading-normal">
        <h4 className="text-inherit">Explore all categories</h4>
      </div>
      <form className="settings-form flex-dcol flex-ccenter w-full gap-y-7xl">
        <div className="form-inputs-container flex-tcenter flex w-full gap-x-xs tablet:flex-col tablet:gap-x-0 tablet:gap-y-7xl">
          <div className="container flex w-1/2 flex-col items-start justify-start space-y-lg tablet:w-full">
            <h5 className="inline-block w-full border-b-2 border-b-black pb-xxs text-normal font-medium">
              Details
            </h5>
            <div className="inputs flex-dcol w-full items-start justify-start space-y-sm">
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
          <div className="container flex w-1/2 flex-col items-start justify-start space-y-lg tablet:w-full">
            <h5 className="inline-block w-full border-b-2 border-b-black pb-xxs text-normal font-medium">
              Passwords
            </h5>
            <div className="inputs flex-dcol w-full items-start justify-start space-y-sm">
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
        <div className="form-actions flex-cend flex w-full space-x-lg tablet:justify-between">
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
