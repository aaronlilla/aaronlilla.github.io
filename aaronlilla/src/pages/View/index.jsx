import { useSelector } from 'react-redux';
import About from '../About';
import Resume from '../Resume';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

const View = () => {
  const currentPage = useSelector((state) => state.navigation.currentPage);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="view">
      {renderPage()}
    </div>
  );
};

export default View;
