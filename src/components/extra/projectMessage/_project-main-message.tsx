import * as React from "react";

interface ProjectMainMessageProps {}

const ProjectMainMessage: React.FunctionComponent<ProjectMainMessageProps> = (
  props,
) => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center backdrop-blur-sm">
      <div className="flex max-w-2xl flex-col items-center justify-center rounded-lg border-2 border-gray bg-white p-7xl  shadow-2xl">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-[15vh] w-[15vh] text-highlight"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
        <h1 className="mb-sm text-center text-3xl font-bold text-black">
          We’ll be back soon!
        </h1>
        <p className="mb-md text-center text-gray">
          We are creating something amazing for you!
          <br />
          We will launch website soon.
          <br />
        </p>
        <p className="text-center text-gray">
          Sorry for the inconvenience. We’re performing some maintenance at the
          moment. we’ll be back up shortly!
        </p>
      </div>
    </div>
  );
};

export default ProjectMainMessage;
