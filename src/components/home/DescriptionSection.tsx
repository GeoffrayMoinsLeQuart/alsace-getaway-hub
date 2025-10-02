export default function DescriptionSection() {
  return (
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
              Une fois les portes passées, c&apos;est un autre monde qui s&apos;ouvre à vous…
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Nuit romantique, week-end en amoureux, séjour détente, offrez-vous une pause
              pour profiter en famille ou entre amis.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Découvrez et vivez sans plus attendre l&apos;expérience Clés d&apos;Alsace !
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
  );
}
