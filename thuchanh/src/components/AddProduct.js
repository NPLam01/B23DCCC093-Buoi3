import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css'; // Import file CSS mới

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddProduct = () => {
    if (name.trim() && price.trim()) {
      const newProduct = {
        id: Date.now(),
        name,
        price,
      };
      dispatch(addProduct(newProduct));
      navigate('/');
    }
  };

  return (
    <div className="add-product-container">
      <h2>Thêm Hàng Hóa</h2>
      <div className="input-group">
        <label>Tên hàng hóa</label>
        <input
          type="text"
          placeholder="Nhập tên hàng hóa"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Giá tiền (VND)</label>
        <input
          type="number"
          placeholder="Nhập giá tiền"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button className="add-product-button" onClick={handleAddProduct}>
        Thêm Sản Phẩm
      </button>
    </div>
  );
};

export default AddProduct;
