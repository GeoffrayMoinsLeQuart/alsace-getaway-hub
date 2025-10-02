import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Users, Search } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

// Mock data - will be replaced with SuperHote API
const mockProperties = [
  {
    id: "1",
    title: "Appartement Cosy Centre Mulhouse",
    city: "Mulhouse",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    price: 85,
    capacity: 4,
    bedrooms: 2,
    surface: 65,
  },
  {
    id: "2",
    title: "Maison de Charme à Colmar",
    city: "Colmar",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
    price: 120,
    capacity: 6,
    bedrooms: 3,
    surface: 110,
  },
  {
    id: "3",
    title: "Studio Moderne Saint-Louis",
    city: "Saint-Louis",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    price: 65,
    capacity: 2,
    bedrooms: 1,
    surface: 35,
  },
  {
    id: "4",
    title: "Duplex Familial Mulhouse",
    city: "Mulhouse",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    price: 150,
    capacity: 8,
    bedrooms: 4,
    surface: 140,
  },
  {
    id: "5",
    title: "Appartement Standing Colmar",
    city: "Colmar",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    price: 95,
    capacity: 4,
    bedrooms: 2,
    surface: 75,
  },
  {
    id: "6",
    title: "Loft Contemporain Saint-Louis",
    city: "Saint-Louis",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    price: 110,
    capacity: 5,
    bedrooms: 2,
    surface: 90,
  },
];

export default function Logements() {
  const [searchParams] = useSearchParams();
  const [checkIn, setCheckIn] = useState(searchParams.get("checkin") || "");
  const [checkOut, setCheckOut] = useState(searchParams.get("checkout") || "");
  const [adults, setAdults] = useState(searchParams.get("adults") || "2");
  const [children, setChildren] = useState(searchParams.get("children") || "0");

  // Fetch properties from SuperHote API via edge function
  const { data: properties, isLoading } = useQuery({
    queryKey: ["properties", checkIn, checkOut, adults, children],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (checkIn) params.set("checkin", checkIn);
      if (checkOut) params.set("checkout", checkOut);
      params.set("adults", adults);
      params.set("children", children);

      const { data, error } = await supabase.functions.invoke("superhote-properties", {
        body: { params: params.toString() },
      });

      if (error) throw error;
      
      // Transform SuperHote data to our format
      return data?.map((property: any) => ({
        id: property.id || property._id,
        title: property.name || property.title,
        city: property.city || "Alsace",
        image: property.photos?.[0] || property.image || mockProperties[0].image,
        price: property.price || property.pricePerNight || 0,
        capacity: property.maxGuests || property.capacity || 2,
        bedrooms: property.bedrooms || 1,
        surface: property.surface || property.squareMeters || 0,
      })) || mockProperties;
    },
  });

  const handleSearch = () => {
    // The query will automatically refetch when dependencies change
    const params = new URLSearchParams();
    if (checkIn) params.set("checkin", checkIn);
    if (checkOut) params.set("checkout", checkOut);
    params.set("adults", adults);
    params.set("children", children);
    window.history.pushState({}, "", `?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Search Section */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-8 text-center">
            Nos Logements
          </h1>

          {/* Search Filters */}
          <div className="bg-card rounded-2xl shadow-card p-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Arrivée
                </label>
                <Input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Départ
                </label>
                <Input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>

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
                />
              </div>

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
                />
              </div>

              <div className="flex items-end">
                <Button
                  onClick={handleSearch}
                  size="lg"
                  className="w-full bg-gradient-primary"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Rechercher
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-[4/3] w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-lg text-muted-foreground">
                  {properties?.length || 0} logement(s) disponible(s)
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                {properties?.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
