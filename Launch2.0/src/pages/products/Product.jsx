import React from 'react';
import '../../css/products/product.css'

export default function Product() {
  const ProductList=[{
    title:"CRM",
    content:"Myinception Customer Relationship Management (CRM) systems enable companies to track and manage all customer interactions across the customer lifecycle from lead to order to support in one master system of record. Myinception is in venture of providing CRM support for its clients."
  },
  {
    title:"HRMS",
    content:"Myinception HRMS is a free HR management system that offers a wealth of modules to suit the needs of your business. This widely-used system is feature-rich, intuitive and provides an essential HR management platform along with free documentation and access to a broad community of users."
  },
  {
    title:"ERP",
    content:"Myinception ERP provides manufacturers the best choice for reliable, real-time ERP software with lean and agile functionality developed especially for manufacturing processes. Myinception ERPprovides a solution to fit your needs irrespective of whether you are a small."
  },
  {
    title:"Android App",
    content:"Myinception ERP provides manufacturers the best choice for reliable, real-time ERP software with lean and agile functionality developed especially for manufacturing processes. Myinception ERPprovides a solution to fit your needs irrespective of whether you are a small."
  }

];
  return (
    <div className='container'>
        <h1 className='product-title'>Products</h1>
        <p className='product-content'>Myinception offers a wide range of recruitment solutions that are configurable to your business needs. Our well trained and domain specific consultants will ensure that we deliver the high standards of service and value you would expect from your recruitment service provider.</p>
       
       <div className='card-container'>
       { ProductList.map((product,index)=>(
         
         
          <div key={index} className='card'>
            <h2 className="card-title">{product.title}</h2>
            <p className="card-body">{product.content}</p>
            <button className='btn'>Read more</button>
          </div>

        )
        )}
    </div>
    </div>
  )
}
