import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const cityBikes = [
  {
    id: 1,
    image: "https://i.ibb.co/W4yM1T65/2025-05-08-233015.png",
    price: "250 грн / день",
    description: "Легкий міський велосипед для комфортних прогулянок по місту. Ідеально підходить для доріг та тротуарів."
  },
  {
    id: 2,
    image: "https://i.ibb.co/0jDsLQqG/2025-05-08-233435.png",
    price: "300 грн / день",
    description: "Стильний та надійний велосипед з амортизацією. Ідеальний для тривалих поїздок містом."
  }
];

export default function CityBikesList() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">Міські велосипеди</h1>
      <div className="space-y-8">
        {cityBikes.map((bike) => (
          <div
            key={bike.id}
            className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={bike.image}
              alt={`Міський велосипед ${bike.id}`}
              className="w-full md:w-1/3 h-auto object-cover"
            />
            <div className="p-6 md:w-2/3">
              <h2 className="text-2xl font-bold text-primary mb-2">{bike.price}</h2>
              <p className="text-muted-foreground mb-4">{bike.description}</p>
              <Link to={`/rent/city/${bike.id}`}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Орендувати
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
