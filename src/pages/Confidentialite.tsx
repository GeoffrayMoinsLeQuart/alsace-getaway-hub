import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Confidentialite() {
  const sections = [
    {
      title: "1 – Introduction",
      content: (
        <p>
          La présente politique décrit comment <strong>Les Clés d’Alsace</strong> collecte, utilise et protège
          vos données personnelles dans le cadre de ses activités de conciergerie et de location saisonnière.
        </p>
      ),
    },
    {
      title: "2 – Responsable du traitement",
      list: [
        { label: "Société", value: "Les Clés d’Alsace – SASU" },
        { label: "Email", value: "lesclefsdalsace@gmail.com", link: "mailto:lesclefsdalsace@gmail.com" },
        { label: "Téléphone", value: "06 21 47 19 22" },
        { label: "Adresse", value: "5B Rue de Margnolles, 69300 Caluire-et-Cuire, France" },
      ],
    },
    {
      title: "3 – Données collectées",
      list: [
        { label: "Identité", value: "nom, prénom, email, téléphone" },
        { label: "Réservations", value: "dates de séjour, nombre de personnes, logement choisi" },
        { label: "Facturation", value: "coordonnées bancaires et fiscales si nécessaire" },
        { label: "Navigation", value: "adresses IP et logs techniques (sécurité uniquement)" },
      ],
    },
    {
      title: "4 – Finalités du traitement",
      list: [
        { label: "Exécution de contrat", value: "gestion des réservations, facturation, relation client" },
        { label: "Obligations légales", value: "comptabilité, fiscalité, sécurité" },
        { label: "Support", value: "réponses aux demandes et assistance" },
        { label: "Amélioration du service", value: "optimisation du site et de l’expérience utilisateur" },
      ],
    },
    {
      title: "5 – Bases légales",
      list: [
        { label: "Consentement", value: "inscription newsletter, communications marketing" },
        { label: "Contrat", value: "exécution des réservations et services" },
        { label: "Obligation légale", value: "facturation et conformité réglementaire" },
        { label: "Intérêt légitime", value: "sécurisation, amélioration de nos services" },
      ],
    },
    {
      title: "6 – Conservation des données",
      list: [
        { label: "Réservations", value: "durée légale de conservation comptable (10 ans)" },
        { label: "Prospection", value: "3 ans maximum après dernier contact" },
        { label: "Logs techniques", value: "13 mois maximum" },
      ],
    },
    {
      title: "7 – Droits des personnes concernées",
      content: (
        <p>
          Vous disposez d’un droit d’accès, de rectification, d’opposition, de suppression, de portabilité et de
          limitation du traitement de vos données. Pour exercer vos droits, contactez-nous à{" "}
          <a href="mailto:lesclefsdalsace@gmail.com" className="text-primary hover:underline">
            lesclefsdalsace@gmail.com
          </a>
        </p>
      ),
    },
    {
      title: "8 – Sécurité",
      content: (
        <p>
          Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour assurer la
          sécurité de vos données : hébergement en Europe, accès sécurisé, sauvegardes régulières.
        </p>
      ),
    },
    {
      title: "9 – Modification de la politique",
      content: (
        <p>
          Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. En cas de
          modification substantielle, nous vous en informerons par email ou via un avis sur notre site.
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
            Politique de Confidentialité
          </h1>
          <p className="text-muted-foreground mb-12">
            Cette politique décrit nos pratiques concernant la collecte, l’utilisation et la protection de vos données personnelles.
          </p>

          {sections.map((sec, i) => (
            <section key={i} className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{sec.title}</h2>

              {sec.content && <div className="text-muted-foreground">{sec.content}</div>}

              {sec.list && (
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  {sec.list.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.label} :</strong>{" "}
                      {item.link ? (
                        <a href={item.link} className="text-primary hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </li>
                  ))}
                </ul>
              )}
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
