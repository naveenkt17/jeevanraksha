import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { HiBuildingOffice } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { FaHospitalSymbol,FaAngleRight } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>about-us</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
      <div class="hero v-center contact-inside pr">
          <div class="overlay-inside"></div>
          <div class="wrapper box-center jcs pr zi2">
            <div class="about-hero tac">
              <h1 class="fs38 fw7 mt8 fs30 fw7 lh24 fc4 mb32">Contact Us</h1>
              <ul class="df ttu box-center fc4">
                <li class="v-center mr16 fs14">
                  <Link href="/" previewlistener="true">
                    HOME
                  </Link>
                </li>
                <li>
                  <FaAngleRight />
                </li>
                <li class="v-center fs14 ml16">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <section class="wrapper ptb48">
          <div class="get-in-touch df mb48 ">
            <div class="get-in-touch-heading flx60">
              <div class="section-container mr48">
                <h2 class="section-heading fs36 lh58 fw ff2 flx46 mr48 pt8">
                Reach Out to Us
                </h2>
                <p class="section-text fs16 fw4 lh30 fc3 mt16 pb32 pr40 flx1 pr aft btm-line">
                  Proin molestie pulvinar dictumst quisque habitant posuere interdum eros hendrerit porta
                  mi. Lobortis leo potenti iaculis purus nulla.
                </p>
                {/* <Image width={500} height={400}  src="/images/contact-us.jpg" alt="contact-us image" /> */}
                <div class="contact-container df ais w100 pt16">
                  <div class="card-column-2 flx50">
                    <div class="card mt24 df ">
                      <div class="card-icon br50 bg1 h64 w64 box-center mr16">
                      <HiBuildingOffice class="fs36 fc4"/>
                      </div>
                      <div class="card-heading df fdc fww flx1">
                        <h3 class="fs24 fw6 lh34">Head Office</h3>
                        <p class="card-text fw5 lh30 fc6">
                          Jln Cempaka Wangi No 22, <br/>Jakarta - Indonesia
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card-column-2 flx50">
                    <div class="card mt24 df ">
                      <div class="card-icon br50 bg1 h64 w64 box-center mr16">
                      <IoCall class="fs36 fc4"/>
                      </div>
                      <div class="card-heading df fdc fww flx1">
                        <h3 class="fs24 fw6 lh34">Call Us</h3>
                        <p class="card-text fw5 lh30 fc6">
                          Phone : +91 - 7679856232 <br/>Fax : 011 - 35673235
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="contact-container df ais w100 mb32 pt16">
                  <div class="card-column-2 flx50">
                    <div class="card mt24 df ">
                      <div class="card-icon br50 bg1 h64 w64 box-center mr16">
                      <HiOutlineMail class="fs36 fc4"/>
                      </div>
                      <div class="card-heading df fdc fww flx1">
                        <h3 class="fs24 fw6 lh34">Email Us</h3>
                        <p class="card-text fw5 lh30 fc6">
                          info@support.tld <br/>info@jeevanrakshahospital.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card-column-2 flx50">
                    <div class="card mt24 df ">
                      <div class="card-icon br50 bg1 h64 w64 box-center mr16">
                      <FaHospitalSymbol class="fs36 fc4"/>
                      </div>
                      <div class="card-heading df fdc fww flx1">
                        <h3 class="fs24 fw6 lh34">Office Hour</h3>
                        <p class="card-text fw5 lh30 fc6">
                          Mon-Fri : 09am-07pm <br/>
                            Sat-Sun : Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-section p32 box-sd2 br8">
              <div class="form-heading">
                <h3 class="fs32 fw6 lh34 mtb24">Feel free to drop us a message</h3>
              </div>
              <div class="form mt32">
                <form action="#" method="post">
                  <div class="contact-form df fww mb16">
                    <div class="input-column df fww flx50 mb16">
                      <label class="fw5 mb8 ml84 pl4" for="">Name</label>
                      <input class="w100 pl12 db h48 br8 brd1 mlr4" type="text" placeholder="Name"/>
                    </div>
                    <div class="input-column df fww flx50 mb16">
                      <label class="fw5 mb8 ml84 pl4" for="">Email</label>
                      <input class=" w100 pl12 db h48 br8 brd1 mlr4" type="text" placeholder="Email Address"/>
                    </div>
                    <div class="input-column df fww flx50 mb16">
                      <label class="fw5 mb8 ml84 pl4" for="">Phone</label><br/>
                        <input class="w100 pl12 db h48 br8 brd1 mlr4" type="text" placeholder="Phone"/>
                        </div>
                        <div class="input-column df fww flx50 mb16">
                          <label class="fw5 mb8 ml84 pl4" for="">Subject</label>
                          <input class="w100 pl12 db h48 br8 brd1 mlr4" type="email" placeholder="Subject"/>
                        </div>
                        <div class="df fww flx100 pr8">
                          <label class="fw5 mb8 ml84 pl4" for="">Message</label>
                          <textarea class="flx100 pl12 pt8 mb8 db h80 br8 brd1 mlr4 "name="message" id="" rows="4" placeholder="Write a Message"></textarea>
                        </div>
                        <div class="submit-btn h48 br8 v-center jcc plr24 mt8 cp fc4 bg1">
                          Submit Now
                        </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
