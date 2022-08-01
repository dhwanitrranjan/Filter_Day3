import React , {useState} from 'react'
import ProductList from '../Data/products.json'

export default function Filter() {
    const [data, setData] = useState(ProductList)
    const [titleVal, setTS] = useState('')
    const [CatVal, setTC] = useState('')
    const [flag, setFlag] = useState(false)
    const [flagCat, setFlagCat] = useState(false)

    const clickhandle = () => 
        {ProductList.filter((product) => 
            (product.title.toLowerCase().includes(titleVal) || product.title ===""))
            .filter((product) =>
            (product.category.toLowerCase().includes(CatVal) || product.Category === "")
        ).map((product, index) => {
            console.log(product.title);
        })
    }

    const handleSort =() =>{
        var d = [...data]
        d.sort(function(a,b) {
            return a.title.localeCompare(b.title)
        })
        if (flag === true){
            d.reverse(function(a,b) {
                return a.title.localeCompare(b.title)
            })
        }
        setData(d)
        setFlag(!flag) 
    }

    const handleSortCat =() =>{
        var d = [...data]
        d.sort(function(a,b) {
            return a.category.localeCompare(b.category)
        })
        if (flagCat === true){
            d.reverse(function(a,b) {
                return a.category.localeCompare(b.category)
            })
        }
        setData(d)
        setFlagCat(!flagCat) 
    }


    return (
        <div>
            <table>
                <tr>
                    <th>Product Title
                        <br/>
                        <input type="text" placeholder="Filter by Title" onChange={(e) => setTS(e.target.value.toLowerCase())}/>
                        <button onClick={handleSort}>Sort</button>
                    </th>
                    <th>Category
                        <br/>
                        <input type="text" placeholder="Filter by Category" onChange={(e) => setTC(e.target.value.toLowerCase())}/>
                        <button onClick={handleSortCat}>Sort</button>
                    </th>
                    <th>Price</th>
                    <th>Rating</th>
                </tr>
                {data.filter((product) => 
                    (product.title.toLowerCase().includes(titleVal) || product.title ===""))
                    .filter((product) =>
                    (product.category.toLowerCase().includes(CatVal) || product.Category === "")
                ).map((product, index) => {
                    return (<tr>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.rating.rate}</td>
                    </tr>)
                })
                }

            </table>
            <button onClick={clickhandle}>Submit</button>
        </div>
    )


}
