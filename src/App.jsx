import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Shimmer  from "../Components/Shimmer/Shimmer";
import "./App.css";

function App() {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null); // API डेटा स्टेट
  const location = useLocation();

  useEffect(() => {
    setLoader(true); // जब भी पेज चेंज हो, लोडर दिखाओ

    // 🔹 API CALL (अपनी असली API से रिप्लेस करो)
    fetch("https://dummyjson.com/products?limit=194") // Dummy API
      .then((res) => res.json())
      .then((data) => {
        setData(data); // डेटा स्टोर करो
        setLoader(false); // अब लोडर हटाओ
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false); // एरर होने पर भी लोडर हटा दो
      });

  }, [location.pathname]); // हर बार Route बदलने पर चलेगा

  // जब तक डेटा नहीं आएगा, कुछ भी नहीं दिखेगा
  if (loader || !data) {
    return <Shimmer />;
  }

  return (
    <>
      <Header />
      <Outlet context={{ data }} /> 
      <Footer />
    </>
  );
}

export default App;
