import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectPage, selectPortfolioSubItem, toggleHamburgerMenu } from "../../slices/navigationSlice";
import { colorMap, portfolioSubItemColorMap, wrapTextWithSpans } from "./helpers";
import "./index.scss";

const Menu = () => {
  const navigationItems = useSelector((state) => state.navigation.pages);
  const currentPage = useSelector((state) => state.navigation.currentPage);
  const showPortfolioSubItems = useSelector((state) => state.navigation.showPortfolioSubItems);
  const selectedPortfolioSubItem = useSelector((state) => state.navigation.selectedPortfolioSubItem);
  const viewport = useSelector((state) => state.navigation.viewport);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const portfolioSubItems = [
    "TC2 Waitlist",
    "TC2 Table Manager",
    "TC2 Floor Editor",
    "TC2 Auto Updater",
    "TC2 Waitlist Display",
    "TC2 Employee Manager",
    "USCRE Asset Claim",
    "USCRE Property Search",
    "USCRE Advanced Property Filter"
  ];

  const handleNavigationClick = (item) => {
    dispatch(selectPage(item));
    dispatch(toggleHamburgerMenu());
    navigate(`/${item}`);
  };

  return (
    <div className={`navigation-menu ${viewport.width < 1150 ? 'full-screen-menu' : ''}`}>
      {navigationItems.map((item) => (
        <div
          className="navigation-menu-item"
          key={item}
          onClick={() => handleNavigationClick(item)}
          style={{ color: colorMap[item], fontWeight: currentPage === item ? "500" : "100" }}
        >
          {wrapTextWithSpans(item.toUpperCase())}
        </div>
      ))}
      <div className={`portfolio-subitems ${showPortfolioSubItems ? 'visible' : ''}`}>
        {portfolioSubItems.map((subItem) => (
          <div
            className="navigation-subitem"
            key={subItem}
            onClick={() => {
              dispatch(selectPortfolioSubItem(subItem));
              dispatch(toggleHamburgerMenu());
            }}
            style={{
              color: selectedPortfolioSubItem === subItem ? portfolioSubItemColorMap[subItem] : "#7c7c7c",
              fontWeight: selectedPortfolioSubItem === subItem ? "500" : "100"
            }}
          >
            {wrapTextWithSpans(subItem.toUpperCase())}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
