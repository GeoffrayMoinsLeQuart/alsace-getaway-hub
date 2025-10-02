import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-['Playfair_Display'] text-foreground">
              Clefs d'Alsace
            </h3>
            <p className="text-muted-foreground text-sm">
              Votre conciergerie alsacienne pour des séjours d'exception à Mulhouse, Colmar et Saint-Louis.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/logements" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Nos Logements
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Informations Légales</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="/cgv" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Conditions Générales
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Mulhouse, Colmar, Saint-Louis<br />Alsace, France</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+33612345678" className="hover:text-primary transition-colors">
                  +33 6 12 34 56 78
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:contact@clefsdalsace.fr" className="hover:text-primary transition-colors">
                  contact@clefsdalsace.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Clefs d'Alsace. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
