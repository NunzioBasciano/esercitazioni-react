import { useEffect, useState } from "react"
import { labels } from "./assets/data/labels"
import { getProductList } from './api/productClient'



function App() {

  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
      const data = await getProductList();
      setProductList(data);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  useEffect(() => {
    console.log(productList);
  }, [productList])


  if (isLoading) return <p>is Loading...</p>
  return (
    <>


      <div className="flex justify-center">
        <main className="w-[1200px]">
          <div className="p-8">
            <h1 className="">{labels.productList}</h1>
          </div>
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{labels.productTableName}</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{labels.totalTableBarcode}</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{labels.totalTableCost}</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{labels.priceTablePrice}</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{labels.quantityTableQuantity}</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">

              {productList.map((product) => {
                return (

                  <tr key={product.id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{product.name}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.barcode}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">€{product.cost}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">€{product.price}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.quantity}</td>
                    <td className="whitespace-nowrap px-4 py-2">
                      {/* <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a> */}
                    </td>
                  </tr>
                )
              })
              }


            </tbody>
          </table>
        </main>
      </div>


    </>
  )
}

export default App
