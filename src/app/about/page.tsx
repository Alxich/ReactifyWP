import { Breadcrumbs, Container } from "@/components";
import Image from "next/image";
import * as React from "react";

import pageContentBanner from "../../../public/images/post-recent-4.png";

interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <Container
      classNames="flex flex-col justify-center items-start post py-7xl px-3xl"
      width="md"
    >
      <Breadcrumbs />
      <Container width="md" classNames="space-x-3xl flex flex-row pt-7xl">
        <div className="content w-full space-y-xl">
          <div className="page-content-text flex w-full flex-col items-center justify-center space-y-sm">
            <h2>What ReactifyWP project used to ?</h2>
            <p>
              If you’ve been to New York City and have walked the streets, it is
              easy to figure out how to get from one place to another because of
              the grid system that the city is built on. Just as the
              predictability of a city grid helps locals and tourists get around
              easily, so do webpage grids provide a structure that guides users
              and designers alike. Because of their consistent reference point,
              grids improve page readability and scannability and allow people
              to quickly get where they need to go.
            </p>
            <div className="image w-full space-y-sm px-3xl">
              <div className="title px-11xl text-center font-bold">
                <h5>
                  Definition: A grid is made up of columns, gutters, and margins
                  that provide a structure for the layout of elements on a page.
                </h5>
              </div>
              <Image
                src={pageContentBanner}
                alt="image-post-regular"
                className="overflow-hidden rounded-md"
              />
              <div className="text-additional px-11xl text-center">
                <p>
                  Definition: A grid is made up of columns, gutters, and margins
                  that provide a structure for the layout of elements on a page.
                </p>
              </div>
            </div>
            <p>
              There are three common grid types used in websites and interfaces:
              column grid, modular grid, and hierarchical grid.
            </p>
            <p>
              Column grid involves dividing a page into vertical columns. UI
              elements and content are then aligned to these columns.
            </p>
            <p>
              Modular grid extends the column grid further by adding rows to it.
              This intersection of columns and rows make up modules to which
              elements and content are aligned. Modular grids are great for
              ecommerce and listing pages, as rows are repeatable to accommodate
              browsing.
            </p>
            <p>
              Hierarchical grid: Content is organized by importance using
              columns, rows, and modules. The most important elements and pieces
              of content take up the biggest pieces of the grid.
            </p>
            <h4>Breaking Down the Grid</h4>
            <p>
              Regardless of the type of grid you are using, the grid is made up
              of three elements: columns, gutters, and margins.
            </p>
            <p>
              <b>Columns:</b> Columns take up most of the real estate in a grid.
              Elements and content are placed in columns. To adapt to any screen
              size, column widths are generally defined with percentages rather
              than fixed values and the number of columns will vary. For
              example, a grid on a mobile device might have 4 columns and a grid
              on a desktop might have 12 columns.
            </p>
          </div>
        </div>
        <div className="theme-slogan">
          <p className="writing-sd-rl text-7xl font-bold text-black">
            Have you heard about Reactify
            <span className="mt-xs rounded-sm bg-black px-xs py-sm text-white">
              WP
            </span>
          </p>
        </div>
      </Container>
    </Container>
  );
};

export default AboutPage;
