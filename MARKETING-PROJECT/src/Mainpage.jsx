import React from "react";





const Mainpage = () => {
  return (
    <>
      <section>
        <div className="hero-page">
          <div className="hero-one">
            <div className="image-div">
              <img src="lotuss.png" alt="image" /> <h2>LOGO</h2>
            </div>
            <div className="slogan">
              <h1>
                the most insightfull <span className="span-h1"> marketing confrence</span> in
                europe
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur consectetur illo cupiditate, amet odio assumenda vero
                repudiandae nostrum voluptatibus cum!
              </p>
            </div>
            <div className="button-div">
              <div className="btn btn-one">Register Now</div>
              <div className="btn btn-two">Login Now</div>
            </div>
          </div>

          <div className="hero-two">
            <img src="bluebg.png" alt="" />
          <div className="lecture-img">
            <img src="lecture1.jpg" alt="" />
            {/* <div className="button-div">
              <div className="btn btn-one">Register Now</div>
              <div className="btn btn-two">Login Now</div>
            </div> */}
          </div>
          </div>

        </div>
        <div className="center-word-div">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            id deserunt tempore?
          </p>
        </div>

        <div className="logos-div">
          <div className="logo">
            <img src="goo.png" alt="" />
          </div>
          <div className="logo">
            <img src="HubSpot-Logo.png" alt="" />
          </div>
          <div className="logo">
            <img src="vi.png" alt="" />
          </div>
          <div className="logo">
            <img src="buzzfeed.png" alt="" />
          </div>
        </div>

        <div className="speakers">
          <p> Lorem ipsum dolor sit amet consectetur rttrtrt </p>
          <h2>meet our speakers</h2>
        </div>

        {/* -- User-section ---------------------------- */}
        <div className="user-section">
          <div className="user-div">
            <img src="user.png" alt="" />
            <h3>Jonathan <br /><span className="span-h3">carrey</span></h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="user-div">
            <img src="user.png" alt="" />
            <h3>  david <br /> <span className="span-h3">peter</span></h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="user-div">
            <img src="user.png" alt="" />
            <h3>  john <br /> <span className="span-h3">carrey</span> </h3>          
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="user-div">
            <img src="user.png" alt="" />
            <h3>  simpson <br /> <span className="span-h3">matteher</span></h3>          
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="user-div">
            <img src="user.png" alt="" />
            <h3>  varun <br /> <span className="span-h3">bhat</span> </h3>         
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="user-div">
            <img src="user.png" alt="" />
            <h3>  simi <br /> <span className="span-h3">agarwal</span> </h3>        
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="user-div">
            <img src="user.png" alt="" /> 
            <h3>mahesh  <br /> <span className="span-h3">bhat</span> </h3>   
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="user-div">
            <img src="user.png" alt="" />
            <h3>mahesh <br /> <span className="span-h3">d</span> </h3>          
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
    {/* stay in touch section */}
      </section>
    <div className="connect">
          <h2> let's stay in touch</h2>
          <p> Lorem ipsum dolor sit amet consectetur rttrtrt oid uenvo ojmudi, </p>
          <div className="input-div">
            <input type="text" /> <button>PROCEED</button>
          </div>
        </div>

      <div className="footer">
        <div className="foot-one">
            <h2 className="app">Etsy</h2>
            <p>download the app now</p>
        </div>
        <div className="foot-two">
            <div className="foot-c">
                <h3>fgfgf</h3>
                <p>kjd kjkd</p>
                <p>jlkdjkdjl</p>
                <p>lfdjj</p>
                <p>jhdkh</p>
                <p>uieroi kjdlkl</p>
                <p>lkjoind</p>
                <p>jdhjdk</p>
            </div>
            <div className="foot-c">
                <h3>sdfdggf</h3>
                <p>kjd kjkd</p>                      
                <p>lkjoind</p>
                <p>jdhjdk</p>
                <p>uieroi kjdlkl</p>
            </div>
            <div className="foot-c">
                <h3>erteret</h3>
                <p>kjd kjkd</p>
                <p>jlkdjkdjl</p>
                <p>lfdjj</p>
                <p>jhdkh</p>
                <p>uieroi </p>
                <p>lkjoind</p>
                <p>jdhjdk</p>
            </div>
            <div className="foot-c">
                <h3>yuyyuuy</h3>
                <p>kjd kjkd</p>
                <p>jlkdjkdjl</p>
                <p>lfdjj</p>
             <div className="social">                        
             </div>
            </div>          
        </div>
      </div>
    </>
  );
};

export default Mainpage;
