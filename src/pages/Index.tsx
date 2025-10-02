import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";

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
  // Fetch properties from SuperHote API via edge function
  const { data: properties, isLoading } = useQuery({
    queryKey: ["homepage-properties"],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke("superhote-properties", {
        body: { params: "" },
      });

      if (error) {
        console.error("Error fetching properties:", error);
        return mockProperties;
      }
      
      // Transform SuperHote data to our format
      const transformedData = data?.rentals?.map((property: any) => ({
        id: property.id?.toString() || property.property_key,
        propertyKey: property.property_key,
        title: property.name,
        city: property.city,
        image: property.photos?.[0]?.name || mockProperties[0].image,
        price: property.min_price,
        capacity: property.capacity,
        bedrooms: property.bedroom_count,
        surface: property.surface || 65,
      })) || [];
      
      return transformedData.length > 0 ? transformedData.slice(0, 6) : mockProperties;
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

      {/* Description Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-['Playfair_Display'] text-foreground mb-6 text-center">
            Location d'appartements & maisons en courte durée
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-['Playfair_Display'] text-foreground mb-4">
                Votre appartement à Mulhouse, Colmar et Saint-Louis
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Une fois les portes passées, c'est un autre monde qui s'ouvre à vous…
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nuit romantique, week-end en amoureux, séjour détente, offrez-vous une pause pour profiter en famille ou entre amis.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Découvrez et vivez sans plus attendre l'expérience Équipe d'Alsace !
              </p>
              <div className="text-center">
                <a
                  href="/logements"
                  className="inline-block bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-elegant"
                >
                  Réserver mon séjour
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold font-['Playfair_Display'] text-foreground mb-12 text-center">
            Découvrez quelques témoignages de précédents voyageurs
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <p className="text-muted-foreground mb-6 italic">
                "Très bien équipé avec des équipements intérieurs top. Le jacuzzi et autres équipements sont de très beaux atouts. La communication est impeccable."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Brigitte"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">Brigitte</p>
                  <p className="text-sm text-muted-foreground">Voyageuse</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card">
              <p className="text-muted-foreground mb-6 italic">
                "Magnifique séjour dans ce nouvel appartement décoré avec goût. Les propriétaires sont très sympas et réactifs."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                  alt="Clara"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">Clara</p>
                  <p className="text-sm text-muted-foreground">Voyageuse</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card">
              <p className="text-muted-foreground mb-6 italic">
                "Très bel appartement refait à neuf, proche du centre ville, très bien agencé, très propre et agréable à vivre."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                  alt="Sophie"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">Sophie</p>
                  <p className="text-sm text-muted-foreground">Voyageuse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-['Playfair_Display'] text-foreground mb-4">
              Les petits + de l'Équipe d'Alsace
            </h2>
            <h3 className="text-2xl font-semibold text-foreground">
              Pourquoi nous choisir ?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-card text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold font-['Playfair_Display'] text-foreground mb-4">
                Meilleurs prix garantis sur equipedalsace.fr
              </h4>
              <p className="text-muted-foreground">
                Si vous trouvez un meilleur tarif pour nos logements sur une autre plateforme (pour les mêmes dates), nous nous alignons sur ce tarif et vous recevrez un rabais de 5% complémentaire !
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold font-['Playfair_Display'] text-foreground mb-4">
                Une expérience unique
              </h4>
              <p className="text-muted-foreground">
                Avec l'Équipe d'Alsace vous ne faites pas que louer un logement, vous passez un séjour exceptionnel : nos processus garantissent un taux de satisfaction de 4,99/5 en moyenne sur l'ensemble de nos logements.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold font-['Playfair_Display'] text-foreground mb-4">
                Facture délivrée aux professionnels
              </h4>
              <p className="text-muted-foreground">
                En passant par equipedalsace.fr, vous êtes éligibles aux factures professionnelles pour vous permettre de justifier la réservation dans votre comptabilité (remise à la fin du séjour).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-['Playfair_Display'] text-foreground mb-2">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Vous vous les posez peut-être aussi
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <details className="bg-card p-6 rounded-xl shadow-card group">
              <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center">
                Quelles sont les heures d'arrivées & de départ ?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-muted-foreground mt-4">
                Le checkin (arrivée dans l'appartement) est possible à partir de 17h et le checkout (départ de l'appartement) doit être fait au plus tard à 10h.
              </p>
            </details>

            <details className="bg-card p-6 rounded-xl shadow-card group">
              <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center">
                Comment se déroule la remise des clés ?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-muted-foreground mt-4">
                Pour vous garantir une certaine flexibilité et une remise des clés sans contact, nous avons mis en place un système d'ouverture de porte automatique à code. Suite à votre réservation, vous recevez un code unique qui vous permettra d'accéder facilement au logement.
              </p>
            </details>

            <details className="bg-card p-6 rounded-xl shadow-card group">
              <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center">
                Le parking est-il inclus ?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-muted-foreground mt-4">
                Cela dépend des appartements, merci de vous référer aux fiches appartement pour savoir si le parking est inclus.
              </p>
            </details>

            <details className="bg-card p-6 rounded-xl shadow-card group">
              <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center">
                Les serviettes de bain sont-elles fournies ?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-muted-foreground mt-4">
                Oui, les draps et les serviettes sont fournis ainsi que les torchons pour la cuisine.
              </p>
            </details>

            <details className="bg-card p-6 rounded-xl shadow-card group">
              <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center">
                Les animaux sont-ils autorisés ?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-muted-foreground mt-4">
                Nous aimons beaucoup les animaux mais ils sont malheureusement interdits dans nos appartements et maisons pour des raisons d'hygiène.
              </p>
            </details>

            <details className="bg-card p-6 rounded-xl shadow-card group">
              <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center">
                Est-il possible de fumer dans les logements ?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-muted-foreground mt-4">
                Il est strictement interdit de fumer dans les logements.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-['Playfair_Display'] text-white mb-8">
            Prêt à passer un excellent séjour ?
          </h2>
          <a
            href="/logements"
            className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-elegant"
          >
            Réserver maintenant
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
