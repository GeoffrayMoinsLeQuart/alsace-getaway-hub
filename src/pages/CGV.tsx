import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CGV() {
  const sections = [
    {
      title: "1 – Objet",
      content: (
        <p>
          Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre{" "}
          <strong>Les Clés d’Alsace</strong> et toute personne physique ou morale effectuant une réservation de logement
          saisonnier via notre site ou nos plateformes partenaires.
        </p>
      ),
    },
    {
      title: "2 – Réservation",
      content: (
        <>
          <p>
            La réservation peut être effectuée en ligne ou par téléphone. Toute réservation est considérée comme ferme
            et définitive après confirmation écrite et versement d’un acompte.
          </p>
        </>
      ),
    },
    {
      title: "3 – Prix",
      content: (
        <p>
          Les prix sont indiqués en euros TTC. Ils comprennent la location du logement, les charges courantes (eau,
          électricité, chauffage) ainsi que le ménage de fin de séjour. La taxe de séjour est également comprise.
        </p>
      ),
    },
    {
      title: "4 – Paiement",
      content: (
        <p>
          Un acompte de 30% du montant total du séjour est demandé à la réservation. Le solde doit être réglé au plus
          tard <strong>4 jours avant l’arrivée</strong>.
        </p>
      ),
    },
    {
      title: "5 – Arrivée et départ",
      content: (
        <p>
          L’arrivée se fait à partir de 16h00 et le départ doit être effectué avant 10h00, sauf accord préalable. La
          remise des clés s’effectue selon les modalités communiquées après la réservation.
        </p>
      ),
    },
    {
      title: "6 – Annulation",
      content: (
        <>
          <p>En cas d’annulation par le locataire :</p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
            <li>
              Plus de 5 jours avant l’arrivée : remboursement de l’acompte versé, déduction faite de{" "}
              <strong>30 € de frais de dossier</strong>.
            </li>
            <li>Moins de 5 jours avant l’arrivée : retenue de 100% du montant total du séjour.</li>
          </ul>
        </>
      ),
    },
    {
      title: "7 – Caution",
      content: (
        <p>
          Une caution d’un montant maximum de <strong>500 €</strong> pourra être demandée lors de la remise des clés.
          Elle sera restituée dans un délai de 7 jours après le départ, déduction faite des éventuelles dégradations
          constatées.
        </p>
      ),
    },
    {
      title: "8 – Animaux",
      content: (
        <p>
          Les animaux de compagnie sont acceptés moyennant un supplément, sous réserve d’accord préalable. Ils doivent
          être tenus en laisse dans les parties communes et ne pas être laissés seuls dans le logement.
        </p>
      ),
    },
    {
      title: "9 – Règlement intérieur",
      content: (
        <p>
          Le locataire s’engage à respecter le règlement intérieur du logement. Les fêtes et soirées sont strictement
          interdites. Tout manquement grave pourra entraîner l’expulsion immédiate sans remboursement.
        </p>
      ),
    },
    {
      title: "10 – Assurance",
      content: (
        <p>
          Le locataire doit être couvert par une assurance responsabilité civile pour la durée du séjour. Une attestation
          pourra être demandée à l’arrivée.
        </p>
      ),
    },
    {
      title: "11 – Litiges",
      content: (
        <p>
          En cas de litige, une solution amiable sera recherchée en priorité. À défaut d’accord, seuls les tribunaux
          français seront compétents.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 mt-24 mb-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-4xl font-display font-bold text-foreground mb-6">
            Conditions Générales de Vente
          </h1>
          <p className="text-muted-foreground mb-12">
            Ces conditions définissent les droits et obligations entre Les Clés d’Alsace et le client dans le cadre de la
            réservation de logements saisonniers.
          </p>

          {sections.map((sec, i) => (
            <section key={i} className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{sec.title}</h2>
              <div className="text-muted-foreground space-y-2">{sec.content}</div>
            </section>
          ))}

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
