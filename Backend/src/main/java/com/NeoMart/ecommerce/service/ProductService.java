package com.NeoMart.ecommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.NeoMart.ecommerce.dao.ProductDao;
import com.NeoMart.ecommerce.entity.Product;

@Service
public class ProductService {
	
	@Autowired
	private ProductDao productDao;
	
	public Product addNewProduct(Product product) {
		return productDao.save(product);
	}
	
	public List <Product> getAllProducts(){
		return (List<Product>)productDao.findAll();
	}
	
	public Product getProductDetailsById(Integer productId) {
		return productDao.findById(productId).get();
	}
	
	public void deleteProductDetails(Integer productId){
		productDao.deleteById(productId);
	}
}
