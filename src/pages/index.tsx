import Link from "next/link";
import styled from "styled-components";
import ArrowLink from "../components/atoms/ArrowLink/ArrowLink";
import SEOHead from "../components/atoms/SEOHead/SEOHead";
import SectionTitle from "../components/atoms/Typography/Headings/SectionTitle/SectionTitle";
import NavBar from "../components/composed/Navbar/NavBar";

interface SectionWithBackgroundProps {
  background: "bg-1" | "bg-2" | "bg-3";
}

const SectionWithBackground = styled.article`
  background: ${({ background }: SectionWithBackgroundProps) =>
    `url("/images/backgrounds/home-page/${background}.png")`};
  background-size: cover;
`;

const IndexPage = () => {
  return (
    <>
      <SEOHead />
      <div className="bg-black lg:min-h-screen lg:max-h-screen overflow-hidden flex flex-col">
        <NavBar tune="light" />

        <main className="flex flex-col lg:flex-row min-h-screen lg:-mt-28 flex-grow">
          <SectionWithBackground background="bg-1" className="w-full h-full lg:h-auto lg:w-2/3">
            <div className="min-h-full bg-secondary pt-96 lg:pt-0 hover:bg-opacity-80 bg-opacity-50 w-full px-10 lg:pl-32 flex flex-col justify-end items-start pb-48 lg:pb-72">
              <SectionTitle color="white" fontSize="40" className="pt-16 lg:pt-0">
                The Next Billion Creators
              </SectionTitle>
              <p className="text-white font-medium lg:w-1/2 text-paragraph-2 mb-16 mt-8">
                A community of creative minds driving the Open Source movement in Africa.
              </p>
              <Link href="/about-us">
                <a className="bg-white hidden lg:inline-block font-medium hover:bg-primary rounded-primary duration-200 transition-all py-6 px-10">
                  Who we are
                </a>
              </Link>
            </div>
          </SectionWithBackground>

          <section className="w-full h-screen lg:h-auto lg:w-1/3 flex flex-col">
            <SectionWithBackground background="bg-2" className="flex-grow">
              <div className="flex flex-col bg-blue-500 bg-opacity-30 hover:bg-opacity-80 h-full justify-end px-16 pb-16">
                <SectionTitle color="white" fontSize="28">
                  Community
                </SectionTitle>
                <p className="text-white font-medium text-body mt-6 mb-20">
                  Our community is spread across Africa hosted in various locations called chapters.
                </p>
                <ArrowLink href="/community">Check out our community</ArrowLink>
              </div>
            </SectionWithBackground>

            <div className="flex-grow relative bg-primary flex items-end">
              <img
                src="/images/backgrounds/home-page/bg-2.png"
                className=" w-full hover:opacity-20 absolute top-0 left-0"
              />
              <div className="flex z-40 relative flex-col justify-end px-16 pb-16">
                <SectionTitle color="white" fontSize="28">
                  Team
                </SectionTitle>
                <p className="text-white font-medium text-body mt-6 mb-16">The brains behind the awesomeness.</p>
                <ArrowLink href="/team">Check out our team profiles</ArrowLink>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default IndexPage;
