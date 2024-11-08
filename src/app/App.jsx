import Header from './layout/header.jsx';
import Artist from '../widgets/artist/index.jsx';
import Company from '../widgets/company/index.jsx';
import Work from '../widgets/work/index.jsx';
import Illustrations from '../widgets/illustations/index.jsx';
import Contact from '../widgets/contact/index.jsx';
import Footer from './layout/footer.jsx';

function App() {
  return (
    <div className="w-full max-w-[1320px] mx-auto">
      <Header />
      <Artist />
      <Company />
      <Work />
      <Illustrations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
