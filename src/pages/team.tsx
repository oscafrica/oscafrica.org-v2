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

const TeamPage = () => {
  return (
    <Layout>
      <PageHeader className="flex flex-col justify-end px-32 pb-80">
        <PageIntro
          fontSize="40"
          heading="Our Community"
          subHeading="Our community is spread across Africa hosted in various locations called chapters."
        />
      </PageHeader>

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
    </Layout>
  );
};

export default TeamPage;
