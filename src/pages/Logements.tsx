import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Logements() {
  const [searchParams] = useSearchParams();
  const checkIn = searchParams.get("checkin") || "";
  const checkOut = searchParams.get("checkout") || "";
  const adults = searchParams.get("adults") || "2";
  const children = searchParams.get("children") || "0";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* SuperHote Booking Engine - Full Width */}
      <section className="pt-20">
        <div className="w-full">
          <iframe 
            id="bookingengine"
            className="w-full border-0"
            style={{ display: 'block', height: '100vh', minHeight: '800px' }}
            src={`https://app.superhote.com/#/get-available-rentals/TziRKaU5fDux8BLLfljl4wB7V${checkIn && checkOut ? `?startDate=${checkIn}&endDate=${checkOut}&adultsNumber=${adults}&childrenNumber=${children}` : ''}${searchParams.get("lang") ? `&lang=${searchParams.get("lang")}` : '&lang=fr'}`}
            width="100%"
            allowFullScreen
            sandbox="allow-scripts allow-forms allow-same-origin allow-presentation allow-top-navigation"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
