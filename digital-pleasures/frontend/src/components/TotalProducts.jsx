import { useEffect, useState} from "react";

const TotalProducts = (props) => {
    let [products, setProducts] = useState([])

useEffect( ()=> {
     async function products(req, res){
        try {
            const data = await fetch('http://localhost:3000/api/products')
            const rtaData = await data.json()
            setProducts(res.rtaData)
        } catch (error) {
            console.error(error)
        }    
    }

    products()
},[])

return(
    <div className="item">
        <TotalProducts dataProducts={products} />
      </div>
)
}

export default TotalProducts