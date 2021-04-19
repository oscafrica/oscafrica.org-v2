import Link from "next/link";
import { useEffect } from "react";
import styled from "styled-components";
import SEOHead from "../components/atoms/SEOHead/SEOHead";
import SectionTitle from "../components/atoms/Typography/Headings/SectionTitle/SectionTitle";
import Layout from "../components/composed/Layout/Layout";
import PageIntro from "../components/composed/PageIntro/PageIntro";

const PageHeader = styled.article`
  min-height: 85vh;
  background: linear-gradient(360deg, rgba(0, 0, 0, 0.66) 21.24%, rgba(0, 0, 0, 0) 60.68%),
    url("/images/backgrounds/community/bg-1.png");
  background-size: cover;
`;

const CommunityPage = () => {
  useEffect(() => {
    // const doAsync = async () => {
    //   const response = await fetch("https://opencollective.com/sustainoss/events.json?limit=10&offset=0");
    //   const data = await response.json();
    //   console.log(data);
    // };
    // doAsync();
  }, []);

  return (
    <>
      <SEOHead
        title="Communtiy"
        description="As a community, we intend to help integrate the art of open source contribution into African developer ecosystem whilst strongly advocating for the adoption of free and open source technologies."
        ogImage="/images/backgrounds/community/bg-3.png"
      />

      <Layout>
        <PageHeader className="flex flex-col justify-end px-10 lg:px-32 pb-80">
          <PageIntro
            fontSize="40"
            heading="Our Community"
            subHeading="Our community is spread across Africa hosted in various locations called chapters."
          />
        </PageHeader>

        <article className="lg:flex lg:flex-wrap">
          <figure className="w-full lg:w-1/2">
            <img alt="oscafest" src="/images/backgrounds/community/bg-2.png" />
          </figure>
          <figure className="w-full lg:w-1/2 lg:mt-56 lg:pl-10">
            <img alt="oscafest" src="/images/backgrounds/community/bg-3.png" />
          </figure>
          <div className="bg-white relative py-36 px-10 lg:px-20 w-full lg:w-3/5 lg:-mt-80 z-30">
            <SectionTitle fontSize="32">What is a chapter?</SectionTitle>
            <p className="pt-12">
              Open Source Community Africa chapter is a community closer to home.
              <br />
              <br />
              It typically consists of a group of people coming together to organize and facilitate meetups, creating an
              environment of support in possible areas of challenge while following the O.S.C.A Code of Conduct.
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
              ></iframe>
            </div>
          </div>
        </article>

        <article className="py-28 lg:mt-40 bg-primary bg-opacity-10 -mx-32 flex flex-col items-center">
          <p className="font-lato text-gray-700 text-body text-center w-1/3 leading-10 mb-12">
            As a community, we intend to help integrate the art of open source contribution into African developer
            ecosystem whilst strongly advocating for the adoption of free and open source technologies.
          </p>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://discord.gg/8STPZzN"
            className=" text-primary text-body py-4 px-7 rounded-lg hover:text-black hover:bg-primary leading-10"
          >
            Join our community
          </a>
        </article>
      </Layout>
    </>
  );
};

export default CommunityPage;
