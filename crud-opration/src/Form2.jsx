import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const initinal = {
    name: "",
    email: "",
};

const Home = () => {
    const [details, setDetails] = useState(initinal);
    const [value, setvalue] = useState([]);
    const [updateid, setUpdateid] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((e) => ({
            ...e,
            [name]: value,
        }));
    };
  const handleSubmit = async (e) => {
        e.preventDefault();
      if (updateid) {
  patchData(updateid)
      } else {
        postData()
}
    };


  const postData = async() => {
        try {
            await axios.post("http://localhost:8080/data", details);
            alert("submitted");
            getData();
        } catch (error) {
            console.log(error);
        }
        setDetails(initinal);
  }
    const getData = async () => {
        try {
            let res = await axios.get("http://localhost:8080/data");
            // console.log(res);
            setvalue(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getdelData = async (id) => {
        try {
            let res = await axios.delete(`http://localhost:8080/data/${id}`);
            console.log(res);
            alert("deleted");
            getData();
        } catch (error) {
            console.log(error);
        }
    };



  const updateData = (id) => {
    let selectitem = value.find((ele) => ele.id === id)
    if (selectitem) {
      setDetails(selectitem)
      setUpdateid(id)
    }
  }

  const patchData = async(id) => {
          try {
            let res = await axios.patch(`http://localhost:8080/data/${id}`, details);
            setDetails(res.data)
            getData();
        } catch (error) {
            console.log(error);
    }
    setDetails(initinal)
    setUpdateid(null)
}

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div className="form">
                <form action="">
                    <label htmlFor="name">name</label>
                    <input
                        name="name"
                        value={details.name}
                        onChange={handleChange}
                        type="text"
                        placeholder=" enter name"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        value={details.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                    <button onClick={handleSubmit} type="submit">
                        {updateid ? "Update" : "Submit"}
                    </button>
                </form>
            </div>
            <div className="card_div">
                {value.map((ele) => {
                    return (
                        <div className="card_details">
                            <h1>{ele.name}</h1>
                            <h3>{ele.email}</h3>
                            <button onClick={() => getdelData(ele.id)}>
                                Delete
                            </button>

                            <button onClick={() => updateData(ele.id)}>
                                update
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Home;
