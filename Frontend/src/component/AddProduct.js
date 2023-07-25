import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Heading,
    Text,
    Button,
    Flex
} from '@chakra-ui/react'
import Axios from 'axios';

function AddProduct() {
    const [productname, setProductname] = useState(" ")
    const [code, setCode] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [created_at, setCreated_at] = useState("")
    const [productsList, setProductsList] = useState([])
    
    //Function สำหรับการเพิ่มสินค้า
    const addProducts = () => {
        Axios.post('http://localhost:3001/create', {
            productname: productname,
            code: code,
            quantity: quantity,
            created_at: created_at

        }).then(() => {
            setProductsList([
                ...productsList,
                {
                    productname: productname,
                    code: code,
                    quantity: quantity,
                    created_at: created_at
                }
            ])
        })
    }
    //Function สำหรับการดึงข้อมูลสินค้า
    const getProducts = () => {
        Axios.get('http://localhost:3001/').then((response) => {
            setProductsList(response.data)
        })
    }

    return (
        //Form การเพิ่มข้อมูลสินค้า และ การดึงข้อมูลสินค้า
        <Flex p={[6,4]} pt={["6rem","null"]} 
        maxWidth={["200px","400px"]} 
        mx="auto" 
        alignItems="center" 
        justifyContent="center" 
        fontFamily={"KanitRegular"}>
            <Flex
                flexDirection="column"
                p={12}
                borderRadius={8}
                boxShadow="lg">

                <Box >
                    
                    <Heading mb={4}>Add Product</Heading>
                    <form >
                        <FormControl >
                            <FormLabel>Name: </FormLabel>
                            <Input type="text" onChange={(even) => {
                                setProductname(even.target.value)
                            }} />
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Code:</FormLabel>
                            <Input type="text" onChange={(even) => {
                                setCode(even.target.value)
                            }} />
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Quantity:</FormLabel>
                            <Input
                                type="number"
                                onChange={(even) => {
                                    setQuantity(even.target.value)
                                }}
                            />
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Created_At:</FormLabel>
                            <Input
                                type="datetime-local"
                                onChange={(even) => {
                                    setCreated_at(even.target.value)
                                }}
                            />
                        </FormControl>
                        <Button mt={4} type="submit" onClick={addProducts} bgColor={"#38A169"} _hover={{ borderColor: "#38A169", border: "2px", bgColor: "white", color: "#38A169" }} width='full' color="white">
                            Add Product
                        </Button>
                    </form>


                </Box>
                <Box>
                    <br />
                    
                    <Heading my={4}> All Products</Heading>
                    <Button mt={4} type="submit" onClick={getProducts} bg="#f9a825" _hover={{ borderColor: "#f9a825", color: "#f9a825", bg: "white" }}
                        color='#white'>
                        Show All Product
                    </Button>
                    
                    {productsList.map((val, key) => {
                        return (

                            <Box>
                                <br/>
                                <Text>Name: {val.productname}</Text>
                                <Text>Code: {val.code}</Text>
                                <Text>Quantity: {val.quantity}</Text>
                                <Text>Created_At: {val.created_at}</Text>
                            </Box>

                        )

                    })}
                </Box>

            </Flex>
        </Flex>

    )
}
export default AddProduct
