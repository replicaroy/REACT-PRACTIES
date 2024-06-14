import Useapi from "./Useapi";


const Contact = () => {
    const {data, loading} = Useapi('https://fakestoreapi.com/products');
    if (loading) return <p>Loading...</p>;
    return(
        
        <div>
            {data.map(ele=>(
                <div  key={ele.id} className="img">
                    <img src={ele.image} alt="image" />
                    <p>{ele.title}</p>
                    <p>{ele.price}</p>
                    <p>{ele.rating.rate}</p>
                </div>
            ))}
        </div>
      
    )
};

export default Contact;


























// const{data,getdata}=Useapi("https://fakestoreapi.com/products")
// console.log(data,"contact");