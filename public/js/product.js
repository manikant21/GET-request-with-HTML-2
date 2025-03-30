const handleOnSubmit = (e) => {
    e.preventDefault();
    const product = e.target.productName.value;
    const obj = {
        "productName": product 
    }
    console.log(obj);

    axios.post("http://localhost:3000"+"/api/products", obj).then((result) => {
        console.log("Value returned from post request: "+ result.data.value);
    })
}