import styled from "styled-components";
import SectionTitle from "../components/atoms/Typography/Headings/SectionTitle/SectionTitle";
import Layout from "../components/composed/Layout/Layout";
import PageIntro from "../components/composed/PageIntro/PageIntro";

const PageHeader = styled.article`
  min-height: 85vh;
  background: linear-gradient(360deg, rgba(0, 0, 0, 0.66) 21.24%, rgba(0, 0, 0, 0) 60.68%),
    url("/images/backgrounds/community/bg-1.png");
  background-size: cover;
`;

interface CoreTeam {
  name: string,
  image: string,
  twitter: string
}

const TeamPage = () => {
  const coreTeam: CoreTeam[] = [

  ]
  return (
    <Layout>
      <PageHeader className="flex flex-col justify-end px-32 pb-80">
        <PageIntro
          fontSize="40"
          heading="Team"
          subHeading="Our community is spread across Africa hosted in various locations called chapters."
        />
      </PageHeader>

      <article className="mt-28">
        <SectionTitle fontSize="32">Our team</SectionTitle>
        <h3 className="mt-16">The brains behind the awesomeness.</h3>
        <section>

        </section>
      </article>
    </Layout>
  );
};

export default TeamPage;
