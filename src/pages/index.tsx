import Image from "next/image";
import Link from "next/link";
import ArrowLink from "../components/atoms/ArrowLink/ArrowLink";
import SEOHead from "../components/atoms/SEOHead/SEOHead";
import SectionTitle from "../components/atoms/Typography/Headings/SectionTitle/SectionTitle";
import NavBar from "../components/composed/Navbar/NavBar";

const IndexPage = () => {
  return (
    <>
      <SEOHead />
      <div className="bg-black lg:min-h-screen lg:max-h-screen overflow-hidden flex flex-col">
        <NavBar tune="light" />

        <div className="flex flex-col lg:flex-row min-h-screen -mt-28 flex-grow">
          <main className="w-full  h-full lg:h-auto lg:w-2/3">
            <div className="min-h-full bg-secondary relative duration-20 pt-96 lg:pt-0 w-full px-10 lg:pl-32 flex flex-col justify-end items-start pb-48 lg:pb-72">
              <Image
                objectFit="cover"
                className="z-10 hover:opacity-20 duration-200 w-full"
                layout="fill"
                alt="oscafest"
                src="/images/backgrounds/home-page/bg-1.png"
              />

              <div className=" z-50">
                <SectionTitle color="white" fontSize="40" className="pt-16 lg:pt-0">
                  The Next Billion Creators
                </SectionTitle>
                <p className="text-white font-medium lg:w-1/2 text-paragraph-2 mb-16 mt-8">
                  A community of creative minds driving the Open Source movement in Africa.
                </p>
                <Link href="/about-us">
                  <a className="bg-white text-base hidden lg:inline-block font-medium hover:bg-primary rounded-primary duration-200 transition-all py-6 px-10">
                    Who we are
                  </a>
                </Link>
              </div>
            </div>
          </main>

          <section className="w-full h-screen lg:h-auto lg:w-1/3 flex flex-col">
            <section className="flex-grow flex items-end relative bg-neutral-900">
              <Image
                objectFit="cover"
                className="z-10 hover:opacity-30 duration-200 w-full"
                layout="fill"
                alt="osca bg-2"
                src="/images/backgrounds/home-page/bg-2.png"
              />

              <div className="inline-flex relative z-50 flex-col items-start justify-end px-16 pb-16">
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
              <Image
                objectFit="cover"
                className="z-10 hover:opacity-30 duration-200 w-full"
                layout="fill"
                alt="osca bg-3"
                src="/images/backgrounds/home-page/bg-3.png"
              />
              <div className="flex z-40 relative flex-col items-start justify-end px-16 pb-16">
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
