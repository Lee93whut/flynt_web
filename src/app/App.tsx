import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { Features } from './components/Features';
import { Technology } from './components/Technology';
import { Sustainability } from './components/Sustainability';
import { Partnership } from './components/Partnership';
import { Team } from './components/Team';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Vision />
      <Features />
      <Technology />
      <Sustainability />
      <Partnership />
      <Team />
      <Contact />
    </div>
  );
}