import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const bikeData = {
  city: [
    {
      name: "City Classic 3000",
      image: "https://i.ibb.co/h1fkdsgN/21360-630.jpg",
    },
  ],
  mountain: [
    {
      name: "Mountain Pro XT",
      image: "https://i.ibb.co/TN09JxP/kupit-velosiped-najner.jpg",
    },
  ],
  electric: [
    {
      name: "Electro Speedster",
      image: "https://i.ibb.co/TXcQmSG/IMG-0814-reg-ryhp-WCW.jpg",
    },
  ],
};

export default function BikeRental() {
  const [selectedCategory, setSelectedCategory] = useState<"city" | "mountain" | "electric" | null>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category: "city" | "mountain" | "electric") => {
    setSelectedCategory(category);
    navigate(`/catalog/${category}`);
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://i.ibb.co/7d1K4fQM/2025-05-08-222801.png"
          alt="Bike background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 text-white text-center px-4 py-24">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Виберіть тип велосипеда</h1>
        <p className="max-w-3xl mx-auto text-lg mb-12">
          Обери свій стиль катання. Ми підготували три категорії велосипедів для будь-яких умов — міські для зручного пересування, гірські для екстриму та електро для легких поїздок без зусиль. Обери той, що пасує саме тобі.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {Object.entries(bikeData).map(([key, bikes], index) => (
            <motion.div
              key={key}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.6 }}
              className="cursor-pointer border rounded shadow hover:shadow-lg transition bg-white text-black hover:scale-105"
              onClick={() => handleCategoryClick(key as "city" | "mountain" | "electric")}
            >
              <img
                src={bikes[0].image}
                alt={bikes[0].name}
                className="w-full h-48 object-cover rounded-t"
              />
              <div className="p-4 text-center font-semibold text-lg">
                {key === "city"
                  ? "Міський велосипед"
                  : key === "mountain"
                  ? "Гірський велосипед"
                  : "Електровелосипед"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}