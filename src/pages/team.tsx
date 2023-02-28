import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/atoms/Typography/Headings/SectionTitle/SectionTitle";
import Layout from "../components/composed/Layout/Layout";
import MemberCard from "../components/composed/Cards/MemberCard/MemberCard";
import PageIntro from "../components/composed/PageIntro/PageIntro";
import { IMember } from "../interfaces/IMember.interface";
import SEOHead from "../components/atoms/SEOHead/SEOHead";
import { APP_IMAGES } from "../utils/images";

const { team: TEAM_IMAGES } = APP_IMAGES.pages;

const CORE_MEMBERS: IMember[] = [
  {
    twitter: "https://twitter.com/Samson_Goddy",
    name: "Samson Goddy",
    image: TEAM_IMAGES.core.samson.src
  },
  {
    twitter: "https://twitter.com/Kolokodess",
    name: "Ada Nduka Oyom",
    image: TEAM_IMAGES.core.ada.src
  },
  {
    twitter: "https://twitter.com/Peace_Ojemeh",
    name: "Peace Ojemeh",
    image: TEAM_IMAGES.core.perrie.src
  },
  {
    twitter: "https://twitter.com/iambolajiayo",
    name: "Bolaji Ayodeji",
    image: TEAM_IMAGES.core.bolaji.src
  },
  {
    twitter: "https://twitter.com/yomdroid",
    name: "Yoma Okobiah",
    image: TEAM_IMAGES.core.yoma.src
  },
  {
    twitter: "https://twitter.com/PrincesOluebube",
    name: "Princess Oluebube",
    image: TEAM_IMAGES.core.princess.src
  }
];

const CommunityPage = () => {
  return (
    <>
      <SEOHead
        title="Team"
        description="The brains behind the awesomeness."
        ogImage={TEAM_IMAGES.banner.src}
      />
      <Layout>
        <StyledMainSection className="flex w-full flex-col items-center bg-secondary relative justify-end px-10 lg:px-32 pb-80">
          <img
            className="object-cover z-10 absolute top-0 h-full w-full left-0"
            alt={TEAM_IMAGES.banner.alt}
            src={TEAM_IMAGES.banner.src}
          />
          <div className="relative z-50 w-full max-w-1440">
            <PageIntro fontSize="40" heading="Our Team" subHeading="The brains behind the awesomeness." />
          </div>
        </StyledMainSection>

        <div className="mt-28 w-full max-w-1440">
          <div className="lg:pl-24 pl-10 mb-20">
            <SectionTitle fontSize="32">The Core</SectionTitle>
          </div>

          <section className="mt-20 md:flex md:flex-wrap lg:-mx-5 lg:-my-5 pb-52">
            {CORE_MEMBERS.map((member) => (
              <MemberCard {...member} key={member.name} className="w-full md:w-1/2 lg:w-1/3" />
            ))}
            <SeeAllMembersCardContainer className="w-full lg:w-1/3 lg:p-5">
              <div className="h-full w-full flex items-center justify-center bg-white">
                <a
                  href="https://docs.oscafrica.org/about/team"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-primary text-4xl hover:underline font-ubuntu font-normal"
                >
                  See all team members
                </a>
              </div>
            </SeeAllMembersCardContainer>
          </section>
        </div>
      </Layout>
    </>
  );
};

const SeeAllMembersCardContainer = styled.article`
  & > div {
    height: 613px;
  }
`;

const StyledMainSection = styled.main`
  height: 677px;
`;

export default CommunityPage;
