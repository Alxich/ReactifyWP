"use client";

import { FC, useEffect } from "react";
import { SvgIcons } from "../../index";

interface ProjectMainMessageProps {}

const ProjectMainMessage: FC<ProjectMainMessageProps> = (props) => {
  // useEffect(() => {
  //   document.body.style.cursor = " progress";
  // }, []);

  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center backdrop-blur-sm">
      <div className="flex w-full max-w-2xl flex-col items-center justify-center rounded-lg border-2 border-gray bg-white p-7xl  shadow-2xl">
        <div className="error-svg">
          <SvgIcons type="Error" />
        </div>
        <h1 className="mb-sm text-center text-3xl font-bold ">
          We’ll be back soon!
        </h1>
        <p className="mb-md text-center ">
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
