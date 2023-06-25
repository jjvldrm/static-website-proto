import Icon from '../icons/PDOLOGO3.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='mahaba'>
                <div className='logo'>
                    <img src={Icon}></img>
                </div>
                <div className='text'>
                    <p className='p1'>Protoapp</p>
                    <p className='camp'>Camp One Inc., LLC</p>
                    <p className='que'>Que ad Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui reprehenderit rerum ullam necessitatibus, at ab quae expedita illo, nobis ipsum maxime assumenda dolorum quo ut deleniti possimus. Eveniet, volluptatem, provident.</p>
                </div>
            </div>
            <div className='credits'>
            © 2019 Protoapp. All rights reserved.
            </div>
        </div>
    )
};

export default Footer;