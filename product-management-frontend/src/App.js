import React, { useState } from 'react';
import { Container, Typography, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import io from 'socket.io-client';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const socket = io(API_URL);

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleOpenForm = () => {
    setIsFormOpen(true);
    setEditingProduct(null);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingProduct(null);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Product Management
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpenForm}>
        Add New Product
      </Button>
      <ProductList socket={socket} onEdit={handleEdit} />
      <Dialog open={isFormOpen} onClose={handleCloseForm}>
        <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
        <DialogContent>
          <ProductForm product={editingProduct} onClose={handleCloseForm} />
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default App;