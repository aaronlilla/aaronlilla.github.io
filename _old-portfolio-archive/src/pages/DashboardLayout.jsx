import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import View from './View';
import { colorMap } from './Navigation/helpers';
import { selectPage, setViewportSize } from '../slices/navigationSlice';

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.navigation.currentPage);
  const viewport = useSelector((state) => state.navigation.viewport);
  const color = colorMap[currentPage];
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setViewportSize({ width: window.innerWidth, height: window.innerHeight }));
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  useEffect(() => {
    const page = location.pathname.slice(1) || 'home';
    if (page !== currentPage) {
      dispatch(selectPage(page));
    }
  }, [location, currentPage, dispatch]);

  useEffect(() => {
    if (location.pathname.slice(1) !== currentPage) {
      navigate(`/${currentPage}`);
    }
  }, [currentPage, navigate, location.pathname]);

  return (
    <div
      className={`outer-container ${viewport.width < 1150 ? 'compact' : ''}`}
      style={{ '--border-color': color }}
    >
      <div className="top-text">AARONLILLA.GITHUB.IO</div>
      <div className="dashboard-layout">
        <div className="content-container">
          <div className="content-wrapper">
            <Navigation />
            <View />
          </div>
        </div>
      </div>
      <div className="bottom-text">© AARON LILLA</div>
    </div>
  );
};

export default DashboardLayout;
