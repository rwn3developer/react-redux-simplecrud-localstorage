import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_RECORD , DELETE_RECORD , EDIT_RECORD , UPDATE_RECORD } from "./action";

const Counter = () => {

    const dispatch = useDispatch();
    const allrecord = useSelector(state => state.counterReducer.record);
    const single = useSelector(state => state.counterReducer.edit);
    

    const [record,setRecord] = useState([])
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [iseditid,setIsEditId] = useState("");

    const handleSubmit = () => {
        let obj = {
            id : Math.floor(Math.random() * 1000),
            name : name,
            phone : phone
        }
       if(iseditid){
            dispatch(UPDATE_RECORD(obj,iseditid));
            alert("Record successfully Edit!!");
            setIsEditId("");
       }else{
        dispatch(ADD_RECORD(obj));
        alert("Record successfully insert");
       }
      
       setName("");
       setPhone("")
    }

    useEffect(()=>{
        setRecord(allrecord)
    },[allrecord])

    useEffect(()=>{
       setName(single.name);
       setPhone(single.phone);
       setIsEditId(single.id)
    },[single])

   

    return (
        <>
            <center>
                <h1>Add Record</h1>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name : </td>
                            <td><input type="text" onChange={ (e) => setName(e.target.value) } value={name}/></td>
                        </tr>
                        <tr>
                            <td>Phone : </td>
                            <td><input type="text" onChange={ (e) => setPhone(e.target.value) } value={phone}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                {
                                    iseditid ? (<input type="button" onClick={ () => handleSubmit() } value="Edit"/>) : (<input type="button" onClick={ () => handleSubmit() } value="submit"/>)
                                }
                                
                            </td>
                        </tr>
                    </tbody>
                </table><br></br>

                <table border={1}>
                    <tr>
                      
                            <td>Id</td>
                            <td>Name</td>
                            <td>Phone</td>
                            <td>Action</td>
                       
                    </tr>

                    <tbody>
                        {
                            record.map((val)=>{
                                return (
                                    <tr key={val.id}>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.phone}</td>
                                        <td>
                                            <button onClick={ () => dispatch(DELETE_RECORD(val.id)) }>Delete</button> ||
                                            <button onClick={ () => dispatch(EDIT_RECORD(val.id)) }>Edit</button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>          
                        

                </table>
                
            </center>
        </>
    )
}

export default Counter;