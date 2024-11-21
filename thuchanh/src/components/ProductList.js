import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../store';
import { Link } from 'react-router-dom';
import './ProductList.css';


const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  // Tính tổng giá trị sản phẩm
  const totalPrice = useMemo(() => {
    return products.reduce((total, product) => {
      const price = parseFloat(product.price) || 0; // Chuyển giá trị về số
      return total + price;
    }, 0);
  }, [products]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container">
      <h2>Danh Sách Hàng Hóa</h2>
      <input type="text" placeholder="Tìm kiếm hàng hóa..." />
      <Link to="/add-product" className="add-product">Thêm Hàng Hóa</Link>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Hàng</th>
            <th>Giá (VND)</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="4">Không có sản phẩm nào!</td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{parseFloat(product.price).toLocaleString()} VND</td>
                <td>
                  <Link to={`/edit-product/${product.id}`} className="edit">Sửa</Link>
                  <button onClick={() => handleDelete(product.id)} className="delete">Xóa</button>
                </td>
              </tr>
            ))
          )}
          {products.length > 0 && (
            <tr>
              <td colSpan="2" style={{ fontWeight: 'bold', textAlign: 'right' }}>Tổng giá trị:</td>
              <td style={{ fontWeight: 'bold' }}>{totalPrice.toLocaleString()} VND</td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        <button disabled>Trang trước</button>
        <span>Trang 1 / 0</span>
        <button>Trang sau</button>
      </div>
    </div>
  );
};

export default ProductList;
