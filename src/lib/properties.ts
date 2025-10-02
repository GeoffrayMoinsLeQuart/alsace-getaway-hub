export interface Property {
	id: string;
	propertyKey?: string;
	title: string;
	city: string;
	image: string;
	price: number;
	capacity: number;
	bedrooms: number;
	surface: number;
}

export const mockProperties: Property[] = [
	{
		id: '1',
		title: 'Appartement Cosy Centre Mulhouse',
		city: 'Mulhouse',
		image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
		price: 85,
		capacity: 4,
		bedrooms: 2,
		surface: 65
	},
	{
		id: '2',
		title: 'Maison de Charme à Colmar',
		city: 'Colmar',
		image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
		price: 120,
		capacity: 6,
		bedrooms: 3,
		surface: 110
	},
	{
		id: '3',
		title: 'Studio Moderne Saint-Louis',
		city: 'Saint-Louis',
		image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
		price: 65,
		capacity: 2,
		bedrooms: 1,
		surface: 35
	}
];

export const transformProperties = (data: any, fallback: Property[] = mockProperties): Property[] => {
	const transformed =
		data?.rentals?.map((property: any) => ({
			id: property.id?.toString() || property.property_key,
			propertyKey: property.property_key,
			title: property.name,
			city: property.city,
			image: property.photos?.[0]?.name || fallback[0].image,
			price: property.min_price,
			capacity: property.capacity,
			bedrooms: property.bedroom_count,
			surface: property.surface || 65
		})) || [];

	return transformed.length > 0 ? transformed.slice(0, 6) : fallback;
};
