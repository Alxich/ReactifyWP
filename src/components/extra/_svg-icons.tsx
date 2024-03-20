import { FC } from "react";

interface SvgIconsProps {
  type:
    | "Discord"
    | "Figma"
    | "Google"
    | "Login_Google"
    | "Login_Facebook"
    | "Login_Apple"
    | "Github"
    | "Explore-Arrow-Down-Right"
    | "Explore-Arrow-Up-Right"
    | "Chevron-Arrow-Down"
    | "Chevron-Arrow-Up"
    | "Bold"
    | "Italic"
    | "Link"
    | "Error"
    | "Checkbox"
    | "User";
}

const SvgIcons: FC<SvgIconsProps> = ({ type }) => {
  switch (type) {
    case "Discord":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.615 6.04997C21.8466 5.23854 19.9502 4.64071 17.9674 4.29831C17.9313 4.2917 17.8953 4.30822 17.8767 4.34125C17.6328 4.77502 17.3626 5.34092 17.1734 5.78572C15.0408 5.46644 12.9192 5.46644 10.8303 5.78572C10.6411 5.33104 10.3611 4.77502 10.1161 4.34125C10.0975 4.30932 10.0615 4.29281 10.0254 4.29831C8.04367 4.63962 6.1473 5.23744 4.37778 6.04997C4.36246 6.05657 4.34933 6.06759 4.34061 6.08189C0.743596 11.4558 -0.241778 16.6975 0.241613 21.8743C0.2438 21.8997 0.258018 21.9239 0.277703 21.9393C2.65091 23.6821 4.94977 24.7402 7.20594 25.4415C7.24205 25.4525 7.28031 25.4393 7.30329 25.4096C7.83699 24.6807 8.31273 23.9123 8.72063 23.1041C8.74471 23.0568 8.72173 23.0006 8.67253 22.9819C7.91792 22.6957 7.19938 22.3466 6.50819 21.9503C6.45352 21.9184 6.44914 21.8402 6.49944 21.8027C6.64489 21.6938 6.79038 21.5804 6.92927 21.4659C6.95439 21.4449 6.98941 21.4405 7.01895 21.4537C11.5597 23.5269 16.4757 23.5269 20.9629 21.4537C20.9924 21.4394 21.0275 21.4438 21.0537 21.4648C21.1926 21.5793 21.3381 21.6938 21.4846 21.8027C21.5349 21.8402 21.5316 21.9184 21.4769 21.9503C20.7858 22.3543 20.0672 22.6957 19.3115 22.9808C19.2623 22.9995 19.2404 23.0568 19.2645 23.1041C19.6812 23.9111 20.1569 24.6796 20.6807 25.4085C20.7026 25.4393 20.742 25.4525 20.7781 25.4415C23.0452 24.7402 25.344 23.6821 27.7173 21.9393C27.738 21.9239 27.7512 21.9008 27.7534 21.8754C28.3319 15.8905 26.7844 10.6917 23.6511 6.08299C23.6434 6.06759 23.6303 6.05657 23.615 6.04997ZM9.39873 18.7222C8.03164 18.7222 6.90519 17.4671 6.90519 15.9257C6.90519 14.3844 8.00979 13.1293 9.39873 13.1293C10.7986 13.1293 11.9141 14.3954 11.8922 15.9257C11.8922 17.4671 10.7876 18.7222 9.39873 18.7222ZM18.6181 18.7222C17.2511 18.7222 16.1246 17.4671 16.1246 15.9257C16.1246 14.3844 17.2292 13.1293 18.6181 13.1293C20.018 13.1293 21.1335 14.3954 21.1117 15.9257C21.1117 17.4671 20.018 18.7222 18.6181 18.7222Z"
            fill="#1A1A1A"
          />
        </svg>
      );

    case "Figma":
      return (
        <svg
          width="20"
          height="28"
          viewBox="0 0 20 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.56713 27.9999C8.14315 27.9999 10.2339 25.9092 10.2339 23.3332V18.6665H5.56713C2.99111 18.6665 0.900391 20.7572 0.900391 23.3332C0.900391 25.9092 2.99111 27.9999 5.56713 27.9999Z"
            fill="#1A1A1A"
          />
          <path
            d="M0.900391 14.0002C0.900391 11.4242 2.99111 9.3335 5.56713 9.3335H10.2339V18.6668H5.56713C2.99111 18.6669 0.900391 16.5762 0.900391 14.0002Z"
            fill="#1A1A1A"
          />
          <path
            d="M0.900391 4.6667C0.900391 2.0907 2.99111 0 5.56713 0H10.2339V9.33329H5.56713C2.99111 9.33329 0.900391 7.2427 0.900391 4.6667Z"
            fill="#1A1A1A"
          />
          <path
            d="M10.2334 0H14.9001C17.4762 0 19.5669 2.0907 19.5669 4.6667C19.5669 7.2427 17.4762 9.33329 14.9001 9.33329H10.2334V0Z"
            fill="#1A1A1A"
          />
          <path
            d="M19.5669 14.0002C19.5669 16.5762 17.4762 18.6669 14.9001 18.6669C12.3241 18.6669 10.2334 16.5762 10.2334 14.0002C10.2334 11.4242 12.3241 9.3335 14.9001 9.3335C17.4762 9.3335 19.5669 11.4242 19.5669 14.0002Z"
            fill="#1A1A1A"
          />
        </svg>
      );

    case "Google":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.44 14.3182C27.44 13.3255 27.3509 12.371 27.1855 11.4546H14V16.87H21.5345C21.21 18.62 20.2236 20.1028 18.7409 21.0955V24.6082H23.2655C25.9127 22.171 27.44 18.5819 27.44 14.3182Z"
            fill="#1A1A1A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.0002 28.0002C17.7802 28.0002 20.9493 26.7465 23.2656 24.6083L18.7411 21.0956C17.4874 21.9356 15.8838 22.432 14.0002 22.432C10.3538 22.432 7.26744 19.9692 6.16653 16.6602H1.48926V20.2874C3.79289 24.8629 8.52744 28.0002 14.0002 28.0002Z"
            fill="#1A1A1A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.16636 16.6602C5.88636 15.8202 5.72727 14.9229 5.72727 14.0002C5.72727 13.0774 5.88636 12.1802 6.16636 11.3402V7.71289H1.48909C0.540909 9.60289 0 11.7411 0 14.0002C0 16.2593 0.540909 18.3974 1.48909 20.2874L6.16636 16.6602Z"
            fill="#1A1A1A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.0002 5.56818C16.0556 5.56818 17.9011 6.27455 19.352 7.66182L23.3674 3.64636C20.9429 1.38727 17.7738 0 14.0002 0C8.52744 0 3.79289 3.13727 1.48926 7.71273L6.16653 11.34C7.26744 8.03091 10.3538 5.56818 14.0002 5.56818Z"
            fill="#1A1A1A"
          />
        </svg>
      );

    case "Login_Google":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3822 3.85413C12.2662 3.85413 11.949 4.34912 11.949 5.44037V7.2415H14.9173L14.6248 10.1592H11.9484V19H8.39625V10.1586H6V7.24094H8.39738V5.49044C8.39738 2.54688 9.5775 1 12.8878 1C13.5982 1 14.4482 1.05625 14.9556 1.12712V3.8665"
            fill="#3C5A99"
          />
        </svg>
      );

    case "Login_Facebook":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1892_1264)">
            <path
              d="M19.174 9.71058C19.174 8.93171 19.1121 8.36334 18.9782 7.77393H10.2725V11.2894H15.3825C15.2796 12.163 14.7232 13.4787 13.4869 14.3628L13.4695 14.4805L16.2221 16.659L16.4128 16.6784C18.1643 15.0259 19.174 12.5945 19.174 9.71058Z"
              fill="#4285F4"
            />
            <path
              d="M10.2726 18.9729C12.7761 18.9729 14.8779 18.1308 16.413 16.6783L13.487 14.3627C12.7041 14.9205 11.6532 15.31 10.2726 15.31C7.82061 15.31 5.73948 13.6575 4.99762 11.3735L4.88888 11.383L2.02669 13.6459L1.98926 13.7522C3.51404 16.8467 6.64606 18.9729 10.2726 18.9729Z"
              fill="#34A853"
            />
            <path
              d="M4.9974 11.3736C4.80165 10.7842 4.68836 10.1526 4.68836 9.50004C4.68836 8.84742 4.80165 8.21592 4.9871 7.62651L4.98191 7.50098L2.08385 5.20166L1.98903 5.24774C1.3606 6.53185 1 7.97386 1 9.50004C1 11.0262 1.3606 12.4682 1.98903 13.7523L4.9974 11.3736Z"
              fill="#FBBC05"
            />
            <path
              d="M10.2726 3.69016C12.0138 3.69016 13.1882 4.45851 13.8579 5.1006L16.4748 2.49029C14.8676 0.964108 12.7761 0.0273438 10.2726 0.0273438C6.64606 0.0273438 3.51404 2.15346 1.98926 5.2479L4.98732 7.62667C5.73949 5.34267 7.82061 3.69016 10.2726 3.69016Z"
              fill="#EB4335"
            />
          </g>
          <defs>
            <clipPath id="clip0_1892_1264">
              <rect
                x="1"
                width="18.1739"
                height="19"
                rx="9.08696"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      );

    case "Login_Apple":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8169 10.534C15.8081 8.90076 16.537 7.668 18.0122 6.76012C17.1868 5.56297 15.9399 4.90432 14.2934 4.77526C12.7348 4.65065 11.0313 5.69648 10.4078 5.69648C9.74925 5.69648 8.23891 4.81976 7.05347 4.81976C4.60357 4.85981 2 6.80018 2 10.7477C2 11.9137 2.21074 13.1182 2.63223 14.3614C3.19422 15.9947 5.22263 20 7.33886 19.9332C8.44527 19.9065 9.22678 19.1366 10.6669 19.1366C12.063 19.1366 12.7875 19.9332 14.0212 19.9332C16.155 19.9021 17.9902 16.2617 18.5259 14.6239C15.6633 13.2577 15.8169 10.6186 15.8169 10.534ZM13.3319 3.22652C14.5305 1.7846 14.4207 0.47174 14.3856 0C13.3275 0.0623053 12.1026 0.729862 11.4045 1.55318C10.6361 2.43436 10.1839 3.5247 10.2805 4.753C11.4264 4.84201 12.4714 4.24566 13.3319 3.22652Z"
            fill="#1A1A1A"
          />
        </svg>
      );

    case "Github":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1701_740)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.9948 0.700195C10.6919 0.701909 7.49733 1.87172 4.9823 4.00045C2.46726 6.12917 0.795754 9.07801 0.266653 12.3197C-0.262448 15.5613 0.385355 18.8844 2.09424 21.6948C3.80313 24.5051 6.46165 26.6194 9.59445 27.6596C10.2856 27.7879 10.5459 27.3595 10.5459 26.9953C10.5459 26.6311 10.5321 25.5751 10.5275 24.4206C6.65708 25.2567 5.83923 22.7873 5.83923 22.7873C5.20798 21.1838 4.29567 20.7623 4.29567 20.7623C3.03317 19.9056 4.39013 19.9216 4.39013 19.9216C5.78855 20.0201 6.52347 21.3487 6.52347 21.3487C7.76292 23.463 9.77875 22.8514 10.5713 22.4941C10.6957 21.5984 11.0574 20.9891 11.4559 20.6432C8.36421 20.295 5.11582 19.1084 5.11582 13.8077C5.09666 12.433 5.60971 11.1035 6.54881 10.0944C6.40597 9.74623 5.92907 8.33973 6.68472 6.42928C6.68472 6.42928 7.85277 6.05818 10.5114 7.84723C12.7918 7.22717 15.1977 7.22717 17.4781 7.84723C20.1344 6.05818 21.3002 6.42928 21.3002 6.42928C22.0581 8.33515 21.5812 9.74165 21.4384 10.0944C22.3805 11.1037 22.8946 12.4354 22.8737 13.8123C22.8737 19.1244 19.6184 20.295 16.522 20.6363C17.0197 21.0669 17.4643 21.9076 17.4643 23.1996C17.4643 25.0505 17.4482 26.5395 17.4482 26.9953C17.4482 27.3641 17.6993 27.7948 18.4043 27.6596C21.5374 26.6193 24.1962 24.5046 25.9051 21.6938C27.6139 18.883 28.2614 15.5594 27.7317 12.3174C27.202 9.07545 25.5296 6.12659 23.0138 3.99822C20.4979 1.86986 17.3026 0.700823 13.9994 0.700195H13.9948Z"
              fill="#1A1A1A"
            />
            <path
              d="M5.35033 20.5629C5.32038 20.6316 5.20979 20.6523 5.11995 20.6041C5.0301 20.556 4.96329 20.4667 4.99554 20.3957C5.0278 20.3247 5.13608 20.3063 5.22593 20.3545C5.31577 20.4026 5.38488 20.4942 5.35033 20.5629Z"
              fill="#1A1A1A"
            />
            <path
              d="M5.91467 21.1883C5.86696 21.2122 5.81237 21.2189 5.76026 21.2072C5.70815 21.1955 5.66175 21.1661 5.629 21.1242C5.53915 21.028 5.52071 20.8951 5.58982 20.8355C5.65894 20.776 5.78335 20.8035 5.8732 20.8997C5.96305 20.9959 5.98378 21.1287 5.91467 21.1883Z"
              fill="#1A1A1A"
            />
            <path
              d="M6.46356 21.9831C6.37832 22.0427 6.23317 21.9831 6.15254 21.864C6.13024 21.8426 6.11251 21.817 6.1004 21.7887C6.08828 21.7603 6.08203 21.7299 6.08203 21.6991C6.08203 21.6683 6.08828 21.6378 6.1004 21.6095C6.11251 21.5811 6.13024 21.5555 6.15254 21.5341C6.23778 21.4769 6.38293 21.5341 6.46356 21.651C6.54419 21.7678 6.5465 21.9236 6.46356 21.9831Z"
              fill="#1A1A1A"
            />
            <path
              d="M7.20758 22.7527C7.13156 22.8375 6.97721 22.8146 6.8505 22.7C6.72379 22.5855 6.69383 22.4297 6.76985 22.3473C6.84588 22.2648 7.00024 22.2877 7.13155 22.3999C7.26287 22.5122 7.28822 22.6703 7.20758 22.7527Z"
              fill="#1A1A1A"
            />
            <path
              d="M8.25138 23.2021C8.21683 23.3098 8.06016 23.3579 7.9035 23.312C7.74685 23.2662 7.64317 23.1379 7.67312 23.028C7.70307 22.918 7.86204 22.8676 8.021 22.918C8.17996 22.9684 8.28133 23.0898 8.25138 23.2021Z"
              fill="#1A1A1A"
            />
            <path
              d="M9.38965 23.2798C9.38965 23.392 9.26064 23.4882 9.09477 23.4905C8.92889 23.4928 8.79297 23.4012 8.79297 23.2889C8.79297 23.1767 8.92198 23.0805 9.08785 23.0782C9.25373 23.0759 9.38965 23.1652 9.38965 23.2798Z"
              fill="#1A1A1A"
            />
            <path
              d="M10.4489 23.1035C10.4696 23.2157 10.3545 23.3325 10.1886 23.36C10.0227 23.3875 9.87756 23.3211 9.85683 23.2111C9.83609 23.1012 9.95589 22.982 10.1172 22.9523C10.2784 22.9225 10.4282 22.9912 10.4489 23.1035Z"
              fill="#1A1A1A"
            />
          </g>
          <defs>
            <clipPath id="clip0_1701_740">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case "Explore-Arrow-Down-Right":
      return (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.5" width="24" height="24" rx="2" className="fill-black" />
          <path
            d="M7 17.5L17 7.5M17 7.5H7M17 7.5V17.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "Explore-Arrow-Up-Right":
      return (
        <svg
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 21L17 11M17 11H7M17 11V21"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "Chevron-Arrow-Down":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2045 17.8815L2.09466 8.77158C1.6553 8.33222 1.6553 7.61991 2.09466 7.1806L3.15717 6.11808C3.59578 5.67947 4.30664 5.67863 4.74628 6.11621L12 13.3359L19.2537 6.11621C19.6933 5.67863 20.4042 5.67947 20.8428 6.11808L21.9053 7.1806C22.3447 7.61996 22.3447 8.33227 21.9053 8.77158L12.7955 17.8815C12.3562 18.3208 11.6438 18.3208 11.2045 17.8815Z"
            fill="#1A1A1A"
          />
        </svg>
      );

    case "Chevron-Arrow-Up":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7955 6.11854L21.9053 15.2284C22.3447 15.6677 22.3447 16.38 21.9053 16.8194L20.8428 17.8819C20.4042 18.3205 19.6933 18.3213 19.2537 17.8837L12 10.6641L4.74628 17.8838C4.30664 18.3214 3.59578 18.3205 3.15717 17.8819L2.09466 16.8194C1.6553 16.38 1.6553 15.6677 2.09466 15.2284L11.2045 6.11859C11.6438 5.67923 12.3561 5.67923 12.7955 6.11854Z"
            fill="#1A1A1A"
          />
        </svg>
      );

    case "Bold":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 3.33334H11.6667C12.5507 3.33334 13.3986 3.68453 14.0237 4.30965C14.6488 4.93478 15 5.78262 15 6.66668C15 7.55073 14.6488 8.39858 14.0237 9.0237C13.3986 9.64882 12.5507 10 11.6667 10H5V3.33334Z"
            stroke="#667085"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 10H12.5C13.3841 10 14.2319 10.3512 14.857 10.9763C15.4821 11.6014 15.8333 12.4493 15.8333 13.3333C15.8333 14.2174 15.4821 15.0652 14.857 15.6904C14.2319 16.3155 13.3841 16.6667 12.5 16.6667H5V10Z"
            stroke="#667085"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "Italic":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.833 3.33334H8.33301"
            stroke="#667085"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.667 16.6667H4.16699"
            stroke="#667085"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 3.33334L7.5 16.6667"
            stroke="#667085"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "Link":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.50033 14.1667H5.83366C4.72859 14.1667 3.66878 13.7277 2.88738 12.9463C2.10598 12.1649 1.66699 11.1051 1.66699 10C1.66699 8.89494 2.10598 7.83513 2.88738 7.05373C3.66878 6.27233 4.72859 5.83334 5.83366 5.83334H7.50033"
            stroke="#667085"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 5.83334H14.1667C15.2717 5.83334 16.3315 6.27233 17.1129 7.05373C17.8943 7.83513 18.3333 8.89494 18.3333 10C18.3333 11.1051 17.8943 12.1649 17.1129 12.9463C16.3315 13.7277 15.2717 14.1667 14.1667 14.1667H12.5"
            stroke="#667085"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66699 10H13.3337"
            stroke="#667085"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "Error":
      return (
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
      );

    case "Checkbox":
      return (
        <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      );

    case "User":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 128 160"
          x="0px"
          y="0px"
        >
          <title>solid</title>
          <path d="M66,88.44a2,2,0,0,0,1.75-.17A12.33,12.33,0,0,1,70.55,87a10.76,10.76,0,0,0,5.87,2,7.23,7.23,0,0,0,2.33-.38,2,2,0,0,0,.75-.46A6,6,0,0,1,81.2,87a2,2,0,0,0,.51.09,6.26,6.26,0,0,0,6.21-4.69,2,2,0,0,0-.26-1.69L83.13,74a2,2,0,1,0-3.31,2.25l3.92,5.78a2.15,2.15,0,0,1-1.62,1c-2-.53-4,1-5,1.84-2.11.44-4.42-1.36-4.45-1.39-1.26-1-3.3-.76-6.07.77-.39-.23-.57-.45-.59-.59-.12-.8,1.36-2.63,2.76-3.72a2,2,0,0,0,.77-1.78l-.34-3.42a2,2,0,1,0-4,.39l.23,2.38a14.71,14.71,0,0,0-1.81,2c-1.73,1.43-5.4,4.91-4.49,8a2.06,2.06,0,0,0,2,1.48,1.93,1.93,0,0,0,.54-.08A2,2,0,0,0,63,86.54s0-.05,0-.07A6.86,6.86,0,0,0,66,88.44Z" />
          <path d="M61.38,92A2,2,0,0,0,59,93.63s-.69,3.31-3,4.64a2,2,0,0,0,2,3.48c4-2.25,4.94-7.16,5-7.36A2,2,0,0,0,61.38,92Z" />
          <path d="M92.61,93.1A5.65,5.65,0,0,1,92,90.85a2,2,0,0,0-4,.3c.06.85.53,5.14,3.56,5.81a2,2,0,0,0,1-3.86Z" />
          <path d="M79.66,95a10.91,10.91,0,0,0-3.33.53,15,15,0,0,0-3.1-.34,10,10,0,0,0-9,4.88,2,2,0,0,0,.08,2c2.77,4.44,9.67,4.9,10.44,4.93l1.06,0c8.33,0,11.77-5.5,11.91-5.73A2,2,0,0,0,87.58,99,9.77,9.77,0,0,0,79.66,95Zm-3.86,8a15.3,15.3,0,0,1-3-.32,12.69,12.69,0,0,1-2.42-.77,17.58,17.58,0,0,1-1.74-1,6.54,6.54,0,0,1,4.64-1.72,11.41,11.41,0,0,1,2.75.37,2,2,0,0,0,1.29-.11A6.71,6.71,0,0,1,79.66,99a5.59,5.59,0,0,1,3.65,1.31,22.54,22.54,0,0,1-2.19,1.51A11.72,11.72,0,0,1,75.8,103Z" />
          <path d="M70.7,114.48a2,2,0,0,0,2.59,3c.41-.34,4-3.2,7.33-.08a2,2,0,1,0,2.76-2.9C78.61,110,73,112.52,70.7,114.48Z" />
          <path d="M51.48,52.94l3.68,1a24.3,24.3,0,0,0,5.87.72,15.34,15.34,0,0,0,1.66-.09l4.45,5.7a3.56,3.56,0,0,1,.72,3.22l-1.56,2.45a2,2,0,0,0,3.38,2.14l1.56-2.45c1.32-2.08.91-5.44-.95-7.82l-3.16-4a2,2,0,0,0-1.39-3.63l-3.32.44a19.16,19.16,0,0,1-6.21-.5l-3.68-1a2,2,0,1,0-1,3.86Z" />
          <path d="M58.73,63.09l3.42,1.61a2,2,0,0,0,1.7-3.62l-4-1.88A2,2,0,0,0,58.63,59l-6.94,1.29a2,2,0,0,0-1,.47l-3.06,2.71a2,2,0,0,0,2.65,3L53,64.16Z" />
          <path d="M61.64,66.87a2,2,0,0,0-2.71-.81,10.52,10.52,0,0,1-5.15,1.27,2,2,0,0,0-.32,4s.23,0,.55,0a14.76,14.76,0,0,0,6.81-1.75A2,2,0,0,0,61.64,66.87Z" />
          <path d="M92.79,68.76a5.16,5.16,0,0,1-2.8-.49,2,2,0,0,0-2,3.46,8.91,8.91,0,0,0,4.27,1.06,9.22,9.22,0,0,0,1,0,2,2,0,0,0-.42-4Z" />
          <path d="M42.73,57.46a7.81,7.81,0,0,0-2.45,8.12A2,2,0,0,0,42.2,67a2,2,0,0,0,.57-.08,2,2,0,0,0,1.34-2.49,3.87,3.87,0,0,1,1.16-3.88,2,2,0,1,0-2.54-3.09Z" />
          <path d="M79.86,68.22A2,2,0,0,0,83,65.79l-1.81-2.37a3.17,3.17,0,0,1,.45-3.12l2.14-3a12.42,12.42,0,0,1,10,2.08,2,2,0,0,0,2.35-3.24,16.79,16.79,0,0,0-2.52-1.51A2,2,0,0,0,92,51.08l-7,2a13.94,13.94,0,0,0-3,.58,2,2,0,0,0-1,.73L78.43,58c-1.75,2.46-1.91,5.84-.38,7.86Z" />
          <path d="M96.3,62.68a2,2,0,0,0-1.2-.77l-4-.86a2,2,0,0,0-1.33.18l-3.67,1.89a2,2,0,1,0,1.83,3.56l3-1.56,2.59.55,1.86,2.53a2,2,0,1,0,3.22-2.37Z" />
          <circle cx="69" cy="12.01" r="2" />
          <path d="M116.37,111.33a2.1,2.1,0,0,0-.58-.06c-4.72.22-11.8-1.68-15.33-2.66a62.54,62.54,0,0,0,5.81-18.53c1-4.78,1.68-9.17,2.14-13.21l0,0c12.12-26,1.06-46.87-.29-49.25C101.81,8.91,78.28,1.73,77.29,1.43,62.5-3,48.52,4.28,47.93,4.59a1.87,1.87,0,0,0-.28.18,32.73,32.73,0,0,1-10.73,5.1c-5.76.16-9.75,5.54-10.29,6.31C1,47.81,16.59,87.81,18.73,92.87c-.15,2.47,1.06,5.89,3.62,10.17a6,6,0,0,0,3.84,2.84,5.48,5.48,0,0,0,1.17.13,6,6,0,0,0,3.42-1.11,2,2,0,0,0,.33-.29l2.55-2.74c8,23,30.37,25.49,32.19,25.65a38.37,38.37,0,0,0,5.94.48,28.8,28.8,0,0,0,17.79-5.8,36.2,36.2,0,0,0,8.86-10l8.3,8a8.06,8.06,0,0,1,2.27,3.57V126a2,2,0,0,0,4,0v-2.25c0-2-1.76-4.79-3.5-6.46l-3.25-3.12a42.42,42.42,0,0,0,9.4,1.1c1.53.46,9.05,3.09,8.3,10.52a2,2,0,0,0,1.79,2.19h.2a2,2,0,0,0,2-1.8C128.86,117,120.77,112.43,116.37,111.33ZM87.15,119c-5.7,4.29-12.68,5.82-20.75,4.55l-.19,0c-.27,0-26.63-2-30.85-31.57a2,2,0,1,0-4,.56c.24,1.71.57,3.32.94,4.87l-4,4.3A1.79,1.79,0,0,1,27,102a2,2,0,0,1-1.26-1c-3.2-5.34-3.13-7.53-3-8.08a2,2,0,0,0-.15-1.18c-.19-.41-18.54-41.38,7.2-73.08l.1-.14s3.25-4.63,7.29-4.63a2,2,0,0,0,.45-.05c.06,0,.42-.1,1-.26a11.29,11.29,0,0,0-1.46,4.74C36.93,22.47,33.76,27,31.08,27h0A2,2,0,0,0,31,31h.12c5.3,0,9.76-6.68,10.07-12.5a10.36,10.36,0,0,1,3.09-6.14,14.83,14.83,0,0,1,2.59-2.24,29.79,29.79,0,0,1,3.1-2.07c1.41-.7,13.73-6.54,26.21-2.79.23.07,22.7,7,28.26,23.77a2,2,0,0,0,.18.39A51,51,0,0,1,108.86,63c-.46-6.4-2-11.19-4.77-14.28a9.54,9.54,0,0,0-6.51-3.46l-12.3-6.77a2,2,0,0,0-3,2l.31,2.72L72.57,37.78a2,2,0,0,0-.78-.61c-5-2.15-7.9-4.85-8.61-8-1-4.49,2.67-8.77,2.72-8.83a2,2,0,0,0-3-2.65c-.21.24-5.08,5.83-3.63,12.33.81,3.61,3.35,6.68,7.58,9.15l-1.43,2.42c-3.85-2.23-10-5.76-11.33-6.49a3.65,3.65,0,0,0-3.27-1c-1.8.35-3.29,2.08-4.41,3.93l-1.21-2.64a2,2,0,0,0-2.45-1.07,2,2,0,0,0-1.33,2.3c.15,1.53-3.84,7.75-8.55,13.33a2.09,2.09,0,0,0-.2.27c-4,6.76-3.86,15.09-3.5,21.22a5.47,5.47,0,0,0-.61-.23c-1.92-.56-5.45.22-6.42,2.66a2,2,0,0,0,3.69,1.55A2.66,2.66,0,0,1,27.43,75a5.25,5.25,0,0,1,2.1,6.52,1,1,0,0,1-.52-.33,2,2,0,0,0-1.84-1.09,2,2,0,0,0-1.77,1.2,8.21,8.21,0,0,0,1,7.89,2,2,0,0,0,3.18-2.43A3.73,3.73,0,0,1,29,85.5l.21,0a3.72,3.72,0,0,0,3.34-1.28,8,8,0,0,0,1.05-7.44c-.06-.18-.13-.36-.19-.54a2,2,0,0,0,.07-.6c0-.8-.09-1.7-.16-2.67-.37-5.68-.94-14.25,2.75-20.63a70.58,70.58,0,0,0,7.65-10.73l.88,1.9a2,2,0,0,0,1.89,1.16,2,2,0,0,0,1.8-1.29c.89-2.35,2.35-4.78,3.18-5.33a2,2,0,0,0,.46.35c.1.05,9.63,5.46,13.23,7.6a2,2,0,0,0,2.74-.7l2.48-4.21,13.79,7.35a2,2,0,0,0,2.93-2l-.31-2.66L96.09,49a2.29,2.29,0,0,0,1.08.25c.09,0,2.1,0,4,2.26,2.67,3.16,6.37,12.29,1.12,37.88,0,.05,0,.11,0,.16S99.71,109.56,87.15,119Z" />
          <path d="M26.45,113.75a24,24,0,0,0,4.62-2.06,2,2,0,0,0-2.13-3.38c-.06,0-6.44,3.92-17.15,3.43a2.19,2.19,0,0,0-.58.06C7,112.86-.83,117.25.07,126.2a2,2,0,0,0,2,1.8h.2a2,2,0,0,0,1.79-2.19c-.71-7.08,6.4-9.61,7.88-10.05a41.88,41.88,0,0,0,10.15-.81l4.73,5a8.73,8.73,0,0,1,2.2,3.79V126a2,2,0,0,0,4,0v-2.25c0-2-1.65-4.8-3.29-6.53Z" />
        </svg>
      );

    default:
      // Return frog icon in case of extra scenario
      return (
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1717_3121)">
            <path
              d="M22.5887 6.58236C22.2552 4.77402 20.6764 3.40173 18.7713 3.40173C16.8643 3.40173 15.2849 4.77694 14.9534 6.58771C7.04385 7.33729 0.85809 14.0048 0.882396 22.116C0.887743 23.8135 2.29601 25.1795 3.99351 25.1795H18.7713C19.201 25.1795 19.5491 24.8315 19.5491 24.4017C19.5491 23.5428 18.8525 22.8462 17.9935 22.8462H14.1294L15.8697 20.4968C17.0432 18.7356 16.3728 16.2054 14.231 15.3149C13.0697 14.8321 11.7251 15.0888 10.7193 15.8437L9.12684 17.0391C8.78365 17.2972 8.29608 17.2292 8.03746 16.884C7.77983 16.5399 7.84885 16.0523 8.19253 15.7946L9.88323 14.5264C11.6741 13.1818 14.1746 13.1837 15.9659 14.5264C16.4943 14.9226 18.1957 16.4251 17.9493 19.0574L23.7111 25.1795H28.1046C28.5343 25.1795 28.8824 24.8315 28.8824 24.4017C28.8824 23.5428 28.1858 22.8462 27.3268 22.8462H24.7198L19.9307 17.7576L27.4382 13.5454C27.8762 13.2997 28.241 12.9417 28.4948 12.5083C28.7486 12.0749 28.8824 11.5817 28.8824 11.0794C28.8824 10.0391 28.3127 9.08875 27.4007 8.58903C25.4291 7.50889 22.5887 6.58236 22.5887 6.58236ZM18.7713 8.45729C18.1267 8.45729 17.6046 7.93472 17.6046 7.29062C17.6046 6.64604 18.1267 6.12396 18.7713 6.12396C19.4154 6.12396 19.9379 6.64604 19.9379 7.29062C19.9379 7.93472 19.4154 8.45729 18.7713 8.45729Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1717_3121">
              <rect
                width="28"
                height="28"
                fill="white"
                transform="translate(0.882385 0.290649)"
              />
            </clipPath>
          </defs>
        </svg>
      );
  }
};

export default SvgIcons;
