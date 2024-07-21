import React from "react";
import Link from "next/link";
import ArrowLink from "../components/atoms/ArrowLink/ArrowLink";
import SEOHead from "../components/atoms/SEOHead/SEOHead";
import SectionTitle from "../components/atoms/Typography/Headings/SectionTitle/SectionTitle";
import NavBar from "../components/composed/Navbar/NavBar";
import { APP_IMAGES } from "../utils/images";

const { home: HOME_IMAGES } = APP_IMAGES.pages;

const IndexPage = () => {
  return (
    <>
      <SEOHead />
      <div className="bg-black lg:min-h-screen lg:max-h-screen overflow-hidden flex flex-col">
        <NavBar tune="light" />

        <div className="flex flex-col lg:flex-row min-h-screen -mt-28 flex-grow">
          <main className="w-full  h-full lg:h-auto lg:w-2/3">
            <div className="min-h-full bg-secondary relative duration-20 pt-96 lg:pt-0 w-full px-10 lg:pl-32 flex flex-col justify-end items-start pb-48 lg:pb-72">
              <img
                className="z-10 object-cover absolute top-0 left-0 hover:opacity-20 duration-200 w-full"
                alt={HOME_IMAGES.bg1.alt}
                src={HOME_IMAGES.bg1.src}
              />

              <div className=" z-20">
                <SectionTitle color="white" fontSize="40" className="pt-16 lg:pt-0">
                  The Next Billion Creators
                </SectionTitle>
                <p className="text-white font-medium text-paragraph-2 mb-16 mt-8">
                  A community of creative minds driving the Open Source movement in Africa.
                </p>
                <div className="flex gap-8">
                  <Link href="/about-us" passHref>
                    <button className="bg-primary lg:bg-white text-base lg:inline-block font-medium focus:bg-white lg:hover:bg-primary rounded-primary duration-200 transition-all py-6 px-10">
                      Who We Are
                    </button>
                  </Link>
                  <Link href="https://oscafrica.org/discord" passHref>
                    <button className="bg-primary lg:bg-white text-base lg:inline-block font-medium focus:bg-white lg:hover:bg-primary rounded-primary duration-200 transition-all py-6 px-10">
                      <div className="inline-flex items-center">
                        Join our Community <img className="w-8 ml-4" alt="Discord Logo" src="./images/discord.svg" />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </main>

          <section className="w-full h-screen lg:h-auto lg:w-1/3 flex flex-col">
            <section className="flex-grow flex items-end relative bg-neutral-900">
              <img
                className="z-10 object-cover absolute top-0 left-0 hover:opacity-30 duration-200 w-full"
                alt={HOME_IMAGES.bg2.alt}
                src={HOME_IMAGES.bg2.src}
              />

              <div className="inline-flex relative z-50 flex-col items-start justify-end px-10 lg:px-16 pb-16">
                <SectionTitle color="white" fontSize="28">
                  Community
                </SectionTitle>
                <p className="text-white font-medium text-body mt-6 mb-20">
                  Our community is spread across Africa hosted in various locations called chapters.
                </p>
                <ArrowLink href="/community">Check out our community</ArrowLink>
              </div>
            </section>

            <section className="flex-grow bg-primary relative flex items-end">
              <img
                className="z-10 object-cover absolute top-0 left-0 h-full  hover:opacity-30 duration-200 w-full"
                alt={HOME_IMAGES.bg3.alt}
                src={HOME_IMAGES.bg3.src}
              />
              <div className="flex z-40 relative flex-col items-start justify-end px-10 lg:px-16 pb-16">
                <SectionTitle color="white" fontSize="28">
                  Team
                </SectionTitle>
                <p className="text-white font-medium text-body mt-6 mb-16">The brains behind the awesomeness.</p>
                <ArrowLink href="/team">Check out our team profiles</ArrowLink>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
