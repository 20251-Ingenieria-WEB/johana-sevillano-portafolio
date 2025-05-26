import './globals.css';
import BaseLayout from '../layout/BaseLayout';
import Perfil from '@/sections/Perfil/Perfil';
import Conocimientos from '@/sections/Conocimientos/Conocimientos';
import Educacion from '@/sections/Educacion/Educacion';
import Portafolio from '@/sections/Portafolio/Portafolio';
import Footer from '@/sections/Footer/Footer';


export default function Home() {
  return (
    <BaseLayout>
      <h1 className="text-4xl font-bold text-center text-blue-600">Estilos t funcionando</h1>
          <Perfil />
          <Conocimientos />
          <Educacion />
          <Portafolio />
          <Footer />

    </BaseLayout>
  );
}
