import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

export default function Product() {
  const [activeTab, setActiveTab] = useState("all");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24;

  // ✅ API से डेटा लाना
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // ✅ Category Mapping
  const categoryMapping = {
    "men's clothing": "mens-shirts",
    "women's clothing": "womens-dresses",
  };

  // ✅ Filter Logic
  const filteredProducts = products.filter((product) => {
    const mappedCategory = categoryMapping[activeTab] || activeTab;
    return (
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeTab === "all" || product.category === mappedCategory)
    );
  });

  // ✅ Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <>
      {/* 🔘 Category Buttons & Search */}
      <div className="button-container">
        <div className="category-buttons">
          {["all", "men's clothing", "women's clothing"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={activeTab === category ? "active" : ""}
            >
              {category.replace("'s clothing", " Clothing")}
            </button>
          ))}
        </div>
        <div className="search-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
            alt="Search"
            className="search-icon"
          />
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* 🛍️ Product List */}
      {currentProducts.length === 0 ? (
        <div className="no-products">No Products Available</div>
      ) : (
        <div className="product-list">
          {currentProducts.map((product) => (
            <div key={product.id} className="product-categroy">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product-image"
                />
              </Link>
              <div className="product-details">
                <p className="category">{product.brand}</p>
                <div className="name">
                  {product.title.length > 15
                    ? product.title.slice(0, 15) + "..."
                    : product.title}
                  <div className="price">
                    ${product.price.toFixed(2)}{" "}
                    <span className="old-price">
                      ${(product.price + 15).toFixed(2)}
                    </span>
                  </div>
                  <div className="card">
                    <p className="rating">⭐⭐⭐⭐⭐</p>
                    <button className="add-to-cart">🛒</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 📌 Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            ◀ Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next ▶
          </button>
        </div>
      )}
    </>
  );
}
