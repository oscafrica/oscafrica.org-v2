import Link from "next/link";
import Button from "../components/atoms/Button/Button";
import NavBar from "../components/composed/Navbar/NavBar";

const IndexPage = () => (
  <div>
    <NavBar tune="dark" />
    <h1 className="bg-red-400">Hello Next.js 👋</h1>
    <Button name="hello" type="button" size="small">
      Hello
    </Button>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default IndexPage;
