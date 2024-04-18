import { FC } from "react";

import { Breadcrumbs, Button, Container } from "@/components";

interface UserSettingsPageProps {}

const UserSettingsPage: FC<UserSettingsPageProps> = (props) => {
  return (
    <Container
      classNames="flex-dcol flex-tcenter wrapper-conspace space-y-7xl tablet:pb-0 tablet:space-y-4xl"
      width="md"
    >
      <Breadcrumbs />
      <form className="settings-form flex-dcol flex-ccenter w-full gap-y-4xl">
        <div className="flex-tspace f2xl-semibold flex-drow w-full leading-normal">
          <h4 className="text-inherit">Explore all categories</h4>
        </div>
        <div className="form-inputs-container flex-tcenter tablet:flex-dcol flex-drow w-full gap-x-xs tablet:gap-x-0 tablet:gap-y-7xl">
          <div className="flex-tstart flex-dcol container w-1/2 space-y-lg tablet:w-full">
            <h5 className="fnormal-medium inline-block w-full border-b-2 border-b-black pb-xxs">
              Details
            </h5>
            <div className="inputs flex-dcol flex-tstart w-full space-y-sm">
              <input
                id="user-mail"
                name="user-mail"
                type="email"
                className="inputs-bborder-style block w-full"
                placeholder="Email"
              />
              <input
                id="user-phone"
                name="user-phone"
                type="tel"
                className="inputs-bborder-style block w-full"
                placeholder="Phone"
              />
              <input
                id="user-region"
                name="user-region"
                type="text"
                className="inputs-bborder-style block w-full"
                placeholder="Region"
              />
              <input
                id="user-city"
                name="user-city"
                type="text"
                className="inputs-bborder-style block w-full"
                placeholder="City"
              />
            </div>
          </div>
          <div className="flex-tstart flex-dcol container w-1/2 space-y-lg tablet:w-full">
            <h5 className="fnormal-medium inline-block w-full border-b-2 border-b-black pb-xxs">
              Passwords
            </h5>
            <div className="inputs flex-dcol flex-tstart w-full space-y-sm">
              <input
                id="user-pass"
                name="user-pass"
                type="password"
                className="inputs-bborder-style block w-full"
                placeholder="Enter your old password"
              />
              <input
                id="user-new-pass"
                name="user-new-pass"
                type="password"
                className="inputs-bborder-style block w-full"
                placeholder="Enter your new password"
              />
            </div>
          </div>
        </div>
        <div className="form-actions flex-cend flex-drow w-full space-x-lg tablet:justify-between">
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
