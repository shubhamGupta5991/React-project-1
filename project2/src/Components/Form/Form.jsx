import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";

const Form = () => {
  const [name,setName]= useState('')
const submit = (e)=>{
  e.preventDefault();
  console.log(e)
  setName(e.target[0].value)
}

  return (
    <div className={styles.parent}>
      <div className={styles.child_container}>
        <Button content="VIA CHAT SUPPORT" onClick={()=>console.log('i was clicked')} />
        <Button content="VIA CALL" />
        <Button content="VIA EMAIL FORM" isSelected={true} />
        <form onSubmit={submit}>
          <div className={styles.control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"  />
          </div>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="6"></textarea>
          </div>
          <div style={{display:'flex',justifyContent: 'end'}}>
            <Button content="SUBMIT" />
          </div>
          <p>{name}</p>
        </form>
      </div>
      <div className="contact_icon">
        <img src="/images/contact.svg" alt="contact_logo" />
      </div>

      
    </div>
  );
};

export default Form;
