import '../index.css'; 
import img1 from '../../../../src/media/rasm1.png'
import img2 from '../../../../src/media/rasm2.png'
import img3 from '../../../../src/media/rasm3.png'

export const Work = () =>{
    return (
        <>
        <h1 className='work__heading'>Featuredd Works</h1>
        <ul className='work__list'>
            <img className='work__images' src={img1} alt="" />
            <li className='work__list-item'>
                <h2 className='work__item-heading'>
                Designing Dashboards
                </h2>
                <div className='work__item-div'>
                    <span className='work__item-div-spn'>
                        2020
                    </span>
                    <p className='work__item-div-text'>
                        Dashboart
                    </p>
                </div>
                <p className='work__item-text'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </li>
        </ul>
        <span className='span2 '>
            
        </span>
           
        <ul className='work__list'>
             <img className='work__images' src={img2} alt="" />
            <li className='work__list-item'>
                <h2 className='work__item-heading'>
                Vibrant Portraits of 2020
                </h2>
                <div className='work__item-div'>
                    <span className='work__item-div-spn'>
                        2018
                    </span>
                    <p className='work__item-div-text'>
                    Illustration
                    </p>
                </div>
                <p className='work__item-text'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </li>
        </ul>
        <ul className='work__list'>
            <img className='work__images' src={img3} alt="" />
            <li className='work__list-item'>
                <h2 className='work__item-heading'>
                36 Days of Malayalam type
                </h2>
                <div className='work__item-div'>
                    <span className='work__item-div-spn'>
                        2018
                    </span>
                    <p className='work__item-div-text'>
                    Typography
                    </p>
                </div>
                <p className='work__item-text'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </li>
        </ul>
        


        </>
    )
}