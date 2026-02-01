export interface Property {
    id: number;
    title: string;
    location: string;
    price: string;
    beds: number;
    baths: number;
    sqft: number;
    image: string;
    type: 'house' | 'apartment';
    featured: boolean;
    description: string;
    amenities: string[];
    forRent?: boolean;
    rentalType?: 'long' | 'short';
}

export const properties: Property[] = [
    {
        id: 1,
        title: 'Modern Farmhouse',
        location: 'Austin, TX',
        price: '$1,250,000',
        beds: 4,
        baths: 3,
        sqft: 3200,
        image: 'https://images.unsplash.com/photo-1570129477992-45a003a3ae6b?w=800&h=600&fit=crop',
        type: 'house',
        featured: true,
        description: 'Experience luxury living in this stunning modern farmhouse. Featuring an open-concept design, gourmet kitchen, and a spacious backyard perfect for entertaining.',
        amenities: ['Gourmet Kitchen', 'Swimming Pool', 'Smart Home System', 'Wine Cellar'],
        forRent: false
    },
    {
        id: 2,
        title: 'Downtown Luxury Loft',
        location: 'New York, NY',
        price: '$2,850,000',
        beds: 3,
        baths: 2,
        sqft: 2100,
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
        type: 'apartment',
        featured: true,
        description: 'Sophisticated loft in the heart of Manhattan. Floor-to-ceiling windows offer breathtaking city views. Steps away from the finest dining and shopping.',
        amenities: ['Roof Deck', 'Fitness Center', '24/7 Concierge', 'Private Elevator'],
        forRent: false
    },
    {
        id: 3,
        title: 'Beachfront Villa',
        location: 'Malibu, CA',
        price: '$5,500,000',
        beds: 5,
        baths: 4,
        sqft: 4800,
        image: 'https://images.unsplash.com/photo-1613977257363-0ac2acd41d90?w=800&h=600&fit=crop',
        type: 'house',
        featured: true,
        description: 'Rare opportunity to own a piece of Malibu paradise. This beachfront villa offers direct access to the sand and panoramic ocean views from every room.',
        amenities: ['Ocean Front', 'Outdoor Kitchen', 'Private Pier', 'Home Theater'],
        forRent: false
    },
    {
        id: 4,
        title: 'Urban Studio',
        location: 'San Francisco, CA',
        price: '$750,000',
        beds: 1,
        baths: 1,
        sqft: 650,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a9d6830d1?w=800&h=600&fit=crop',
        type: 'apartment',
        featured: false,
        description: 'Chic and efficient urban studio. Perfect for young professionals or as a stylish city pied-à-terre. Includes high-end finishes and smart storage solutions.',
        amenities: ['In-unit Laundry', 'Shared Terrace', 'Bike Storage', 'Pet Friendly'],
        forRent: false
    },
    {
        id: 5,
        title: 'Mountain Retreat',
        location: 'Denver, CO',
        price: '$850,000',
        beds: 3,
        baths: 2,
        sqft: 2400,
        image: 'https://images.unsplash.com/photo-1541123603104-652bf684ea00?w=800&h=600&fit=crop',
        type: 'house',
        featured: false,
        description: 'Escape to the mountains in this cozy yet modern retreat. Designed to blend with the natural landscape, it offers serenity and stunning vistas year-round.',
        amenities: ['Hot Tub', 'Stone Fireplace', 'Hiking Trails', 'Garage'],
        forRent: false
    },
    {
        id: 6,
        title: 'Suburban Family Home',
        location: 'Chicago, IL',
        price: '$580,000',
        beds: 4,
        baths: 2.5,
        sqft: 2800,
        image: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=800&h=600&fit=crop',
        type: 'house',
        featured: false,
        description: 'Beautiful family home in a top-rated school district. Features a master suite with walk-in closet, fenced backyard, and a finished basement.',
        amenities: ['Backyard', 'Basement', 'Walk-in Closet', 'Near Parks'],
        forRent: false
    },
    {
        id: 7,
        title: 'Cozy City Apartment',
        location: 'Seattle, WA',
        price: '$2,200/month',
        beds: 2,
        baths: 1,
        sqft: 950,
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
        type: 'apartment',
        featured: false,
        description: 'Charming 2-bedroom apartment with plenty of natural light. Centrally located with easy access to public transport and local cafes.',
        amenities: ['Hardwood Floors', 'Updated Kitchen', 'Balcony', 'Secure Entry'],
        forRent: true,
        rentalType: 'long'
    },
    {
        id: 8,
        title: 'Modern Luxury Condo',
        location: 'Miami, FL',
        price: '$350/night',
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: 'https://images.unsplash.com/photo-1512918766675-ed20ca6ad241?w=800&h=600&fit=crop',
        type: 'apartment',
        featured: true,
        description: 'Stunning luxury condo with panoramic ocean views. Experience the best of Miami living with top-tier building amenities and modern interiors.',
        amenities: ['Pool', 'Gym', 'Valet Parking', 'Concierge'],
        forRent: true,
        rentalType: 'short'
    },
    {
        id: 9,
        title: 'Classic Victorian House',
        location: 'San Francisco, CA',
        price: '$6,000/month',
        beds: 4,
        baths: 3,
        sqft: 3200,
        image: 'https://images.unsplash.com/photo-1448630305421-919af3f2b8c7?w=800&h=600&fit=crop',
        type: 'house',
        featured: false,
        description: 'Beautifully restored Victorian home in a historic neighborhood. Combining classic charm with modern conveniences.',
        amenities: ['Garden', 'Fireplace', 'Bay Windows', 'Detached Garage'],
        forRent: true,
        rentalType: 'long'
    },
    {
        id: 10,
        title: 'High-Tech Loft',
        location: 'Tokyo, Japan',
        price: '$250/night',
        beds: 1,
        baths: 1,
        sqft: 800,
        image: 'https://images.unsplash.com/photo-1502005229766-31dbce44371c?w=800&h=600&fit=crop',
        type: 'apartment',
        featured: true,
        description: 'Stay in the heart of Shibuya in this futuristic loft. Features voice-controlled systems, projector, and minimal aesthetic.',
        amenities: ['Smart Home', 'Projector', 'Heated Floors', 'Keyless Entry'],
        forRent: true,
        rentalType: 'short'
    }
];
