import '../index.css'
import img from '../../../../src/media/Ellipse.png'

export const Detail = () =>{
    return (
        <div className='divv'>
          <div className="detail__wrapper">
             <div className="detail1">
             <h2 className="detail1__wrapper-heading">
                 Hi, I am John, Creative Technologist
            </h2>
            <p className="detail1__wrapper-text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                sunt nostrud amet.
            </p>
            <button className="detail1__wrapper-btn">
                Download Resume
            </button>
             </div>
             <div className="detail2">
                <img src={img} alt='Ellipse'/> 
             </div>
          </div>
        </div>
    )
} 