import { useState, useEffect } from "react";
import HeaderComponent from "./components/HeaderComponent";
import MyCookieButtonComponent from "./components/MyCookieButtonComponent";
import LevelUpgradeComponent from "./components/LevelUpgradeComponent";
import locked from "./components/lock_closed.png";
import unlocked from "./components/lock_open.png";
//import UpgradeButton from "./components/UpgradeButton";

export default function App() {
  const localstorageCookie = () =>
    parseInt(localStorage.getItem("cookies")) || 1;
  const [cookies, setCookies] = useState(localstorageCookie);

  useEffect(() => {
    localStorage.setItem("cookies", cookies);
  }, [cookies]);

  const [cps, setCps] = useState(1);
  const [statusimage, setImage] = useState(locked);
  const [clickedcount, setClickedCount] = useState(0);

  useEffect(() => {
    const timeInterval = setInterval(function () {
      setCookies((current) => current + cps);
      if (cookies > 50) {
        setImage(unlocked);
      }
      if (cookies < 50) {
        setImage(locked);
      }
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [cookies, cps]);

  function increaseCookies() {
    setCookies(cookies + 1);
    if (cookies > 50) {
      setImage(unlocked);
    }
  }

  function buyBakery() {
    if (cookies > 50) {
      setCookies(cookies - 50);
      setCps(cps + 2);
      setClickedCount((current) => current + 1);
    }
    if (cookies < 50) {
      setImage(locked);
    }
  }
  return (
    <div>
      <HeaderComponent />
      <MyCookieButtonComponent
        increasecookiesfunction={increaseCookies}
        cookies={cookies}
        cps={cps}
      />
      <LevelUpgradeComponent
        image={statusimage}
        name="Cookie Bakery"
        clickedcount={clickedcount}
        requiredcount="50"
        cpsincrement="2"
        buyfunction={buyBakery}
      />
    </div>
  );
}

{
  /* <UpgradeButton buyMore={buyMore} /> */
}
{
  /* <LevelUpgradeComponent
        image={locked}
        name="Cookie Factory"
        clickedcount=""
        requiredcount="500"
        cps="10"
      />
      <LevelUpgradeComponent
        image={locked}
        name="Cookieverse"
        clickedcount=""
        requiredcount="100"
        cps="100"
      /> */
}
// function buyMore() {
//     setCookies(cookies - 10);
//     setCps(cps + 1);
// }
