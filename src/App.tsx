/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Phone, Mail, Instagram, Facebook, MessageCircle, Heart, Sparkles, Coffee, Tent, Wind } from 'lucide-react';

const TopLogo = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0.5]);
  const y = useTransform(scrollY, [0, 300], [0, -150]);
  const opacity = useTransform(scrollY, [0, 200, 300], [1, 0.8, 0]);

  return (
    <motion.div 
      style={{ scale, y, opacity }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center justify-center pt-8 pointer-events-none"
    >
      <div className="flex flex-col items-center gap-2 text-white drop-shadow-lg">
        <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm bg-white/10">
          <Wind className="w-6 h-6 stroke-1" />
        </div>
        <span className="text-xl font-light tracking-widest uppercase">An-Mo</span>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section className="relative h-screen overflow-hidden bg-stone-900">
      <motion.div style={{ scale, opacity, y }} className="absolute inset-0">
        <img 
          src="https://picsum.photos/seed/massage-hero/1920/1080?blur=2" 
          alt="Hero" 
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight drop-shadow-lg"
        >
          נשימה. שקט. התחדשות.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-3xl text-stone-200 font-light max-w-3xl mx-auto drop-shadow-md"
        >
          חוויות ספא וטיפולי מגע לאירועי חברה. <br/> אנחנו מביאים את הרוגע עד אליכם.
        </motion.p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
      >
        <span className="text-sm font-light mb-2 tracking-widest uppercase">גללו למטה</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

const About = () => {
  const text = "העסק שלנו מתמחה ביצירת מתחמי טיפול ורוגע באירועי חברה, ימי גיבוש וכנסים. אנחנו מגיעים עד אליכם עם ציוד מלא, מטפלים מוסמכים, ומקימים מאהל טיפולים מעוצב שמשדר ניקיון, שקט ורוחניות. המטרה שלנו היא להעניק לעובדים שלכם רגע של ניתוק, שחרור לחצים והטענת מצברים, בתוך שגרת העבודה העמוסה.";
  const words = text.split(" ");

  return (
    <section className="py-40 px-6 md:px-20 bg-stone-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm tracking-widest text-stone-400 mb-12 uppercase"
        >
          מי אנחנו
        </motion.h2>
        <h3 className="text-2xl md:text-5xl text-stone-800 font-light leading-relaxed flex flex-wrap justify-center gap-x-3 gap-y-2">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-15%" }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
            >
              {word}
            </motion.span>
          ))}
        </h3>
      </div>
    </section>
  );
};

const Services = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // In RTL, translating to positive X moves the container to the right, revealing items on the left.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const services = [
    {
      title: "עמדות מסאז'",
      desc: "כיסאות שיאצו ומיטות טיפול מקצועיות עם מטפלים מוסמכים.",
      icon: <Heart className="w-8 h-8 stroke-1" />,
      img: "https://picsum.photos/seed/massage1/600/800"
    },
    {
      title: "טיפולי שדה",
      desc: "טיפולים קצרים וממוקדים לשחרור צוואר, כתפיים וגב עליון.",
      icon: <Sparkles className="w-8 h-8 stroke-1" />,
      img: "images/back-with-2-hands.jpg"
      
    },    {
      title: "טיפולי שדה",
      desc: "טיפולים קצרים וממוקדים לשחרור צוואר, כתפיים וגב עליון.",
      icon: <Sparkles className="w-8 h-8 stroke-1" />,
      img: "https://picsum.photos/seed/massage2/600/800"
    },
    {
      title: "מאהל המתנה",
      desc: "זולה מעוצבת, מחצלות, כריות ואווירה רוחנית ומרגיעה.",
      icon: <Tent className="w-8 h-8 stroke-1" />,
      img: "https://picsum.photos/seed/tent/600/800"
    }
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-20 left-0 right-0 text-center z-10 flex justify-center pointer-events-none px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-white/60 blur-2xl rounded-full scale-150"></div>
            <h2 className="relative text-4xl md:text-5xl font-light text-stone-800 bg-white/40 backdrop-blur-md px-10 py-4 rounded-full border border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
              החוויה שאנחנו בונים
            </h2>
          </motion.div>
        </div>
        <motion.div style={{ x }} className="flex gap-8 px-10 md:px-32 pt-20">
          {services.map((service, idx) => (
            <div key={idx} className="w-[80vw] md:w-[450px] h-[60vh] md:h-[650px] shrink-0 relative rounded-3xl overflow-hidden group shadow-xl">
              <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                <div className="mb-6 opacity-90 bg-white/10 w-16 h-16 flex items-center justify-center rounded-full backdrop-blur-sm">{service.icon}</div>
                <h3 className="text-3xl md:text-4xl font-light mb-4">{service.title}</h3>
                <p className="text-stone-200 font-light text-lg leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const DynamicGallery = () => {
  const images = [
    "https://picsum.photos/seed/spa1/1920/1080",
    "https://picsum.photos/seed/spa2/1920/1080",
    "https://picsum.photos/seed/spa3/1920/1080",
    "https://picsum.photos/seed/spa4/1920/1080",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-stone-800">רגעים של שקט</h2>
          <p className="text-stone-500 mt-4 font-light text-lg">הצצה לאווירה שאנחנו יוצרים באירועים</p>
        </motion.div>
        
        <div className="relative aspect-video md:aspect-[21/9] w-full rounded-[2rem] overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { text: "הצוות הגיע לאירוע החברה שלנו והפך אותו למושלם. העמדות היו יפהפיות והעיסוי היה בדיוק מה שהעובדים היו צריכים.", author: "מיכל, מנהלת משאבי אנוש" },
    { text: "חוויה רוחנית ומרגיעה. המאהל שהם הקימו היה פשוט קסום, והתה הקר בסוף הטיפול היה טאצ' מנצח.", author: "רועי, מנכ״ל סטארטאפ" },
    { text: "מקצועיות ברמה הגבוהה ביותר. המטפלים היו קשובים והאווירה הייתה של ספא יוקרתי, באמצע המשרד שלנו.", author: "דנה, מנהלת רווחה" }
  ];

  return (
    <section className="py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light text-stone-800 text-center mb-24"
        >
          מה אומרים עלינו
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-stone-50 p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
            >
              <div className="text-stone-300 mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.41 14.596C16.636 13.918 16.75 13.25 16.75 12.593V3H24V12.593C24 15.657 23.16 18.46 21.48 21H14.017ZM0 21L2.393 14.596C2.619 13.918 2.733 13.25 2.733 12.593V3H9.983V12.593C9.983 15.657 9.143 18.46 7.463 21H0Z" />
                </svg>
              </div>
              <p className="text-stone-600 font-light text-xl leading-relaxed mb-8">"{test.text}"</p>
              <p className="text-stone-900 font-medium">{test.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-32 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full blur-[120px] bg-stone-500" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] rounded-full blur-[120px] bg-stone-400" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-light mb-6"
        >
          בואו ניצור רגע של שקט יחד.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-stone-400 font-light text-xl mb-16"
        >
          דברו איתנו ונתאים את החוויה המושלמת לאירוע שלכם.
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20">
          <motion.a whileHover={{ scale: 1.1, y: -5 }} href="https://wa.me/972506460848" className="flex flex-col items-center gap-4 group">
            <div className="w-20 h-20 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-stone-700 transition-colors shadow-lg">
              <MessageCircle className="w-8 h-8 stroke-1" />
            </div>
            <span className="font-light text-stone-300 group-hover:text-white transition-colors">WhatsApp</span>
          </motion.a>
          
          <motion.a whileHover={{ scale: 1.1, y: -5 }} href="tel:+972506460848" className="flex flex-col items-center gap-4 group">
            <div className="w-20 h-20 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-stone-700 transition-colors shadow-lg">
              <Phone className="w-8 h-8 stroke-1" />
            </div>
            <span className="font-light text-stone-300 group-hover:text-white transition-colors">טלפון</span>
          </motion.a>
          
          <motion.a whileHover={{ scale: 1.1, y: -5 }} href="mailto:maayan.mf4@gmail.com" className="flex flex-col items-center gap-4 group">
            <div className="w-20 h-20 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-stone-700 transition-colors shadow-lg">
              <Mail className="w-8 h-8 stroke-1" />
            </div>
            <span className="font-light text-stone-300 group-hover:text-white transition-colors">אימייל</span>
          </motion.a>
          
          <motion.a whileHover={{ scale: 1.1, y: -5 }} href="https://www.instagram.com/maayanferrera/" className="flex flex-col items-center gap-4 group">
            <div className="w-20 h-20 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-stone-700 transition-colors shadow-lg">
              <Instagram className="w-8 h-8 stroke-1" />
            </div>
            <span className="font-light text-stone-300 group-hover:text-white transition-colors">Instagram</span>
          </motion.a>
          
          <motion.a whileHover={{ scale: 1.1, y: -5 }} href="https://www.facebook.com/smile.smilelos.1" className="flex flex-col items-center gap-4 group">
            <div className="w-20 h-20 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-stone-700 transition-colors shadow-lg">
              <Facebook className="w-8 h-8 stroke-1" />
            </div>
            <span className="font-light text-stone-300 group-hover:text-white transition-colors">Facebook</span>
          </motion.a>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 font-light text-sm">
            © {new Date().getFullYear()} כל הזכויות שמורות.
          </p>
          <div className="flex gap-4 text-sm text-stone-500 font-light">
            <a href="#" className="hover:text-stone-300 transition-colors">תנאי שימוש</a>
            <a href="#" className="hover:text-stone-300 transition-colors">מדיניות פרטיות</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-stone-300 selection:text-stone-900">
      <TopLogo />
      <Hero />
      <About />
      <Services />
      <DynamicGallery />
      <Testimonials />
      <Contact />
    </div>
  );
}
