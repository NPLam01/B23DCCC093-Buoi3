import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../store';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const productToEdit = products.find((product) => product.id === parseInt(id));

  const [name, setName] = useState(productToEdit?.name || '');
  const [price, setPrice] = useState(productToEdit?.price || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateProduct = () => {
    if (name.trim() && price.trim()) {
      const updatedProduct = {
        id: productToEdit.id,
        name,
        price,
      };
      dispatch(updateProduct(updatedProduct));
      navigate('/');
    }
  };

  return (
    <div className="container">
      <h2>Sửa Hàng Hóa</h2>
      <input
        type="text"
        placeholder="Tên hàng hóa"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá tiền"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleUpdateProduct}>Cập nhật</button>
    </div>
  );
};

export default EditProduct;