import { FC } from "react";

import LoginPage from "../login/page";

interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = (type) => {
  return <LoginPage type="register" />;
};

export default RegisterPage;
