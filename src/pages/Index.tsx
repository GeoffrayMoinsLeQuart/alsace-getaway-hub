import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";

// Mock data for now - will be replaced with real API
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

export default function Index() {
  // This will be replaced with real API call to SuperHote
  const { data: properties, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      // TODO: Replace with actual SuperHote API call
      // const response = await fetch('https://app.superhote.com/api/v2/get-user-rentals/TziRKaU5fDux8BLLfljl4wB7V');
      // return response.json();
      return mockProperties;
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Properties Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-['Playfair_Display'] text-foreground mb-4">
              Nos Logements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre sélection d'appartements et maisons de standing en Alsace
            </p>
          </div>

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {properties?.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-['Playfair_Display'] text-white mb-6">
            Prêt à réserver votre séjour ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Profitez de nos tarifs exclusifs et de notre service de conciergerie premium
          </p>
          <a
            href="/logements"
            className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-elegant"
          >
            Voir tous les logements
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
