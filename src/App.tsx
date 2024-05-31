import React from 'react';
import family from './family.svg';
import holiday from './going-holiday.svg'
import retire from './retire.svg'

import home from './home.svg';
import emfund from './em-fund.svg'
import debt from './debt.svg'
import contribution from './contribution.svg'
import './App.css'

function App() {
  return (
    <main >
        <div className='main-block'>
            <div className='block-one top-block'>
              <div className='inner-block'>
                <img className="image-block" src={family} alt="Family" />
                <p className="image-txt timeline-txt">Baby's birth</p>
              </div>
              <div className='triangle-down'></div>
              <div className='block-stripe'></div>
            </div>
            <div className='block-two top-block'>
              <div className='inner-block'>
                <img className="image-block" src={holiday} alt="holiday" />
                <p className="image-txt timeline-txt">Holiday</p>
              </div>
              <div className='triangle-down'>
              </div>
              <div className='block-stripe'>
              </div>
            </div>
            <div className='block-three top-block'>
              <div className='inner-block'>
                <img className="image-block" src={retire} alt="Family" />
                <p className="image-txt timeline-txt">Retire</p>
              </div>
              <div className='triangle-down'></div>
              <div className='block-stripe'></div>
              </div>
            
            

            <div className='container'>
            <div className='first-oval'>
                        <div className='first-oval-center'></div>
                    </div>
                <div className='line'></div>
                <div className='dot'></div>
                <div className='line'></div>
                <div className='dot'></div>
                <div className='line'></div>
                <div className='dot'></div>
                <div className='line'></div>
                <div className='dot'></div>
                <div className='dot-line'> </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="10ss" height="18" viewBox="0 0 10 16" fill="none"><path d="M8.87117 8.48836C9.26169 8.09783 9.26169 7.46467 8.87117 7.07414L2.50721 0.710183C2.11668 0.319658 1.48352 0.319658 1.09299 0.710183C0.70247 1.10071 0.70247 1.73387 1.09299 2.1244L6.74985 7.78125L1.093 13.4381C0.702471 13.8286 0.702471 14.4618 1.093 14.8523C1.48352 15.2428 2.11668 15.2428 2.50721 14.8523L8.87117 8.48836ZM6.78125 8.78125L8.16406 8.78125L8.16406 6.78125L6.78125 6.78125L6.78125 8.78125Z" fill="rgba(255, 255, 255, 1)"></path></svg>
            </div>
            <div className='txt-one timeline-txt'>You are here</div>
            <div className='bottom-block-one-stripe bottom-stripe'></div>

            <div className='bottom-block-one bottom-row-block'>
              <div className='bottom-inner-block'>
                <img className="image-block" src={home} alt="Family" />
                <p className="image-txt-bottom timeline-txt">New home</p>
              </div>
              <div className='triangle-up'></div>
            </div>

            <div className='txt-two timeline-txt'>In 1 year and 9 months</div>

            <div className='bottom-block-two-stripe bottom-stripe'></div>
            <div className='bottom-block-two bottom-row-block'>
            <div className='bottom-inner-block'>
            <img className="image-block" src={emfund} alt="Family" />
                <p className="image-txt-bottom timeline-txt">Emergency fund</p>
              </div>
              <div className='triangle-up'></div>
            </div>
            <div className='txt-three timeline-txt'>In 3 years and 2 months</div>
            <div className='txt-four timeline-txt'>In 4 years and 9 months</div>
            <div className='txt-five timeline-txt'>In 8 years and 11 months</div>
            <div className='txt-six-block'>

            </div>
            <div className='txt-six timeline-txt'>Ultimately</div>

            <div className='bottom-block-three-stripe bottom-stripe'></div>
            <div className='bottom-block-three bottom-row-block'>
            <div className='bottom-inner-block'>
            <img className="image-block" src={debt} alt="Family" />
                <p className="image-txt-bottom timeline-txt">Debt free</p>
              </div>
              <div className='triangle-up'></div>
            </div>
            
            <div className='bottom-block-four-stripe bottom-stripe'></div>
            <div className='bottom-block-four'>
              <div className='triangle-last-up'></div>
              <div className='bottom-inner-block-last'>
              <img className="image-block" src={contribution} alt="Family" />
            <p className="image-txt-last-bottom timeline-txt">Make a contribution to my community through philantrophy</p>
              </div>
           
            </div>
        </div>
    </main>
  );
}

export default App;
