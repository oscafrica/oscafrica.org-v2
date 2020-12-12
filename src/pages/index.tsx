import Link from "next/link";
import styled from "styled-components";
import ArrowLink from "../components/atoms/ArrowLink/ArrowLink";
import SectionTitle from "../components/atoms/Typography/Headings/SectionTitle/SectionTitle";
import NavBar from "../components/composed/Navbar/NavBar";

interface SectionWithBackgroundProps {
  background: "bg-1" | "bg-2" | "bg-3";
}

const IndexPage = () => {
  const SectionWithBackground = styled.article`
    background: ${({ background }: SectionWithBackgroundProps) =>
      `url("/images/backgrounds/home-page/${background}.png")`};
    background-size: cover;
  `;

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <NavBar tune="light" />

      <main className="flex min-h-screen -mt-28 flex-grow">
        <SectionWithBackground background="bg-1" className="w-2/3">
          <div className="min-h-full bg-secondary hover:bg-opacity-80 bg-opacity-50 w-full pl-32 flex flex-col justify-end items-start pb-72">
            <h2 color="white" className="text-h3 font-bold tracking-widest text-white">
              The Next Billion Creators
            </h2>
            <p className="text-white text-paragraph-2 mb-16 mt-8">
              A community of creative minds driving the Open Source
              <br /> movement in Africa.
            </p>
            <Link href="#">
              <a className="bg-white font-medium hover:bg-primary rounded-primary duration-200 transition-all py-6 px-10">
                Who we are
              </a>
            </Link>
          </div>
        </SectionWithBackground>

        <section className="w-1/3 flex flex-col">
          <SectionWithBackground background="bg-2" className="flex-grow">
            <div className="flex flex-col bg-blue-500 bg-opacity-30 hover:bg-opacity-80 h-full justify-end px-16 pb-16">
              <SectionTitle color="white">Community</SectionTitle>
              <p className="text-white text-body mt-6 mb-20">
                Our community is spread across Africa hosted in various locations called chapters.
              </p>
              <ArrowLink href="#">Check out our community</ArrowLink>
            </div>
          </SectionWithBackground>

          <SectionWithBackground background="bg-2" className="flex-grow">
            <div className="flex flex-col bg-primary bg-opacity-30 hover:bg-opacity-60 h-full justify-end px-16 pb-16">
              <SectionTitle color="white">Team</SectionTitle>
              <p className="text-white text-body mt-6 mb-16">The brains behind the awesomeness.</p>
              <ArrowLink href="#">Check out our team profiles</ArrowLink>
            </div>
          </SectionWithBackground>
        </section>
      </main>
    </div>
  );
};

export default IndexPage;
