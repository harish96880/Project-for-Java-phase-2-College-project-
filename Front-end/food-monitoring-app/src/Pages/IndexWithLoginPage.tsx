import AboutSection from "../Components/AboutSection";
import HomeSection from "../Components/HomeSection";
import LoginContainer from "../Components/LoginContainer";
import Navbar from "../Components/Navbar";

export default function IndexPage() {
  return (
    <div className="container-fluid home col-10">
      <Navbar login={"login"} />
      <HomeSection />
      <AboutSection />
      <LoginContainer />
    </div>
  );
}
