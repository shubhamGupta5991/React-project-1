import styles from "./Button.module.css";

const Button = ( {content,isSelected} ) => {
  return(
    <div style={{display:'inline-block',marginRight:'24px'}}>
      <button className={isSelected?styles.otherVariant:styles.button}>
    {content}
  </button>
    </div>)
  
};

export default Button;
