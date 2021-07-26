import styled from "styled-components";
import ArrowLink from "../components/atoms/ArrowLink/ArrowLink";
import SEOHead from "../components/atoms/SEOHead/SEOHead";
import SectionTitle from "../components/atoms/Typography/Headings/SectionTitle/SectionTitle";
import Layout from "../components/composed/Layout/Layout";
import PageIntro from "../components/composed/PageIntro/PageIntro";
import classNames from "classnames";
import { APP_IMAGES } from "../utils/images";

const { about: ABOUT_IMAGES } = APP_IMAGES.pages;

interface ImageBackgroundProps {
  src: string;
  className?: string;
  alt: string;
}

const StyledMainSection = styled.main`
  height: 677px;
`;

const StyledFigure = styled.figure`
  min-height: 725px;
  height: 725px;

  @media screen and (max-width: 800px) {
    min-height: auto;
    height: auto;
  }
`;

const ImageBackground: React.FC<ImageBackgroundProps> = ({ className, src, alt }) => {
  return (
    <StyledFigure className={classNames("relative w-full bg-neutral-200", className)}>
      <img className="object-cover" alt={alt} src={src} />
    </StyledFigure>
  );
};

const AboutUsPage = () => {
  return (
    <>
      <SEOHead
        title="About Us"
        description=" Open Source Community Africa (OSCA) is for open source lovers, enthusiasts, advocates and experts within and across Africa with the sole aim of increasing the rate of credible contributions by African software developers, designers, writers and everyone involved in the sphere of technology to open source projects both locally and globally, changing the perception of Africans from just the billion users to the NEXT BILLION CREATORS."
        ogImage={ABOUT_IMAGES.banner.src}
      />
      <Layout>
        <StyledMainSection className="flex flex-col items-center bg-secondary w-full relative justify-end px-10 lg:px-32 pb-80">
          <img
            className="object-cover z-10 absolute top-0 h-full w-full left-0"
            alt={ABOUT_IMAGES.banner.alt}
            src={ABOUT_IMAGES.banner.src}
          />

          <div className="relative z-50 w-full max-w-1440">
            <PageIntro
              fontSize="40"
              heading="The Next Billion Creators"
              subHeading="A community of creative minds driving the Open Source movement in Africa."
            />
          </div>
        </StyledMainSection>

        <section className="w-full max-w-1440 ">
          <article className="w-full">
            <ImageBackground src={ABOUT_IMAGES.bg1.src} alt={ABOUT_IMAGES.bg1.alt} className="lg:w-full" />
            <div className="bg-white relative py-36 px-10 lg:px-20 w-screen lg:w-3/5 lg:-mt-40 z-30">
              <SectionTitle fontSize="32">Who we are</SectionTitle>
              <p className="pt-12">
                Open Source Community Africa (OSCA) is for open source lovers, enthusiasts, advocates and experts within
                and across Africa with the sole aim of increasing the rate of credible contributions by African software
                developers, designers, writers and everyone involved in the sphere of technology to open source projects
                both locally and globally, changing the perception of Africans from just the billion users to the
                <br />
                <br />
                <b>NEXT BILLION CREATORS.</b>
              </p>
            </div>
          </article>
          <article className="lg:flex lg:items-end lg:mt-16">
            <ImageBackground src={ABOUT_IMAGES.bg2.src} alt={ABOUT_IMAGES.bg2.alt} className="lg:w-3/5" />
            <div className="bg-white relative py-20 w-screen lg:w-1/2 px-10 lg:px-20 lg:-ml-40 lg:-mb-40 z-30">
              <SectionTitle fontSize="32">Mission</SectionTitle>
              <p className="pt-12">
                We are a diverse community of open source lovers, collaborating on different projects to make a
                difference across Africa.
                <br />
                <br />
                We currently achieve this through the following vehicles;
                <br />
                <br />
                OSCA Chapters, Open Source Festival and through featured open source projects.
                <br />
                <br />
                Our main goal is to create an atmosphere in which Africans not only use software and hardware but are
                also creators of these technologies.
              </p>
            </div>
          </article>
          <article className="lg:flex lg:items-end lg:mt-64">
            <ImageBackground
              src={ABOUT_IMAGES.bg3.src}
              alt={ABOUT_IMAGES.bg3.alt}
              className="lg:w-3/5 lg:hidden block"
            />

            <div className="bg-white relative py-20 lg:w-1/2 px-10 lg:px-20 lg:-mr-40 lg:-mb-40 z-30">
              <SectionTitle fontSize="32">Our Vision</SectionTitle>
              <p className="pt-12">
                In due time, we hope technological skills would be at the grassroots of Africa.
                <br />
                <br />
                Take African developers from the billion users to the billion creators; We hope to do this with our
                monthly OSCA meetups across different chapters.
                <br />
                <br />
                We hope to work with numerous organizations that promote open source culture to reach their targeted
                audience and contributors. We will be creating the enabling environment that will allow thinkers and
                creators to develop open source technologies that will impact people. We are a diverse community of open
                source lovers, collaborating on different projects to make a difference across Africa.
              </p>
            </div>
            <ImageBackground
              src={ABOUT_IMAGES.bg4.src}
              alt={ABOUT_IMAGES.bg4.alt}
              className="hidden lg:block lg:w-3/5"
            />
          </article>
        </section>
        <article className="lg:flex w-screen lg:mt-64 lg:-mx-32">
          <img src={ABOUT_IMAGES.bg1.src} alt={ABOUT_IMAGES.bg1.alt} className="lg:w-1/2 h-auto lg:h-full" />

          <div className="min-h-full flex flex-col items-start justify-center px-10 lg:px-24 py-20 w-full lg:w-1/2 bg-blue-theme">
            <SectionTitle fontSize="32" color="white">
              Our Community
            </SectionTitle>
            <p className="mt-12 mb-16 text-white">
              Our community is a safe enabling environment on zulip chat, consisting of diverse people all working
              together to grow a collaborative system.
              <br />
              <br />
              Currently we have smaller communities of people in a particular city called chapters; OSCA Lagos, OSCA
              Port-Harcourt, OSCA Imo and OSCA Lokoja. Each of this chapters have successfully hosted a physical meetup.
            </p>

            <ArrowLink href="/community">Check out our community</ArrowLink>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default AboutUsPage;
