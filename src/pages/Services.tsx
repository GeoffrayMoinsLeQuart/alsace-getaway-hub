import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Key, Sparkles, Clock, Package, Users, Shield } from "lucide-react";

const services = [
  {
    icon: Key,
    title: "Accueil Personnalisé",
    description: "Check-in et check-out flexibles avec remise des clés en personne ou via boîte sécurisée.",
  },
  {
    icon: Sparkles,
    title: "Ménage Premium",
    description: "Nettoyage professionnel avant et après chaque séjour pour un logement impeccable.",
  },
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    description: "Une équipe joignable à tout moment pour répondre à vos questions et besoins urgents.",
  },
  {
    icon: Package,
    title: "Services Complémentaires",
    description: "Linge de lit, serviettes, produits d'accueil, WiFi haut débit et équipements modernes.",
  },
  {
    icon: Users,
    title: "Conciergerie Sur-Mesure",
    description: "Réservations de restaurants, activités touristiques, courses livrées au logement.",
  },
  {
    icon: Shield,
    title: "Assurance & Sécurité",
    description: "Logements assurés, protocoles sanitaires stricts et assistance en cas de problème.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Une conciergerie complète pour un séjour sans souci en Alsace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-secondary p-12 rounded-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-['Playfair_Display'] text-foreground mb-6">
                Un Service d'Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Notre équipe est formée aux plus hauts standards de l'hôtellerie pour vous garantir 
                un séjour inoubliable. Nous mettons un point d'honneur à répondre rapidement à toutes 
                vos demandes et à anticiper vos besoins.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">6</div>
                  <div className="text-muted-foreground">Logements Premium</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support Client</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-block bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-elegant"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
