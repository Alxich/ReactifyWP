import { FC } from "react";
import { SvgIcons } from "../../index";

interface ProjectMainMessageProps {}

const ProjectMainMessage: FC<ProjectMainMessageProps> = (props) => {
  return (
    <div className="flex-ccenter flex-drow h-screen fixed left-0 top-0 w-full backdrop-blur-sm">
      <div className="flex-ccenter flex-dcol flex-drow w-full max-w-2xl rounded-lg border-2 border-gray bg-white p-7xl shadow-2xl">
        <div className="error-svg">
          <SvgIcons type="Error" />
        </div>
        <h1 className="f3xl-bold mb-sm text-center">We’ll be back soon!</h1>
        <p className="mb-md text-center">
          We are creating something amazing for you!
          <br />
          We will launch website soon.
          <br />
        </p>
        <p className="max-w-[410px] text-center text-gray">
          Sorry for the inconvenience. We’re performing some maintenance at the
          moment. we’ll be back up shortly!
        </p>
      </div>
    </div>
  );
};

export default ProjectMainMessage;
