import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Confidentialite() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-8">
            Politique de Confidentialité
          </h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Définitions</h2>
            <div className="text-muted-foreground space-y-2">
              <p><strong>L'Éditeur :</strong> La personne, physique ou morale, qui édite les services de communication au public en ligne via clefsdalsace.fr</p>
              <p><strong>Le Site :</strong> L'ensemble des sites, pages Internet et services en ligne proposés par l'Éditeur.</p>
              <p><strong>L'Utilisateur :</strong> La personne utilisant le Site et les services.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1 – Nature des données collectées</h2>
            <p className="text-muted-foreground">
              Dans le cadre de l'utilisation des Sites, l'Éditeur est susceptible de collecter les catégories de données suivantes concernant ses Utilisateurs :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Données d'état-civil, d'identité, d'identification (nom, prénom, adresse email, téléphone)</li>
              <li>Données de connexion (adresses IP, journaux d'événements)</li>
              <li>Données de réservation (dates de séjour, nombre de personnes)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2 – Communication des données personnelles à des tiers</h2>
            <h3 className="text-xl font-medium text-foreground">Pas de communication à des tiers</h3>
            <p className="text-muted-foreground">
              Vos données ne font l'objet d'aucune communication à des tiers. Vous êtes toutefois informés qu'elles pourront être divulguées 
              en application d'une loi, d'un règlement ou en vertu d'une décision d'une autorité réglementaire ou judiciaire compétente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3 – Information préalable pour la communication des données personnelles à des tiers en cas de fusion / absorption</h2>
            <p className="text-muted-foreground">
              Dans le cas où nous prendrions part à une opération de fusion, d'acquisition ou à toute autre forme de cession d'actifs, 
              nous nous engageons à garantir la confidentialité de vos données personnelles et à vous informer avant que celles-ci ne soient transférées ou soumises à de nouvelles règles de confidentialité.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4 – Collecte des données d'identité</h2>
            <p className="text-muted-foreground">
              La collecte de vos données d'identité (nom, prénom, email, téléphone) est nécessaire pour :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Le traitement de vos réservations</li>
              <li>La gestion de votre relation client</li>
              <li>L'envoi de nos communications (avec votre consentement)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5 – Collecte des données d'identification</h2>
            <p className="text-muted-foreground">
              La collecte de vos données d'identification (adresse IP, cookies) permet d'assurer le bon fonctionnement du site, 
              d'améliorer votre expérience utilisateur et de réaliser des statistiques de visites anonymisées.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6 – Collecte des données du terminal</h2>
            <p className="text-muted-foreground">
              Certaines données de votre appareil (type de navigateur, système d'exploitation, résolution d'écran) sont collectées 
              automatiquement pour optimiser l'affichage du site sur votre terminal.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7 – Cookies</h2>
            <div className="text-muted-foreground space-y-3">
              <h3 className="text-lg font-medium text-foreground">Qu'est-ce qu'un cookie ?</h3>
              <p>
                Un cookie est un fichier texte déposé sur votre ordinateur lors de la visite d'un site ou de la consultation d'une publicité. 
                Il a pour but de collecter des informations relatives à votre navigation et de vous adresser des services adaptés à votre terminal.
              </p>
              
              <h3 className="text-lg font-medium text-foreground mt-4">Les cookies que nous utilisons</h3>
              <p>Notre site utilise uniquement des cookies techniques nécessaires au bon fonctionnement du site (cookies de session).</p>
              
              <h3 className="text-lg font-medium text-foreground mt-4">Acceptation ou refus des cookies</h3>
              <p>
                Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies. Le refus des cookies techniques peut toutefois 
                empêcher le bon fonctionnement de certaines fonctionnalités du site.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8 – Conservation des données techniques</h2>
            <p className="text-muted-foreground">
              Les données techniques sont conservées pour la durée strictement nécessaire à la réalisation des finalités visées ci-avant, 
              soit 13 mois maximum après votre dernière visite.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9 – Délai de conservation des données personnelles et d'anonymisation</h2>
            <p className="text-muted-foreground">
              Les données personnelles collectées sont conservées pendant 3 ans à compter de votre dernier contact avec nous. 
              Passé ce délai, elles sont anonymisées ou supprimées, conformément à la réglementation en vigueur.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">10 – Suppression des données après suppression du compte</h2>
            <p className="text-muted-foreground">
              En cas de suppression de votre compte, vos données personnelles sont supprimées dans un délai de 30 jours maximum, 
              sauf obligation légale de conservation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">11 – Suppression du compte</h2>
            <p className="text-muted-foreground">
              Vous pouvez demander la suppression de votre compte à tout moment en nous contactant à l'adresse : contact@clefsdalsace.fr
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">12 – Droit d'accès, de rectification et d'opposition</h2>
            <p className="text-muted-foreground">
              Conformément à la réglementation européenne en vigueur (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit d'opposition au traitement de vos données</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit de limitation du traitement</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Pour exercer ces droits, contactez-nous à : contact@clefsdalsace.fr
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">13 – Sécurité</h2>
            <p className="text-muted-foreground">
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour assurer la sécurité de vos données 
              et empêcher leur déformation, endommagement ou accès par des tiers non autorisés.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">14 – Modification de la politique de confidentialité</h2>
            <p className="text-muted-foreground">
              Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. 
              En cas de modification substantielle, nous vous en informerons par email ou via un avis sur notre site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">15 – Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question relative à la présente politique de confidentialité ou pour exercer vos droits, 
              vous pouvez nous contacter à l'adresse suivante : contact@clefsdalsace.fr
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
