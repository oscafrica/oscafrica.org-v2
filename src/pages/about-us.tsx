import styled from "styled-components";
import ArrowLink from "../components/atoms/ArrowLink/ArrowLink";
import SEOHead from "../components/atoms/SEOHead/SEOHead";
import SectionTitle from "../components/atoms/Typography/Headings/SectionTitle/SectionTitle";
import Layout from "../components/composed/Layout/Layout";
import PageIntro from "../components/composed/PageIntro/PageIntro";

const PageHeader = styled.article`
  min-height: 85vh;
  background: linear-gradient(360deg, rgba(0, 0, 0, 0.66) 21.24%, rgba(0, 0, 0, 0) 60.68%),
    url("/images/backgrounds/about-us/bg-1.png");
  background-size: cover;
`;

const AboutUsPage = () => {
  return (
    <>
      <SEOHead
        title="About Us"
        description=" Open Source Community Africa (O.S.C.A) is for open source lovers, enthusiasts, advocates and experts within and across Africa with the sole aim of increasing the rate of credible contributions by African software developers, designers, writers and everyone involved in the sphere of technology to open source projects both locally and globally, changing the perception of Africans from just the billion users to the NEXT BILLION CREATORS."
        ogImage="/images/backgrounds/about-us/bg-2.png"
      />
      <Layout>
        <PageHeader className="flex flex-col justify-end px-32 pb-80">
          <PageIntro
            fontSize="40"
            heading="The Next Billion Creators"
            subHeading="A community of creative minds driving the Open Source movement in Africa."
          />
        </PageHeader>

        <article className="">
          <figure>
            <img alt="oscafest" src="/images/backgrounds/about-us/bg-2.png" />
          </figure>
          <div className="bg-white relative py-36 px-20 w-3/5 -mt-40 z-30">
            <SectionTitle fontSize="32">Who we are</SectionTitle>
            <p className="pt-12">
              Open Source Community Africa (O.S.C.A) is for open source lovers, enthusiasts, advocates and experts
              within and across Africa with the sole aim of increasing the rate of credible contributions by African
              software developers, designers, writers and everyone involved in the sphere of technology to open source
              projects both locally and globally, changing the perception of Africans from just the billion users to the
              <br />
              <br />
              <b>NEXT BILLION CREATORS.</b>
            </p>
          </div>
        </article>
        <article className="flex items-end mt-16">
          <figure className="w-3/5">
            <img alt="oscafest" src="/images/backgrounds/about-us/bg-3.png" />
          </figure>
          <div className="bg-white relative py-20 w-1/2 px-20 -ml-40 -mb-40 z-30">
            <SectionTitle fontSize="32">Mission</SectionTitle>
            <p className="pt-12">
              We are a diverse community of open source lovers, collaborating on different projects to make a difference
              across Africa.
              <br />
              <br />
              We currently achieve this through the following vehicles;
              <br />
              <br />
              OSCA Chapters, Open Source Festival and through featured open source projects.
              <br />
              <br />
              Our main goal is to create an atmosphere in which Africans not only use software and hardware but are also
              creators of these technologies.
            </p>
          </div>
        </article>
        <article className="flex items-end mt-64">
          <div className="bg-white relative py-20 w-1/2 px-20 -mr-40 -mb-40 z-30">
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
          <figure className="w-3/5">
            <img alt="oscafest" src="/images/backgrounds/about-us/bg-4.png" />
          </figure>
        </article>
        <article className="flex mt-64 -mx-32">
          <figure className="w-1/2">
            <img alt="oscafest" src="/images/backgrounds/about-us/bg-5.png" />
          </figure>
          <div className="bg-blue-900 min-h-full flex flex-col items-start justify-center px-24 py-20 w-1/2">
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
