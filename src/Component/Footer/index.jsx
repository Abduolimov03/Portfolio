import './index.css' 
import fecebook from '../../../src/media/f.png'
import insta from '../../../src/media/insta.png'
import twit from '../../../src/media/twit.png'
// import in from '../../../src/media/in.png'
import yozuv from '../../../src/media/yozuv.png'


export const Footer = () => {
    return (
        <footer>
            <div className='footer__div1'>
                <ul className='footer__list'>
                    <li className='footer__list--item'>
                        <img className='footer__list--item-img' src={fecebook} alt="" />
                    </li>
                    <li className='footer__list--item'>
                        <img className='footer__list--item-img' src={insta} alt="" />
                    </li>
                    <li className='footer__list--item'>
                        <img className='footer__list--item-img' src={twit} alt="" />
                    </li>
                    <li className='footer__list--item'>
                        <img className='footer__list--item-img' src={insta} alt="" />
                    </li>
                </ul>
            </div>
            <div className='footer__div2'>
                <img className='footer__div2--img' src={yozuv} alt="" />
            </div>
        </footer>
    )
}