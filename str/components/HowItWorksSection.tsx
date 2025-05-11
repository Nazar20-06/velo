import { motion } from "framer-motion";
import { Search, Calendar, Bike } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-10 w-10" />,
    title: "Обери велосипед",
    description: "Виберіть тип велосипеда, який вам потрібен, з нашого широкого асортименту."
  },
  {
    icon: <Calendar className="h-10 w-10" />,
    title: "Забронюй онлайн",
    description: "Вкажіть дату, час та місце, де ви хочете отримати велосипед."
  },
  {
    icon: <Bike className="h-10 w-10" />,
    title: "Катайся із задоволенням",
    description: "Отримайте велосипед у вказаному місці та насолоджуйтесь поїздкою."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Як працює наш сервіс
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Оренда велосипеда ще ніколи не була такою простою. Всього три кроки, і ви вже насолоджуєтесь поїздкою.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card rounded-lg p-8 shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;