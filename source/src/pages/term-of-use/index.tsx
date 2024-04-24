import { FC } from "react";

import { BlankPageWrapper } from "@/components";

interface TermOfUseProps {}

const TermOfUsePage: FC<TermOfUseProps> = (props) => {
  return (
    <BlankPageWrapper>
           <h2>Privacy Policy for ReactifyWP project</h2>
      <p>Effective Date: 06/10/2023</p>
      <h4>Introduction</h4>
      <p>
        Welcome to ReactifyWP {'("we," "our," or "us")'}. At ReactifyWP, we are
        committed to protecting your privacy and handling your personal
        information with care. This Privacy Policy explains how we collect, use,
        disclose, and protect your personal information when you use our website
        and services.
      </p>
      <p>
        By accessing or using ReactifyWP, you agree to the terms and practices
        described in this Privacy Policy. If you do not agree with these terms,
        please do not use our services.
      </p>
      <h4>Information We Collect</h4>
      <ol>
        <li>
          Information You Provide: We may collect personal information that you
          voluntarily provide to us, such as your name, email address, and any
          other information you provide when you contact us, subscribe to our
          newsletter, or interact with our website.
        </li>
        <li>
          Automatically Collected Information: When you use our website, we may
          automatically collect certain information, including your IP address,
          browser type, operating system, and the pages you visit. We may also
          use cookies and similar technologies to collect data for analytical
          and marketing purposes.
        </li>
      </ol>
      <h4>How We Use Your Information</h4>
      <p>We use the information we collect for the following purposes:</p>
      <ol>
        <li>
          To Provide Services: We use your personal information to provide you
          with our blog content, newsletters, and other requested services.
        </li>
        <li>
          To Improve Our Website: We analyze user behavior to improve our
          website{"'"}s content, functionality, and user experience.
        </li>
        <li>
          To Communicate with You: We may use your contact information to
          respond to your inquiries, send updates, and inform you about changes
          to our services.
        </li>
      </ol>
      <h4>Information Sharing and Disclosure</h4>
      <p>
        We do not sell, trade, or rent your personal information to third
        parties. However, we may share your information under the following
        circumstances:
      </p>
      <ol>
        <li>
          Service Providers: We may share your information with trusted
          third-party service providers who assist us in delivering our services
          and maintaining our website.
        </li>
        <li>
          Legal Compliance: We may disclose your information if required by law
          or to protect our rights, privacy, safety, or property, or that of
          others.
        </li>
      </ol>
      <h4>Your Choices and Rights</h4>
      <p>You have the right to:</p>
      <ol>
        <li>
          Access and Update: You can access and update your personal information
          by contacting us.
        </li>
        <li>
          Opt-Out: You can opt-out of receiving promotional emails from us by
          following the unsubscribe instructions provided in the email.
        </li>
      </ol>
      <h4>Security</h4>
      <p>
        We take reasonable measures to protect your personal information from
        unauthorized access and disclosure. However, no method of data
        transmission or storage is entirely secure, so we cannot guarantee
        absolute security.
      </p>
      <h4>Changes to this Privacy Policy</h4>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or for legal reasons. We will notify you of any
        material changes by posting the updated Privacy Policy on our website.
      </p>
      <h4>Contact Us</h4>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at [Insert Contact Information].
      </p>
      <p>
        Please replace {'"Effective Date: 06/10/2023"'} and
        {'" Discrord / Github /Gmail"'} with the relevant information for your
        project. Additionally, it{"'"}s crucial to keep your privacy policy
        up-to-date and in compliance with applicable laws and regulations.
        Consult with legal professionals to ensure full compliance with privacy
        laws in your jurisdiction.
      </p>
    </BlankPageWrapper>
  );
};

export default TermOfUsePage;
