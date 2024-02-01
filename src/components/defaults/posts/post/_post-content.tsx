import { FC } from "react";
import Image from "next/image";

import { Container, PostPreview } from "@/components";
import { PostPreviewBlockProps } from "@/lib/types";

import postContentBanner from "../../../../../public/images/post-recent-4.png";
import postContentImage from "../../../../../public/images/post-regular.png";
import postContentImage2 from "../../../../../public/images/post-regular-2.png";
import postContentImage3 from "../../../../../public/images/post-regular-3.png";
import postContentImage4 from "../../../../../public/images/post-regular-4.png";
import postContentImage5 from "../../../../../public/images/post-regular-5.png";
import postContentImage6 from "../../../../../public/images/post-regular-6.png";
import postContentImage7 from "../../../../../public/images/post-regular-7.png";
import postContentImage8 from "../../../../../public/images/post-regular-8.png";

interface PostContentProps {
  postsData: Array<PostPreviewBlockProps>;
}

const PostContent: FC<PostContentProps> = ({ postsData }: PostContentProps) => {
  return (
    <Container width="md" classNames="space-x-3xl flex flex-row pt-7xl">
      <div className="content post-content-text w-71/100 space-y-sm">
        <div className="banner mb-7xl h-auto w-full overflow-hidden">
          <Image src={postContentBanner} alt="post-content-banner-meet" />
        </div>
        <p>
          A grid system is a design tool used to arrange content on a webpage.
          It is a series of vertical and horizontal lines that create a matrix
          of intersecting points, which can be used to align and organize page
          elements. Grid systems are used to create a consistent look and feel
          across a website, and can help to make the layout more visually
          appealing and easier to navigate.
        </p>
        <p>
          If you’ve been to New York City and have walked the streets, it is
          easy to figure out how to get from one place to another because of the
          grid system that the city is built on. Just as the predictability of a
          city grid helps locals and tourists get around easily, so do webpage
          grids provide a structure that guides users and designers alike.
          Because of their consistent reference point, grids improve page
          readability and scannability and allow people to quickly get where
          they need to go.
        </p>
        <div className="image w-full space-y-sm px-3xl">
          <div className="title px-11xl text-center font-bold">
            <h5>
              Definition: A grid is made up of columns, gutters, and margins
              that provide a structure for the layout of elements on a page.
            </h5>
          </div>
          <Image src={postContentImage} alt="image-post-regular" />
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
          Hierarchical grid: Content is organized by importance using columns,
          rows, and modules. The most important elements and pieces of content
          take up the biggest pieces of the grid.
        </p>
        <h4>Breaking Down the Grid</h4>
        <p>
          <b>Example 1: Hierarchical Grid</b>
        </p>
        <p>
          Our first example is from The New York Times. This screen utilizes a
          hierarchical grid to create a newspaper-like reading experience. At
          desktop screen size, two main columns make up the hierarchical grid.
          The most important news story takes up the most space in the grid, the
          left column, followed by secondary and tertiary stories, which take up
          the smaller column and modules on the right.
        </p>
        <div className="image w-full space-y-sm px-3xl">
          <Image src={postContentImage2} alt="image-post-regular-2" />
          <div className="text-additional px-11xl text-center">
            <p>
              The New York Times uses a hierarchical grid to achieve its
              newspaper-like reading experience. {"("}We highlighted the columns
              in yellow, the gutters in blue, and the margins in purple.{")"}
            </p>
          </div>
        </div>
        <h4>Example 2: Column Grid</h4>
        <p>
          Our second example is from Ritual.com, a vitamin company. This design
          uses a column grid to create an attractive visual experience. At this
          screen size, four consistently sized columns make up the grid
          structure and elements are aligned to and within these columns. The
          gutters, the spaces in between the columns, are also consistently
          sized and help the user visually separate the different products. The
          margins are independently sized and are the same between the left and
          right sides.
        </p>
        <div className="image w-full space-y-sm px-3xl">
          <Image src={postContentImage3} alt="image-post-regular-3" />
          <div className="text-additional px-11xl text-center">
            <p>
              Ritual’s four-column grid makes scanning products easy. {"("}We
              highlighted the columns in yellow, the gutters in blue, and the
              margins in purple.{")"}
            </p>
          </div>
        </div>
        <h4>Example 3: Modular Grid</h4>
        <p>
          Our third example is from Behance, a design library. The site’s design
          uses a modular grid to create a pleasant browsing experience. At
          desktop size, rows are made up of 4 consistently sized modules.
          Horizontal gutters are slightly thicker than vertical gutters and the
          margins are consistently sized on the left and right of the design.
          Like in previous example, the gutters visually separate each element.
        </p>
        <div className="image w-full space-y-sm px-3xl">
          <Image src={postContentImage4} alt="image-post-regular-4" />
          <div className="text-additional px-11xl text-center">
            <p>
              Behance’s design uses a modular grid, which allows users to easily
              browse. "("We highlighted the columns in yellow, the gutters in
              blue, and the margins in purple.")"
            </p>
          </div>
        </div>
        <h4>Example 4: Breaking the Grid</h4>
        <p>
          Our last example is Shrine from Google’s Material Studies. This design
          uses a column grid, as we can see based on the left navigation, which
          is 2 columns wide. Look closely and you will see that some product
          images settle to the margins, while others do not. Breaking the grid
          like this makes it challenging to focus or quickly scan product images
          and calls more attention to some products over others. It is okay to
          break the grid every so often, as long as you have a valid reason for
          it.
        </p>
        <div className="image w-full space-y-sm px-3xl">
          <Image src={postContentImage5} alt="image-post-regular-5" />
          <div className="text-additional px-11xl text-center">
            <p>
              Breaking the grid produces a chaotic browsing experience for
              users. "("We highlighted the columns in yellow, the gutters in
              blue, and the margins in purple.")"
            </p>
          </div>
        </div>
        <h4>Benefits of the Grid</h4>
        <p>Using a grid benefits both end users and the designers alike:</p>
        <ul>
          <li>Designers can quickly put together well-aligned interfaces.</li>
          <li>Users can easily scan predictable grid-based interfaces. </li>
          <li>
            A good grid is easy to adapt to various screen sizes and
            orientations. In fact, grid layouts are an essential component of
            responsive web design. Responsive design uses breakpoints to
            determine the screen size threshold at which the layout should
            change. For example, a desktop screen may have 12 grid columns,
            which may be stacked on mobile so that the resulting layout has only
            4 columns.
          </li>
        </ul>
        <div className="image w-full space-y-sm px-3xl">
          <Image src={postContentImage6} alt="image-post-regular-6" />
          <div className="text-additional px-11xl text-center">
            <p>
              At the mobile size, Behance’s one-column grid {"("}left{")"} was
              reflowed into a four-column grid structure {"("}right{")"}.
            </p>
          </div>
        </div>
        <p>
          Even more importantly, the grid is not a throw-away concept. It is
          used by both designers and developers alike. Be sure to communicate
          with your developers the grid structure used when creating the design,
          so they can implement it accordingly.
        </p>
        <h4>Choosing and Setting Up Your Grid</h4>
        <p>
          How you use and set up a grid is fundamental to creating well thought
          out layouts and experiences for your user.
        </p>
        <p>
          <b>Choose the right grid for your needs</b>. Take time to think
          through what type of grid ­— column, modular, or hierarchical — best
          suits your needs. A hierarchical grid may be the best fit if one item
          on your page will always be more important than the surrounding
          elements. For example, hierarchical grids are great for online news
          platforms. If the content you need to display is highly variable,
          consider using a basic column or modular grid, as these provide lots
          of flexibility when designing. For example, elements and content can
          span across multiple columns or modules or just one to fit design
          needs.
        </p>
        <p>
          <b>Spend time setting up your grid</b>. Once you have figured out what
          type of grid will work well for your needs, start setting it up.
          Determine the number of columns and the margin and gutter sizes
          relative to your screen sizes. You will most likely want to prepare
          for mobile, tablet, and desktop screens. A 12-column grid at laptop or
          desktop size is generally flexible enough for most design needs. The
          number of columns will decrease as your device size decreases.
          Wireframing tools like Sketch and Figma have quick and easy ways to
          set up and edit your grid, even after you have started designing.
        </p>
        <div className="image w-full space-y-sm px-3xl">
          <Image src={postContentImage7} alt="image-post-regular-7" />
          <div className="text-additional px-11xl text-center">
            <p>
              Easily set the number of columns, the gutter size, and margin size
              in Figma.
            </p>
          </div>
        </div>
        <p>
          <b>Always place content within columns, not gutters.</b> The gutters
          should remain empty as you place elements on the grid in order to
          clearly separate and align content and elements.
        </p>
        <div className="image w-full space-y-sm px-3xl">
          <Image src={postContentImage8} alt="image-post-regular-8" />
          <div className="text-additional px-11xl text-center">
            <p>
              Content or elements should be placed within and across columns,
              not gutters.
            </p>
          </div>
        </div>
        <p>
          <b>Consider using an 8px grid system.</b> For most common devices, the
          screen size in pixels is a multiple of 8. Keeping grid-component
          values at a multiple of 8 will generally make it easier to scale and
          implement a grid.
        </p>
        <h4>Conclusion</h4>
        <p>
          Grids not only provide designers a structure on which to base layouts,
          but they also improve readability and scannability for end users. Use
          a good grid system that easily adapts to various screen sizes.
        </p>
      </div>
      <div className="sidebar w-29/100 space-y-xl">
        {postsData.map(
          ({ view, author, date, image, title, texts, tags }, key) => (
            <PostPreview
              view={view}
              author={author}
              date={date}
              image={image}
              title={title}
              texts={texts}
              tags={tags}
              type="regular"
              key={`post_${title}__${key}`}
            />
          ),
        )}
      </div>
    </Container>
  );
};

export default PostContent;
