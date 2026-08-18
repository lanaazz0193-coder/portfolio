import NavBar from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const PortalLayout = ({ children }) => {
  return (
    <>
      <NavBar/>
      
      <main>
        {children}
      </main>

      <Footer/>
    </>
  );
};

export default PortalLayout;