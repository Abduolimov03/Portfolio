import '../index.css'

export const Recent = () =>{
  return (
    <>
    <div className='div'>
     <div className='container1'>
      <ul className='div__list'>
        <li className='div__list-item1'>
            Resent post
        </li>
        <li className='div__list-item2'>
            <a className='div__list-link1' href='#'>
                View all
            </a>
        </li>
      </ul>
      <div className='div2'>
      <div className='design'>
        <h2 className='design__heading'>
            Making a design system from scratch
        </h2>
        <ul className='design__list'>
            <li className='design__list-item1'>
                12 Feb 2020
            </li>
            <span className='span'></span>
            <li className='design__list-item2'>
                Design,Pattern
            </li>
        </ul>
        <p className='design__text'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className='pixel'>
        <h2 className='pixel__heading'>
            Creating pixel perfect icons in Figma
        </h2>
        <ul className='pixel__list'>
            <li className='pixel__list-item1'>
                12 Feb 2020
            </li>
            <span className='span1'></span>
            <li className='pixel__list-item2'>
                Design,Pattern
            </li>
        </ul>
        <p className='pixel__text'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}