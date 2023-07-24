// import React from 'react'
// import { ChakraProvider } from '@chakra-ui/react'
// import AddProduct from './component/AddProduct'

// function App() {
//   return (
//     <div>
//       <ChakraProvider>
//         <AddProduct />
//       </ChakraProvider>
//     </div>
//   )
// }

// export default App
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Product from './component/Product';
// import UpdateProduct from './component/UpdateProduct';
import AddProduct from './component/AddProduct';
import Login from './component/Login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/create' element={<AddProduct />}>
          </Route>
        
          {/* <Route path='/create' element={<AddProduct />}>
          </Route> */}
          {/* <Route path='/update/:id' element={<UpdateProduct />}>
          </Route> */}
          <Route path='/' element={<Login />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>);
}
export default App;
