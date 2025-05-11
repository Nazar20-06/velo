import { useState } from "react";
import { motion } from "framer-motion";

interface Review {
  text: string;
  rating: number;
}

export default function ReviewsPage() {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewText.trim() && rating > 0) {
      setReviews([...reviews, { text: reviewText, rating }]);
      setReviewText("");
      setRating(0);
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://i.ibb.co/7d1K4fQM/2025-05-08-222801.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 px-4 py-24 text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Відгуки наших клієнтів</h1>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-12 bg-white bg-opacity-10 backdrop-blur-md p-6 rounded shadow-md">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Напишіть ваш відгук..."
            className="w-full p-3 mb-4 rounded bg-white text-black"
            rows={4}
            required
          />

          <div className="flex items-center mb-4 gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
                className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-400"}`}
              >
                ★
              </button>
            ))}
          </div>

          <button type="submit" className="bg-primary px-6 py-2 rounded text-white hover:bg-primary/90">
            Надіслати відгук
          </button>
        </form>

        <div className="max-w-3xl mx-auto space-y-4">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-md"
            >
              <p className="text-white mb-2">{rev.text}</p>
              <div className="text-yellow-400 text-lg">{"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
