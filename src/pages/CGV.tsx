import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CGV() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-8">
            Conditions Générales de Vente
          </h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Article 1 - Objet</h2>
            <p className="text-muted-foreground">
              Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre Clefs d'Alsace 
              et toute personne physique ou morale souhaitant effectuer une réservation de logement saisonnier.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Article 2 - Réservation</h2>
            <p className="text-muted-foreground">
              La réservation peut être effectuée en ligne via notre plateforme SuperHôte ou par téléphone. 
              Toute réservation est considérée comme ferme et définitive après confirmation écrite et versement d'un acompte.
            </p>
            <p className="text-muted-foreground">
              Un acompte de 30% du montant total du séjour est demandé à la réservation. Le solde doit être versé 30 jours avant l'arrivée.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Article 3 - Prix</h2>
            <p className="text-muted-foreground">
              Les prix sont indiqués en euros TTC. Ils comprennent la location du logement, les charges (eau, électricité, chauffage) 
              et le ménage de fin de séjour. La taxe de séjour est en sus et sera facturée selon le tarif en vigueur.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Article 4 - Arrivée et départ</h2>
            <p className="text-muted-foreground">
              L'arrivée se fait à partir de 16h00 et le départ avant 10h00, sauf accord préalable. 
              La remise des clés s'effectue sur place ou selon les modalités convenues lors de la réservation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Article 5 - Annulation</h2>
            <div className="text-muted-foreground space-y-2">
              <p>En cas d'annulation par le locataire :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Plus de 30 jours avant l'arrivée : remboursement de l'acompte moins 50€ de frais de dossier</li>
                <li>Entre 30 et 15 jours avant l'arrivée : retenue de 50% du montant total</li>
                <li>Moins de 15 jours avant l'arrivée : retenue de 100% du montant total</li>
              </ul>
              <p className="mt-4">Nous vous recommandons vivement de souscrire une assurance annulation.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Article 6 - Caution</h2>
            <p className="text-muted-foreground">
              Une caution de 500€ pourra être demandée lors de la remise des clés. Elle sera restituée dans les 7 jours suivant 
              le départ, après vérification de l'état du logement, déduction faite des éventuels dommages constatés.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Article 7 - Animaux</h2>
            <p className="text-muted-foreground">
              Les animaux de compagnie sont acceptés moyennant un supplément, sous réserve d'accord préalable. 
              Ils doivent être tenus en laisse dans les parties communes et ne pas être laissés seuls dans le logement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Article 8 - Règlement intérieur</h2>
            <p className="text-muted-foreground">
              Le locataire s'engage à respecter le règlement intérieur du logement et à en faire respecter les termes par ses invités. 
              Les soirées sont strictement interdites. Tout manquement grave pourra entraîner l'expulsion immédiate sans remboursement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Article 9 - Assurance</h2>
            <p className="text-muted-foreground">
              Le locataire doit être couvert par une assurance responsabilité civile pour la durée du séjour. 
              Une attestation pourra être demandée lors de l'arrivée.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Article 10 - Litiges</h2>
            <p className="text-muted-foreground">
              En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. 
              À défaut, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
