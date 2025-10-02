import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-8">
            Mentions Légales
          </h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Éditeur du site</h2>
            <div className="text-muted-foreground space-y-2">
              <p><strong>Raison sociale :</strong> Clefs d'Alsace</p>
              <p><strong>Adresse :</strong> Alsace, France</p>
              <p><strong>Email :</strong> contact@clefsdalsace.fr</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Hébergement</h2>
            <div className="text-muted-foreground space-y-2">
              <p>Le site est hébergé par Lovable Cloud</p>
              <p>Infrastructure basée sur Supabase</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="text-muted-foreground">
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Protection des données personnelles</h2>
            <p className="text-muted-foreground">
              Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
            </p>
            <p className="text-muted-foreground">
              Pour exercer ce droit, contactez-nous à : contact@clefsdalsace.fr
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Cookies</h2>
            <p className="text-muted-foreground">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites. 
              En naviguant sur ce site, vous acceptez l'utilisation de cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Crédits</h2>
            <p className="text-muted-foreground">
              Conception et réalisation : Clefs d'Alsace
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
