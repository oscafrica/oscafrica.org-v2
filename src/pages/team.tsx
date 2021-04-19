import styled from "styled-components";
import SectionTitle from "../components/atoms/Typography/Headings/SectionTitle/SectionTitle";
import Layout from "../components/composed/Layout/Layout";
import MemberCard from "../components/composed/Cards/MemberCard/MemberCard";
import PageIntro from "../components/composed/PageIntro/PageIntro";
import { IMember } from "../interfaces/IMember.interface";
import SEOHead from "../components/atoms/SEOHead/SEOHead";

const CORE_MEMBERS: IMember[] = [
  {
    twitter: "https://twitter.com/Samson_Goddy",
    name: "Samson Goddy",
    image: "/images/team/core/samson.png"
  },
  {
    twitter: "https://twitter.com/Kolokodess",
    name: "Ada Nduka Oyom",
    image: "/images/team/core/ada.png"
  },
  {
    twitter: "https://twitter.com/Peace_Ojemeh",
    name: "Peace Ojemeh",
    image: "/images/team/core/perry.png"
  },
  {
    twitter: "https://twitter.com/iambolajiayo",
    name: "Bolaji Ayodeji",
    image: "/images/team/core/bolaji.png"
  },
  {
    twitter: "https://twitter.com/yomdroid",
    name: "Yoma Okobiah",
    image: "/images/team/core/yoma.png"
  }
];

const SeeAllMembersCardContainer = styled.article`
  & > div {
    height: 613px;
  }
`;

const CommunityPage = () => {
  return (
    <>
      <SEOHead
        title="Team"
        description="The brains behind the awesomeness."
        ogImage="/images/backgrounds/community/bg-1.png"
      />
      <Layout>
        <PageHeader className="flex flex-col justify-end px-10 lg:px-32 pb-80">
          <PageIntro fontSize="40" heading="Our Team" subHeading="The brains behind the awesomeness." />
        </PageHeader>

        <div className="mt-28">
          <div className="lg:pl-24 pl-10">
            <SectionTitle fontSize="32">The Core</SectionTitle>
          </div>

          <section className="mt-20 lg:flex lg:flex-wrap lg:-mx-5 lg:-my-5 pb-52">
            {CORE_MEMBERS.map((member) => (
              <MemberCard {...member} key={member.name} className="w-full lg:w-1/3" />
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

const PageHeader = styled.article`
  min-height: 85vh;
  background: linear-gradient(360deg, rgba(0, 0, 0, 0.66) 21.24%, rgba(0, 0, 0, 0) 60.68%),
    url("/images/backgrounds/community/bg-1.png");
  background-size: cover;
`;

export default CommunityPage;
