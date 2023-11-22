function Home() {
    return(
        <>
        <section class="banner" id="banner">
            <div class="content">
                <h2>Always Choose Good</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit dolor architecto 
                corporis non, quos sint vel facere corrupti reprehenderit illum commodi ea recusandae eligendi 
                nisi? Aspernatur obcaecati optio veritatis quos?</p>
            </div>
        </section>    

        <section class="about" id="about">
            <div class="row">
                <div class="col50">
                    <h2 class="titleText"><span>A</span>bout Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corrupti repellat cupiditate 
                    lorem ipsum dolor sit, amet consectetur adipisicing elit. A corporis maxime dolorum cumque deserunt nostrum
                    tempore nemo sapiente, at sunt similique? Quod amet quaerat totam soluta laudantium ducimus voluptatum 
                    tempore ex, eaque cumque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolorum 
                    vel nihil natus quam sed iure in ducimus dolores, labore tempore Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Velit similique totam ipsam magni nobis. Eaque dolorum iure at in ullam 
                    eius, quos odio exercitationem doloribus inventore, placeat magni laborum natus.. 
                    Atque iure velit culpa dolor doloremque quo sunt vitae.</p>
                </div>
                <div class="col50">
                    <div class="imgBx">
                        <img src="./assets/imgs/00.jpg" alt="About us"/>
                    </div>
                </div>
            </div>
        </section>
        <section class="contact" id="contact">
            <div class="title">
                <h2 class="titleText"><span>C</span>ontact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="contactForm">
                <h3>Send Message</h3>
                <form action="#" method="POST">
                    <div class="inputBox">
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div class="inputBox">
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div class="inputBox">
                        <textarea placeholder="Name"></textarea>
                    </div>
                    <div class="inputBox">
                        <input type="submit" value="Send"/>
                    </div>
                </form>
            </div>
        </section>

        </>
    )
}

export default Home