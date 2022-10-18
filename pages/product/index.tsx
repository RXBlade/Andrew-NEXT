import Image from "next/image";
import Head from "next/head";

function Product() {
  return (
    <div>
      <Head>
        <title>Product Component</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>

      <div className="bg-[hsl(30,38%,92%)]">
        <div className="sm:min-h-[52em] flex justify-center items-center w-screen h-screen">
          <div className="flex flex-col w-11/12 shadow-md bg-white rounded-[10px] sm:flex-row sm:max-w-[600px] flex-wrap overflow-hidden">
            <picture className="flex-initial grow-0 shrink basis-6/12">
              <source
                media="(max-width:640px)"
                srcSet="/images/image-product-mobile.jpg"
              />
              <img
                src="/images/image-product-desktop.jpg"
                alt="Gabrielle Essence Eau De Parfum"
                className="xs:rounded-t-[10px] sm:rounded-l-[10px] sm:h-full sm:max-w-[300px] w-full object-cover"
              />
            </picture>
            <div className="flex flex-col font-[montserrat] font-medium w-11/12 text-sm m-5 text-[hsl(228,12%,48%)] sm:w-5/12 grow-0 shrink basis-5/12">
              <p className="uppercase tracking-[0.3rem]">PERFUME</p>
              <h1 className="text-[hsl(212,21%,14%)] font-bold font-[fraunces] text-4xl leading-8 my-3 sm:my-auto">
                Gabrielle Essence Eau De Parfum
              </h1>
              <p className="my-3 text-base sm:my-auto">
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
              <div className="flex flex-row gap-3 justify-start items-center my-3 sm:my-auto">
                <p className="font-[fraunces] text-4xl text-[hsl(158,36%,37%)] font-bold">
                  $149.99
                </p>
                <p className="line-through">$169.99</p>
              </div>
              <button className="flex items-center justify-center bg-[hsl(158,36%,37%)] rounded-md p-3 mx-auto w-11/12 gap-2">
                <Image
                  alt="Shopping cart"
                  src="/images/icon-cart.svg"
                  width="15px"
                  height="15px"
                ></Image>
                <p className="text-[hsl(0,0%,100%)] montserrat font-bold">
                  Add to Cart
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
