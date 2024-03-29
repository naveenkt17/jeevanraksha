import Head from "next/head";
import { Inter } from "next/font/google";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Delivery() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
        <div class="hero v-center delivery-inside pr">
          <div class="overlay-inside"></div>
          <div class="wrapper box-center jcs pr zi2">
            <div class="about-hero tac">
              <h1 class="fs26 fw6 mt8 fs30 fw7 lh24 fc4 mb24">
                Medical coding Outsourcing Services
              </h1>
              <ul class="df ttu box-center fc4">
                <li class="v-center mr16 fs14"><Link href="/" previewlistener="true">HOME</Link></li>
                <li><FaAngleRight /></li>
                <li class="v-center fs14 ml16">
                  Delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="wrapper plr48 ">
          <div class="services-details-img">
          <Image
              src='/images/delivery-inside.jpg'
              width={100}
              layout="responsive"
              height={100}
              alt='delivery-inside image'
              className='mtb24'
            />
              <h2 class="fs26 fc1 fw6 mb16">Our hospital always provide good services</h2>
              <p class="lh24 v-center fc3 fs18 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p class="lh24 v-center fc3 fs18 mt24">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div class="df mt32">
            <div class="flx1 mr24">
              <img
              src='/images/signup-bg.jpg'

              layout="responsive"
              alt='delivery-inside image'
              className='mtb24 w100'
            />
              </div>
            <div class="flx66">
              <div class="mt24">
                <h2 class="fs26 fc1 fw6 mb16 lh30">We always take care  our patient</h2>
                <p class="lh24 v-center fc3 fs18 mb16">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto blanditiis obcaecati veritatis magnam pariatur molestiae in maxime. Animi quae vitae in inventore. Totam mollitia aspernatur provident veniam aperiam placeat impedit! Lorem ipsum dolor sit amet,excepturi iure autem nemo ducimus temporibus facere, est eum voluptatem, culpa optio fugit assumenda quod? Praesentium.</p>
                <p class="lh24 v-center fc3 fs18 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, laudantium ullam, iure distinctio officia libero voluptatem obcaecati vero deleniti minima nemo itaque alias nisi eveniet soluta architecto quae laboriosam unde.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
