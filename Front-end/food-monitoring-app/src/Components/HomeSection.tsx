import foodImage from "../assets/Food_Image1.png";

export default function HomeSection() {
  return (
    <section id="home">
      <div className="row my-3">
        <div className="col-lg-6 col-md-6 col-12 order-1">
          <h1 className="display-4">Welcome to Food Monitoring</h1>
          <p className="h4">
            Ready to take control of your food expenses? Sign up today and start
            monitoring your meals with ease. Embrace the simplicity of our food
            monitoring website and take the first step towards a hassle-free
            dining experience. Bon appétit and happy monitoring!
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-12 order-sm-2">
          <img src={foodImage} className="img-fluid" />
        </div>
      </div>
    </section>
  );
}
