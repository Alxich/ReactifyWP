import { FC } from "react";

import { BlankPageWrapper } from "@/components";

interface ContactsPageProps {}

const ContactsPage: FC<ContactsPageProps> = (props) => {
  return (
    <BlankPageWrapper hasContacts showSlogan={false}>
      {/* CHECK THIS CODE: Unknown !important use */}
      <h2 className="!leading-normal">What ReactifyWP project used to ?</h2>
      <p>
        If you’ve been to New York City and have walked the streets, it is easy
        to figure out how to get from one place to another because of the grid
        system that the city is built on. Just as the predictability of a city
        grid helps locals and tourists get around easily, so do webpage grids
        provide a structure that guides users and designers alike.
      </p>
      <p>
        Because of their consistent reference point, grids improve page
        readability and scannability and allow people to quickly get where they
        need to go.
      </p>
    </BlankPageWrapper>
  );
};

export default ContactsPage;
