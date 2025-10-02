import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, Heart, Shield, Star } from "lucide-react";

export default function APropos() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-6 text-center">
              À Propos de Clefs d'Alsace
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Votre conciergerie alsacienne de confiance
            </p>

            {/* Story */}
            <div className="prose prose-lg max-w-none mb-16">
              <div className="bg-card p-8 rounded-2xl shadow-card">
                <h2 className="text-2xl font-bold font-['Playfair_Display'] text-foreground mb-4">
                  Notre Histoire
                </h2>
                <p className="text-muted-foreground mb-4">
                  Clefs d'Alsace est née de la passion pour notre belle région alsacienne et du désir 
                  d'offrir aux voyageurs une expérience d'hébergement exceptionnelle. Basée au cœur de 
                  l'Alsace, nous gérons des locations saisonnières de standing à Mulhouse, Colmar et 
                  Saint-Louis.
                </p>
                <p className="text-muted-foreground">
                  Notre équipe s'engage à fournir un service de conciergerie complet, alliant tradition 
                  alsacienne et modernité, pour garantir des séjours mémorables à nos hôtes.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Qualité Premium</h3>
                <p className="text-muted-foreground">
                  Nos logements sont soigneusement sélectionnés et entretenus pour offrir le meilleur 
                  confort à nos voyageurs.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Service Personnalisé</h3>
                <p className="text-muted-foreground">
                  Une équipe disponible et à l'écoute pour répondre à toutes vos demandes et rendre 
                  votre séjour unique.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Réservation Sécurisée</h3>
                <p className="text-muted-foreground">
                  Un système de réservation simple, transparent et sécurisé pour une tranquillité 
                  d'esprit totale.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Excellence Locale</h3>
                <p className="text-muted-foreground">
                  Une connaissance approfondie de l'Alsace pour vous faire découvrir les meilleurs 
                  endroits de la région.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-primary p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold font-['Playfair_Display'] text-white mb-4">
                Prêt à découvrir l'Alsace ?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Réservez dès maintenant votre logement de rêve
              </p>
              <a
                href="/logements"
                className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors"
              >
                Voir nos logements
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
