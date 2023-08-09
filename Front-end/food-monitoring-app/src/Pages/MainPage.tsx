import React from "react";
import Navbar from "../Components/Navbar";

export default function MainPage() {
  return (
    <div className="container-fluid home col-10">
      <Navbar login={"Account"} />
    </div>
  );
}
