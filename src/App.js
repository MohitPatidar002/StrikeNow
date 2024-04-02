import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Common/Navbar";
import SubNavbar from "./Sub-Components/SubNavbar";
import Home from "./Components/Pages/Home";
import Tent from "./Components/Pages/Tent";
import Flag from "./Components/Pages/Flag";
import TableCover from "./Components/Pages/TableCover";
import BackDrop from "./Components/Pages/BackDrop";
import Arches from "./Components/Pages/Arches";
import Banner from "./Components/Pages/Banner";
import DiscountBooths from "./Components/Pages/DiscountBooths";
import Furniture from "./Components/Pages/Furniture";
import LiteBox from "./Components/Pages/LiteBox";
import OutdoorEventPackages from "./Components/Pages/OutdoorEventPackages";
import RaceEventPackages from "./Components/Pages/RaceEventPackages";
import ArtworkDesign from "./Components/Pages/ArtworkDesign";
import ProductTutorial from "./Components/Pages/ProductTutorial";
import StrikeProductCatalog from "./Components/Pages/StrikeProductCatalog";
import Templates from "./Components/Pages/Templates";
import About from "./Components/Pages/About";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import FAQs from "./Components/Pages/FAQs";
import Reseller from "./Components/Pages/Reseller";
import Catalog from "./Components/Pages/Catalog";
import Testimonials from "./Components/Pages/Testimonials";
import Warrenty from "./Components/Pages/Warrenty";
import InvestrySpecials from "./Components/Pages/InvestrySpecials";

function App() {
  return (
    <div className="font-inter">
      <SubNavbar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/tent" element={<Tent/>}/>
        <Route path="/flag" element={<Flag/>}/>
        <Route path="/table-cover" element={<TableCover/>}/>
        <Route path="/back-drops" element={<BackDrop/>}/>
        <Route path="/arches" element={<Arches/>}/>
        <Route path="/banner" element={<Banner/>}/>
        <Route path="/discount-booth" element={<DiscountBooths/>}/>
        <Route path="/furniture" element={<Furniture/>}/>
        <Route path="/litebox" element={<LiteBox/>}/>
        <Route path="/outdoor-event-packages" element={<OutdoorEventPackages/>}/>
        <Route path="/race-event-packages" element={<RaceEventPackages/>}/>
        <Route path="/artwork-design" element={<ArtworkDesign/>}/>
        <Route path="/product-tutorial" element={<ProductTutorial/>}/>
        <Route path="/strike-product-catalog" element={<StrikeProductCatalog/>}/>
        <Route path="/templates" element={<Templates/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faq" element={<FAQs/>}/>
        <Route path="/resellers" element={<Reseller/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/testimonial" element={<Testimonials/>}/>
        <Route path="/warrenty" element={<Warrenty/>}/>
        <Route path="/investory-specials" element={<InvestrySpecials/>}/>
      </Routes>
    </div>
  );
}

export default App;
