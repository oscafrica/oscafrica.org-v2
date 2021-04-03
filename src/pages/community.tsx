import Link from "next/link";
import { useEffect } from "react";
import styled from "styled-components";
import SectionTitle from "../components/atoms/Typography/Headings/SectionTitle/SectionTitle";
import EventCard from "../components/composed/Cards/EventCard/EventCard";
import Layout from "../components/composed/Layout/Layout";
import PageIntro from "../components/composed/PageIntro/PageIntro";

interface IEvent {
  id: number;
  region: string;
  name: string;
  description: string;
  image: string;
  url: string;
}

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

  const testEvents: IEvent[] = [
    {
      id: 160719,
      region: "OSCA-PH",
      name: "Excelling in Outreachy Internships, Excelling in Outreachy Internships",
      description: "",
      image: "/images/backgrounds/community/bg-2.png",
      url: "https://opencollective.com/osca/events/excelling-in-outreachy-internships-35d96597"
    },
    {
      id: 163719,
      region: "OSCA-LAG",
      name: "Excelling in Outreachy Internships, Excelling in Outreachy Internships",
      description: "",
      image: "/images/backgrounds/community/bg-2.png",
      url: "https://opencollective.com/osca/events/excelling-in-outreachy-internships-35d96597"
    },
    {
      id: 160090719,
      region: "OSCA-PH",
      name: "Excelling in Outreachy Internships, Excelling in Outreachy Internships",
      description: "",
      image: "/images/backgrounds/community/bg-2.png",
      url: "https://opencollective.com/osca/events/excelling-in-outreachy-internships-35d96597"
    }
  ];

  return (
    <Layout>
      <PageHeader className="flex flex-col justify-end px-32 pb-80">
        <PageIntro
          fontSize="40"
          heading="Our Community"
          subHeading="Our community is spread across Africa hosted in various locations called chapters."
        />
      </PageHeader>

      <article className="flex flex-wrap">
        <figure className="w-1/2">
          <img alt="oscafest" src="/images/backgrounds/community/bg-2.png" />
        </figure>
        <figure className="w-1/2 mt-56 pl-10">
          <img alt="oscafest" src="/images/backgrounds/community/bg-3.png" />
        </figure>
        <div className="bg-white relative py-36 px-20 w-3/5 -mt-80 z-30">
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
        <SectionTitle fontSize="32">Our Chapters</SectionTitle>
        <h3 className="mt-16">Click on the location pointer for more details.</h3>
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
      <article className="mt-28 pt-40 pb-40">
        <div className="pl-24">
          <SectionTitle fontSize="32">Upcoming Events</SectionTitle>
          <h3 className="mt-16 mb-44">We’re always excited to meet up and have the most effective conversations</h3>
        </div>
        <section className="flex overflow-x-scroll max-w-full">
          {testEvents.map((event) => (
            <EventCard {...event} className="mr-10" />
          ))}
        </section>
      </article>
    </Layout>
  );
};

export default CommunityPage;
