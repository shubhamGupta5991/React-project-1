import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
  <>
  <nav className={styles.container}>
    <div>
      <img src="/images/logo.png" alt="logo" />
    </div>
    <ul>
      <li>Home</li>
      <li>Contact</li>
      <li>About</li>
    </ul>
  </nav>
  </>
  )
}

export default Navbar