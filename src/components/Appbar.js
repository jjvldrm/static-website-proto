import Icon from '../icons/PDOLOGO3.png';
import './Appbar.css';


const Appbar = () => {
  return (

    <nav class='container'>
      <div class='appbarContainer'>
        <div class='logo'>
          <img src={Icon} alt='PDO Logo' class='icon' />
          <h1 class='title'>Protoapp </h1>
          <h2>Home</h2>
        </div>
      </div>
    </nav>

  )
};

export default Appbar;