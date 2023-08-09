import AboutSection from "../Components/AboutSection";
import HomeSection from "../Components/HomeSection";
import Navbar from "../Components/Navbar";

export default function IndexPage() {
  return (
    <div className="container-fluid home col-10">
      <Navbar login={"login"} />
      <HomeSection />
      <AboutSection />
    </div>
  );
}
