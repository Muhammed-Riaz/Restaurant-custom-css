import "@/app/components/styles/feature/feature.css"
import Image from "next/image"

function Feature() {
  return (
    <section className="f-section">

      {/* main div for text*/}
      <div>

{/* text */}
<div className="f-txt">
  <h4> <span className="spn1">CHOOSE</span> & <span className="spn2"> CREATE</span></h4>
  <div className="paragph">
  Picante comes with 8 different demos. Get all of them with one-time purchase!   <br />
  Use our 1-click install wizard to build the website in minutes. Unlimited Possibilities with Codeless   <br />
  Combine parts from various templates in your website!   <br />
  </div>
</div>

{/* cards */}

<div></div>


      </div>

      {/* cards */}

      <div className="main-div">
        

        {/* childs */}
        <div>

        <Image src={"https://codeless.co/picante/presentation/wp-content/uploads/2018/06/default.jpg"} height={200} width={300} alt="img"></Image>
        <div className="img-txt">Classic Bar & Restaurant</div>
        </div>

        <div>
        <Image src={"https://codeless.co/picante/presentation/wp-content/uploads/2021/02/image.jpg"} height={200} width={300} alt="img"></Image>
        <div className="img-txt">Chef (Elementor)</div>
        </div>

        <div>
        <Image src={"https://codeless.co/picante/presentation/wp-content/uploads/2018/06/organic.jpg"} height={200} width={300} alt="img"></Image>
        <div className="img-txt">Organic</div>
        </div>

        <div>
        <Image src={"https://codeless.co/picante/presentation/wp-content/uploads/2018/06/coffee.jpg"} height={200} width={300} alt="img"></Image>
        <div className="img-txt">Coffee</div>
        </div>

        <div>
        <Image src={"https://codeless.co/picante/presentation/wp-content/uploads/2018/06/default3.jpg"} height={200} width={300} alt="img"></Image>
        <div className="img-txt">Gallery Slideshow</div>
        </div>

        <div>
        <Image src={"https://codeless.co/picante/presentation/wp-content/uploads/2018/06/pizza.jpg"} height={200} width={300} alt="img"></Image>
        <div className="img-txt">Pizza & Fast Food</div>
        </div>

        <div>
        <Image src={"https://codeless.co/picante/presentation/wp-content/uploads/2018/06/default2.jpg"} height={200} width={300} alt="img"></Image>
        <div className="img-txt">Reservation Home</div>
        </div>

        <div>
        <Image src={"https://codeless.co/picante/presentation/wp-content/uploads/2018/06/blogboxed.jpg"} height={200} width={300} alt="img"></Image>
        <div className="img-txt">Blog Boxed</div>
        </div>

        <div>
        <Image src={"https://codeless.co/picante/presentation/wp-content/uploads/2018/06/blogfullwidth.jpg"} height={200} width={300} alt="img"></Image>
        <div className="img-txt">Blog Fullwidth</div>
        </div>
        

      </div>



    </section>
  )
}

export default Feature