import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Logements() {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const checkIn = searchParams.get("checkin") || "";
  const checkOut = searchParams.get("checkout") || "";
  const adults = searchParams.get("adults") || "2";
  const children = searchParams.get("children") || "0";

  // Construire l'URL de l'iframe
  const iframeUrl = `https://app.superhote.com/#/get-available-rentals/TziRKaU5fDux8BLLfljl4wB7V${checkIn && checkOut ? `?startDate=${checkIn}&endDate=${checkOut}&adultsNumber=${adults}&childrenNumber=${children}` : `?lang=fr`}`;
  
  console.log("iframe URL:", iframeUrl);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* SuperHote Booking Engine - Full Width */}
      <section className="pt-20 relative">
        <div className="w-full">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Chargement des logements...</p>
              </div>
            </div>
          )}
          <iframe 
            id="bookingengine"
            className="w-full border-0"
            style={{ display: 'block', height: '100vh', minHeight: '800px' }}
            src={iframeUrl}
            width="100%"
            allowFullScreen
            sandbox="allow-scripts allow-forms allow-same-origin allow-presentation allow-top-navigation"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
