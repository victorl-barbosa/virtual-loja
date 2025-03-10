import { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Função para ordenar

  const sortProducts = () => {
    const sorted = [...products].sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });
    setProducts(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Abre o menu flutuante com detalhes do produto
  const openProductModal = (product) => {
    setSelectedProduct(product);
  };

  // Fecha o menu flutuante
  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    return <div className="text-center text-xl">Carregando...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-xl text-red-500">Erro: {error}</div>
    );
  }

  return (
    <div className="px-10 mt-11">
      <div className="md:flex justify-between">
        <h1 className="text-2xl font-bold mb-4 md:text-4xl">
          Produtos Disponíveis
        </h1>

        {/* Botão para ordenar */}
        <button
          onClick={sortProducts}
          className="mb-3 text-xs bg-blue-500 text-white p-2.5 rounded hover:bg-blue-600 md:text-sm"
        >
          Ordernar por preço:{" "}
          {sortOrder === "asc" ? "Maior para Menor" : "Menor para Maior"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg bg-white">
            {/* Clicar na imagem abre o menu flutuante */}
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-50 object-cover rounded-md mb-4 cursor-pointer"
              onClick={() => openProductModal(product)}
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.details}</p>
            <p className="text-green-600 font-bold mt-2">
              R$ {product.price.toFixed(2)}
            </p>
            <span className="text-sm text-gray-500">
              Vendido por: {product.seller}
            </span>
            <div className="mt-2">
              <span className="font-bold">Tamanhos:</span>{" "}
              {product.available_sizes.join(", ")}
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>

      {/* Menu Flutuante (Modal) */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-3 rounded-lg shadow-lg w-11/12 max-w-md md:max-w-lg lg:max-w-xl max-h-[90vh] flex flex-col overflow-y-auto relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 sm:right-20 "
              onClick={closeProductModal}
            >
              ❌
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <img
                src={selectedProduct.image_url}
                alt={selectedProduct.name}
                className="w-full sm:w-1/2 h-auto max-h-60 object-contain rounded-md"
              />
              <div className="flex flex-col">
                <p className="text-gray-600 text-sm">{selectedProduct.details}</p>
                <p className="text-gray-600 font-bold mt-2 ">
                  R$ {selectedProduct.price.toFixed(2)}
                </p>
                <span className="text-sm text-gray-500  ">
                  Vendido por: {selectedProduct.seller}
                </span>
                <div className="mt-2">
                  <span className="font-bold text-sm">Tamanhos:</span>{" "}
                  {selectedProduct.available_sizes.join(", ")}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;