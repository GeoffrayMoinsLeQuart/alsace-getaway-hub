import FooterCompany from "./footer/FooterCompany";
import FooterContact from "./footer/FooterContact";
import FooterLegal from "./footer/FooterLegal";
import FooterLinks from "./footer/FooterLinks";

export default function Footer() {
	return (
		<footer className='bg-card border-t border-border'>
			<div className='container mx-auto px-4 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
					<FooterCompany />
					<FooterLinks />
					<FooterLegal />
					<FooterContact />
				</div>

				<div className='border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground'>
					<p>&copy; {new Date().getFullYear()} Clefs d'Alsace. Tous droits réservés.</p>
				</div>
			</div>
		</footer>
	);
}
