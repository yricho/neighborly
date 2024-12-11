// import CardComponent from "./components/card/card";
// import HeroComponent from "./components/hero";
import ButtonMenu from "./components/ButtonMenu";
import Chef from "./components/Chef";
import Review from "./components/Review";

export default function Home() {
  return (
    <div>

      <ButtonMenu title={"Kategori"} />

      <ButtonMenu title={"Handphone & Tablet"} />

      <ButtonMenu title={"Top-Up & Tagihan"} />


      {/* <HeroComponent /> */}

      {/* features section */}

      {/* pricing section */}

      {/* metric section */}
      <Chef />
      {/* review section*/}
      <Review />


      {/* faq section */}

      {/* blog section */}

      {/* cta section */}
    </div>
  );
}
