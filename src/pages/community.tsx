import classNames from "classnames";
import Link from "next/link";
import styled from "styled-components";
import SEOHead from "../components/atoms/SEOHead/SEOHead";
import SectionTitle from "../components/atoms/Typography/Headings/SectionTitle/SectionTitle";
import Layout from "../components/composed/Layout/Layout";
import PageIntro from "../components/composed/PageIntro/PageIntro";
import { APP_IMAGES } from "../utils/images";

const { community: COMMUNITY_IMAGES } = APP_IMAGES.pages;

interface ImageBackgroundProps {
  src: string;
  className?: string;
  alt: string;
}

const StyledMainSection = styled.main`
  height: 677px;
`;

const StyledFigure = styled.figure`
  height: 725px;
`;

const ImageBackground: React.FC<ImageBackgroundProps> = ({ className, src, alt }) => {
  return (
    <StyledFigure className={classNames("relative w-full bg-neutral-200", className)}>
      <img className="object-cover" alt={alt} src={src} />
    </StyledFigure>
  );
};

const CommunityPage = () => {
  return (
    <>
      <SEOHead
        title="Communtiy"
        description="As a community, we intend to help integrate the art of open source contribution into African developer ecosystem whilst strongly advocating for the adoption of free and open source technologies."
        ogImage={COMMUNITY_IMAGES.banner.src}
      />

      <Layout>
        <StyledMainSection className="flex w-full items-center flex-col bg-secondary relative justify-end px-10 lg:px-32 pb-80">
          <img
            className="object-cover z-10 absolute top-0 h-full w-full left-0"
            alt={COMMUNITY_IMAGES.banner.alt}
            src={COMMUNITY_IMAGES.banner.src}
          />

          <div className="relative z-50 w-full max-w-1440">
            <PageIntro
              fontSize="40"
              heading="Our Community"
              subHeading="Our community is spread across Africa hosted in various locations called chapters."
            />
          </div>
        </StyledMainSection>

        <section className="w-full max-w-1440">
          <article className="lg:flex lg:flex-wrap">
            <ImageBackground src={COMMUNITY_IMAGES.bg2.src} alt={COMMUNITY_IMAGES.bg2.alt} className="lg:w-1/2" />
            <div className="lg:w-1/2 lg:mt-56 lg:pl-10">
              <ImageBackground src={COMMUNITY_IMAGES.bg3.src} alt={COMMUNITY_IMAGES.bg3.alt} />
            </div>

            <div className="bg-white relative py-36 px-10 lg:px-20 w-full lg:w-3/5 lg:-mt-80 z-30">
              <SectionTitle fontSize="32">What is a chapter?</SectionTitle>
              <p className="pt-12 text-body">
                Open Source Community Africa chapter is a community closer to home.
                <br />
                <br />
                It typically consists of a group of people coming together to organize and facilitate meetups, creating
                an environment of support in possible areas of challenge while following the <a href="https://docs.oscafrica.org/about/community-code-of-conduct" target="_blank" rel="noopener noreferrer">OSCA Code of Conduct</a>.
                <br />
                <br />
                <Link href="/about-us">
                  <a className="bg-white inline-flex items-center font-medium hover:bg-primary hover:text-black text-primary rounded-primary duration-200 transition-all py-4 px-8">
                    Host an event
                  </a>
                </Link>
              </p>
            </div>
          </article>
          <article className="mt-28">
            <div className="px-10 lg:px-0">
              <SectionTitle fontSize="32">Our Chapters</SectionTitle>
              <h3 className="mt-16">Click on the location pointer for more details.</h3>
            </div>
            <div className="overflow-hidden mt-12">
              <div className="-mt-20">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1tddIRnXi3KGc_YkDjPITrR2EQFKX9y2g&z=4"
                  width="100%"
                  height="780"
                />
              </div>
            </div>
          </article>
        </section>
        <section className="py-28 lg:mt-40 w-screen bg-primary bg-opacity-10 lg:-mx-32 flex flex-col items-center">
          <p className="font-lato text-gray-700 text-body text-center px-10 lg:px-0 lg:w-1/3 leading-10 mb-12">
            As a community, we intend to help integrate the art of open source contribution into African developer
            ecosystem whilst strongly advocating for the adoption of free and open source technologies.
          </p>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://discord.gg/pRJgjH9SwR"
            className=" text-primary duration-200 text-body py-4 px-7 rounded-lg hover:text-black hover:bg-primary leading-10"
          >
            Join our community
          </a>
        </section>
      </Layout>
    </>
  );
};

export default CommunityPage;
