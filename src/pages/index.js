import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script'
import { FaStar } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Head>
        <title>Pawsome Pals Coloring Book</title>
        <link rel="icon" href="/favicon.ico" />
        <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1500716207122439&ev=PageView&noscript=1"
        /></noscript>
      </Head>
      <Script id="fb-ads" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1500716207122439');
          fbq('track', 'PageView');`}
      </Script>
      <main className="container mx-auto px-4 py-8 md:p-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8 md:pt-24 md:pb-24">
            <h1 className="text-4xl font-bold mb-4">
              Pawsome Pals Coloring Book
            </h1>
            <p className="text-lg mb-6">
              Relax and unwind with our dog-themed mandalas coloring book for kids
              and adults. Our coloring book is perfect for animal lovers and anyone
              who wants to improve their focus and reduce stress.
            </p>
            <a href="https://www.amazon.com/Pawsome-Pals-Coloring-Dog-Themed-Mandalas/dp/B0C12DCTNC"
              className="inline-block bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full">
              Buy on Amazon
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="aspect-[8/11.5] md:h-full w-full md:w-auto mt-5 md:mt-0 relative">
              <Image
                src="/pawsome-pals.png"
                alt="Pawsome Pals Coloring Book"
                fill
                className="rounded-md object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">What Customers Are Saying:</h2>
          <div className="">
            <p className="text-lg mr-4">
              "I just received my coloring book and was awe-struck by the images on the page. I cannot wait until work is over and I am able to add some color to the pups on each page! Thank you for creating this fun and beautiful book!" - LoriAnne
            </p>
            <div className="flex items-center py-2">
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
