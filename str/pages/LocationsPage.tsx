import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function LocationsPage() {
  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* Фонове зображення */}
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co/zV5qv1xx/2025-05-08-225405.png"
            alt="Locations background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div> {/* 👈 затемнений без блюру */}
        </div>

        {/* Контент */}
        <div className="relative z-10 text-white px-4 py-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Локації, де можна отримати велосипед
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto bg-white/10 rounded-2xl p-8 shadow-lg border border-white/30"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">Наші пункти видачі</h2>
            <ul className="space-y-4 text-lg list-disc list-inside">
              <li><strong>1.</strong> Метро Шулявська</li>
              <li><strong>2.</strong> Метро Харківська</li>
              <li><strong>3.</strong> Метро Лівобережна</li>
              <li><strong>4.</strong> Метро Теремки</li>
              <li><strong>5.</strong> Метро Оболонь</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

