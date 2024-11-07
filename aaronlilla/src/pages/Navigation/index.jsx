import Menu from "./menu.jsx";
import Summary from "./summary.jsx";
import Socials from "./socials.jsx";
import { colorMap } from "./helpers.jsx";
import { useSelector, useDispatch } from "react-redux";
import { toggleHamburgerMenu } from "../../slices/navigationSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const isHamburgerOpen = useSelector((state) => state.navigation.isHamburgerOpen);
  const showPortfolioSubItems = useSelector((state) => state.navigation.showPortfolioSubItems);
  const currentPage = useSelector((state) => state.navigation.currentPage);
  const viewport = useSelector((state) => state.navigation.viewport);
  const color = colorMap[currentPage];

  const handleHamburgerClick = () => {
    dispatch(toggleHamburgerMenu());
  };

  return (
    <div
      className={`navigation ${viewport.width < 1150 ? 'compact' : ''}`}
      style={{
        borderColor: color,
        transition: "border-color 0.5s ease",
        padding: viewport.width < 1150 ? '20px' : '44px'
      }}
    >
      {viewport.width < 1150 && (
        <div className="hamburger-icon" style={{ color: color }} onClick={handleHamburgerClick}>
          ☰
        </div>
      )}
      <div className="navigation-header-title">
        <div className="navigation-header-title-text">
          <span style={{ color: "#00bfff" }}>{viewport.width < 1150 ? 'A' : 'AARON'}</span> {viewport.width >= 1150 && 'LILLA'}
        </div>
        {viewport.width >= 1150 && (
          <div className="navigation-header-subtitle">
            FRONT END WEB DEVELOPER
          </div>
        )}
      </div>
      {viewport.width >= 1150 ? (
        <>
          <div className="navigation-menu">
            <Menu />
          </div>
          <Summary fadeOut={showPortfolioSubItems} />
          <Socials />
        </>
      ) : (
        isHamburgerOpen && (
          <div className="hamburger-menu">
            <Menu />
          </div>
        )
      )}
    </div>
  );
};

export default Navigation;
