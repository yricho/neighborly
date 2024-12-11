// components/Chef.tsx
export default function Chef() {
  return (
    <>

    <img src="/images/bw15.png" alt="bawang" className="gambarBawang"/>
    <img src="/images/bw1.png" alt="wibu" className="gambarBawangBawang"/>

    <div>
      <h2 className="bob font-bold text-5xl text-black">Our Expects Chef</h2>
      <p className="bib">Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit. Eligendi qui temporibus, earum<br></br> unde, quia voluptatum, impedi.</p>
    </div>

    <img src="images/chef.png" alt="gambarchefnya" className="chefnya" />



    <ul className="feature-list space-y-4">
          <li className="flex items-center">
            <span className="check-icon w-6 h-6 bg-orange-500 text-white flex items-center justify-center rounded-full mr-4">
              ✓
            </span>
            Lorem ipsum dolor sit amet, <br />consectetur
          </li>

          <li className="flex items-center">
            <span className="check-icon w-6 h-6 bg-orange-500 text-white flex items-center justify-center rounded-full mr-4">
              ✓
            </span>
            Lorem ipsum dolor sit amet, <br /> consectetur
          </li>

          <li className="flex items-center">
            <span className="check-icon w-6 h-6 bg-orange-500 text-white flex items-center justify-center rounded-full mr-4">
              ✓
            </span>
            Lorem ipsum dolor sit amet, <br /> consectetur
          </li>
      </ul>

      <ul className="feature-list2 space-y-4">
          <li className="flex items-center">
            <span className="check-icon2 w-6 h-6 bg-orange-500 text-white flex items-center justify-center rounded-full mr-4">
              ✓
            </span>
            Lorem ipsum dolor sit amet, <br />consectetur
          </li>

          <li className="flex items-center">
            <span className="check-icon2 w-6 h-6 bg-orange-500 text-white flex items-center justify-center rounded-full mr-4">
              ✓
            </span>
            Lorem ipsum dolor sit amet, <br /> consectetur
          </li>

          <li className="flex items-center">
            <span className="check-icon2 w-6 h-6 bg-orange-500 text-white flex items-center justify-center rounded-full mr-4">
              ✓
            </span>
            Lorem ipsum dolor sit amet, <br /> consectetur
          </li>
      </ul>

      <div className="buttons2">
  <button className="menu-btn2">Menu</button>
  <button className="book-btn2">Book a Table</button>
  </div>
   
   

    <div className="tidakkelihatan"><p>kelihatan</p></div>
    </>
  );
}
