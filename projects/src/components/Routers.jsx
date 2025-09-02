import { Routes, Route ,Navigate} from "react-router";
//portfolio
import PortFolio from '../Portfolio/PortFolio.jsx'
//dashboard
import DashBoard from "../Dashboard/DashBoard.jsx"; 
//anime
import DeckRedirect from '../anime/DeckRedirect.jsx';
 import SeriesLayout from "../anime/SeriesLayout.jsx";
import Mainpage from "../anime/Mainpage.jsx";
//series
import Arc from '../anime/Series/Arc.jsx'
import Dm from '../anime/Series/DM.jsx'
import Synchro from "../anime/Series/Synchro.jsx";
import Dsod from "../anime/Series/Dsod.jsx";
import Vrains from "../anime/Series/Vrains.jsx";
import Gx from "../anime/Series/Gx.jsx";
import GoRush from "../anime/Series/GoRush.jsx";
import Sevens from "../anime/Series/Sevens.jsx";
import Zexal from "../anime/Series/Zexal.jsx";
import AboutWeb from '../anime/AboutWeb.jsx'
import  ProNav from '../anime/ProNav.jsx'
//characters
import Yami from "../anime/Characters_cards/Yami.jsx";
import Muto from "../anime/Characters_cards/Muto.jsx";
import Yuesi from "../anime/Characters_cards/Yuesi.jsx";
import Yuma from "../anime/Characters_cards/Yuma.jsx";
import Kaiba from "../anime/Characters_cards/Kaiba.jsx";
import Jaden from "../anime/Characters_cards/Jaden.jsx";
import Playmaker from "../anime/Characters_cards/Playmaker.jsx";
import Yuya from "../anime/Characters_cards/Yuya.jsx";
import Yudias from "../anime/Characters_cards/Yudias.jsx";
import Yuga from "../anime/Characters_cards/Yuga.jsx";
import Deck from "../anime/Deck.jsx";
import SeriesNav from "../anime/SeriesNav.jsx";
import DeckLayout from "../anime/DeckLayout.jsx";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
  <Route path="/dashboard" element={<DashBoard />} />
  <Route path="/portfolio" element={<PortFolio />} />

  <Route path="/mainpage" element={<Mainpage />} />
  <Route path="/Aboutweb" element={<AboutWeb />} />
  <Route path="/Series" element={<SeriesNav />} />
  <Route path="/Pronav" element={<ProNav />} />
  <Route path="/decks" element={<Deck />} />
  <Route path="/deck/:id" element={<DeckRedirect />} /> 

<Route path="/decks" element={<DeckLayout />}>               
  <Route path="muto" element={<Muto />} />           
  <Route path="yami" element={<Yami />} />           
  <Route path="yuesi" element={<Yuesi />} />        
  <Route path="yuki" element={<Jaden />} />          
  <Route path="yuma" element={<Yuma />} />           
  <Route path="kaiba" element={<Kaiba />} />         
  <Route path="yuya" element={<Yuya />} />         
  <Route path="play" element={<Playmaker />} />   
  <Route path="yuga" element={<Yuga />} />           
  <Route path="yudias" element={<Yudias />} />       
</Route>

     
      {/*series */}
    <Route path="/Series" element={<SeriesLayout />}>
  <Route path="dm" element={<Dm />} />
  <Route path="dsod" element={<Dsod />} />
  <Route path="gx" element={<Gx />} />
  <Route path="synchro" element={<Synchro />} />
  <Route path="zexal" element={<Zexal />} />
  <Route path="arc" element={<Arc />} />
  <Route path="vrains" element={<Vrains />} />
  <Route path="sevens" element={<Sevens />} />
  <Route path="rush" element={<GoRush />} />
</Route>
    </Routes>
  );
}

export default Routers;
