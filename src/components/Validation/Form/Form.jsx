import { useState } from "react";
import styles from "./Form.module.css"

const Form = () =>{

    const [rating, setRatimg] = useState('');
    const [yourName,setYourName] = useState('');
    const [comment,setComment] = useState('');

    const [err,setErr] = useState(false)
    const [err1,setErr1] = useState(false)
    const [err2,setErr2] = useState(false)

    const valids = () =>{

        if(!rating){
            setErr(true)
        }
        if(yourName.length <=2){
            setErr1(true)
        }
        if(!comment){
            setErr2(true)
        }
        else{
            handleSubmit()
            setErr(false)
            setErr1(false)
            setErr2(false)
        }
    }

    const handleSubmit = () =>{

        alert(  `Rating:- ${rating}
                Your Name:- ${yourName}
                Commment:- ${comment}`)
        setRatimg('');
        setComment('');
        setYourName('');
    }

    return(
        <>
        <div className={styles.comment1}>
        <label>Rating</label>
        </div>

        <div>
        <select value={rating} onChange={(e)=>{setRatimg(e.target.value)}}>
            <option defaultChecked>Plzz select Rating</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>
        </div>
        {err && <span className={styles.error}>Plzz Enter Rating</span>}

        <div className={styles.comment1}>
            Your Name
        </div>

        <div>
        <input type="text" value={yourName} onChange={(e)=>{setYourName(e.target.value)}}/>
        </div>
        {err1 && <span className={styles.error}>Plzz Enter Your Name min of 2 char</span>}

        <div className={styles.comment}>
            Comment
        </div>

        <div>

        <input type="text" style={{width:'200px',height:'100px'}} value={comment} onChange={(e)=>{setComment(e.target.value)}}/>

        </div>
        <div >
        <button className={styles.btn} onClick={()=>{valids()}}>Submit</button>
        </div>
        {err2 && <span className={styles.error}>Plzz Enter Comment</span>}
        </>
    )
}

export default Form;