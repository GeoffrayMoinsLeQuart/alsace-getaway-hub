import { useState } from "react";
import { Calendar, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-alsace.jpg";

export default function Hero() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  const handleSearch = () => {
    // Navigate to search results with params
    const params = new URLSearchParams({
      checkin: checkIn,
      checkout: checkOut,
      adults,
      children,
    });
    window.location.href = `/logements?${params.toString()}`;
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-['Playfair_Display'] animate-fade-in">
          Votre séjour de rêve au cœur de l'Alsace
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in">
          Profitez de nos appartements & maisons de standing et vivez une expérience unique
        </p>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-elegant p-6 md:p-8 max-w-5xl mx-auto animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Check-in */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Arrivée
              </label>
              <Input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Check-out */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Départ
              </label>
              <Input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Adults */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Users className="h-4 w-4" />
                Adultes
              </label>
              <Input
                type="number"
                min="1"
                max="20"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Children */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Users className="h-4 w-4" />
                Enfants
              </label>
              <Input
                type="number"
                min="0"
                max="20"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button
                onClick={handleSearch}
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                <Search className="h-5 w-5 mr-2" />
                Rechercher
              </Button>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-80">
          <img src="https://monsupertemplate.com/wp-content/uploads/2022/08/airbnb.svg" alt="Airbnb" className="h-8 brightness-0 invert" />
          <img src="https://monsupertemplate.com/wp-content/uploads/2022/08/Booking.svg" alt="Booking.com" className="h-8 brightness-0 invert" />
          <img src="https://monsupertemplate.com/wp-content/uploads/2022/08/abritel-homeaway-vector-logo.svg" alt="Abritel" className="h-8 brightness-0 invert" />
          <img src="https://monsupertemplate.com/wp-content/uploads/2022/08/Vrbo.svg" alt="Vrbo" className="h-8 brightness-0 invert" />
          <img src="https://monsupertemplate.com/wp-content/uploads/2022/08/expedia.svg" alt="Expedia" className="h-8 brightness-0 invert" />
        </div>
      </div>
    </section>
  );
}
