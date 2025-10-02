import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Reservation() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const webKey = "TziRKaU5fDux8BLLfljl4wB7V";
    const checkin = searchParams.get("checkin");
    const checkout = searchParams.get("checkout");
    const adults = searchParams.get("adults") || "2";
    const children = searchParams.get("children") || "0";
    const lang = searchParams.get("lang") || "fr";

    let iframeUrl = "";
    
    if (checkin && checkout) {
      iframeUrl = `https://app.superhote.com/#/get-available-rentals/${webKey}?startDate=${checkin}&endDate=${checkout}&adultsNumber=${adults}&childrenNumber=${children}&lang=${lang}`;
    } else {
      iframeUrl = `https://app.superhote.com/#/get-available-rentals/${webKey}?lang=${lang}`;
    }

    const iframe = document.getElementById('bookingengine') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframeUrl;
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-4 text-center">
            Réserver votre séjour
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Sélectionnez vos dates et réservez directement en ligne
          </p>
        </div>
      </section>

      {/* SuperHote Booking Engine */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="relative w-full">
            <style dangerouslySetInnerHTML={{__html: `
              /* Cache la barre de recherche SuperHote */
              #bookingengine {
                min-height: 800px;
              }
              
              /* Style pour cacher les éléments de recherche SuperHote si besoin */
              iframe#bookingengine::after {
                content: '';
                display: block;
              }
            `}} />
            
            <iframe 
              id="bookingengine"
              className="w-full border-0 rounded-lg shadow-card"
              style={{ display: 'block', minHeight: '800px' }}
              src=""
              width="100%"
              height="5500"
              allowFullScreen
              sandbox="allow-scripts allow-forms allow-same-origin allow-presentation allow-top-navigation"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
