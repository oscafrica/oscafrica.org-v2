import Link from "next/link";
import ArrowLink from "../components/atoms/ArrowLink/ArrowLink";
import SectionTitle from "../components/atoms/Typography/Headings/SectionTitle/SectionTitle";
import NavBar from "../components/composed/Navbar/NavBar";

const IndexPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <NavBar tune="light" />

      <main className="flex pl-32 min-h-screen -mt-28 flex-grow">
        <section className="w-2/3 min-h-full flex flex-col justify-end items-start mb-72">
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
        </section>

        <section className="w-1/3 flex flex-col">
          <article className="flex-grow flex bg-blue-300 flex-col justify-end px-16 pb-16">
            <SectionTitle color="white">Community</SectionTitle>
            <p className="text-white text-body mt-6 mb-20">
              Our community is spread across Africa hosted in various locations called chapters.
            </p>
            <ArrowLink href="#">Check out our community</ArrowLink>
          </article>

          <article className="flex-grow bg-red-300 flex flex-col justify-end px-16 pb-16">
            <SectionTitle color="white">Team</SectionTitle>
            <p className="text-white text-body mt-6 mb-20">The brains behind the awesomeness.</p>
            <ArrowLink href="#">Check out our team profiles</ArrowLink>
          </article>
        </section>
      </main>
    </div>
  );
};

export default IndexPage;
