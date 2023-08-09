import AboutSection from "../Components/AboutSection";
import HomeSection from "../Components/HomeSection";
import Navbar from "../Components/Navbar";
import SignupContainer from "../Components/SignupContainer";

export default function IndexPage() {
  return (
    <div className="container-fluid home col-10">
      <Navbar login={"login"} />
      <HomeSection />
      <AboutSection />
      <SignupContainer />
    </div>
  );
}
