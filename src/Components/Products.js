import ProductList from '../Data/products.json'
import {useState} from 'react';

function Products() {
    const [searchTitle, setSearchTitle] = useState('')
    const [searchCat, setSearchCat] = useState('')
    return (
      <div className="Products">
        <table>
            <tr>
                <th>
                    Product Title
                    {/* <input type="text" placeholder="Search" onChange={event => {setSearchTitle(event.target.value)}}/> */}
                </th>
                <th>
                    Category
                    {/* <input type="text" placeholder="Search" onChange={event => {setSearchCat(event.target.value)}}/> */}
                </th>
                <th>Price</th>
                <th>Rating</th>
            </tr>
            {ProductList.filter((product) => {
                if (searchTitle == "") {
                    return product
                } else if (product.title.toLowerCase().includes(searchTitle.toLowerCase())){
                    return product
                }
            }).map((product, index) => {
                return <tr>
                    <td>{product.title}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.rating.rate}</td>
                </tr>
            })}
            {/* <tr>
                <td>
                    {ProductList.filter((product) => {
                        if (searchTitle == "") {
                            return product
                        } else if (product.title.toLowerCase().includes(searchTitle.toLowerCase())){
                            return product
                        }
                    }).map((product, index) =>{
                        return <p>{product.title}</p>
                    })}
                </td>
                <td>
                    {ProductList.filter((product) => {
                        if (searchCat == "") {
                            return product
                        } else if (product.category.toLowerCase().includes(searchCat.toLowerCase())) {
                            return product
                        }
                    }).map((product, index) =>{
                        return <p>{product.category}</p>
                    })}
                </td>
                <td>
                    {ProductList.map((product, index) =>{
                        return <p>{product.price}</p>
                    })}
                </td>
                <td>
                    {ProductList.map((product, index) =>{
                        return <p>{product.rating.rate}</p>
                    })}
                </td>
            </tr> */}
        </table>
      </div>
    );
  }
  
  export default Products;