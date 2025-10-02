import { Link } from "react-router-dom";

export default function FooterLinks() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-foreground">Liens Rapides</h4>
      <ul className="space-y-2 text-sm">
        <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
        <li><Link to="/logements" className="text-muted-foreground hover:text-primary transition-colors">Nos Logements</Link></li>
        <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
        {/* <li><Link to="/a-propos" className="text-muted-foreground hover:text-primary transition-colors">À Propos</Link></li> */}
        <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
      </ul>
    </div>
  );
}
