import React from 'react';
import { SelectedPage } from '../../shared/types';
import ActionButton from '../../shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png';
import useMediaQuery from '../../hooks/useMediaQuery';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';



type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens=useMediaQuery("(min-width:1060px)")
  return (
    <section
      id='home'
      className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
    >
      {/* Image and Main Header */}
      <div>
        {/* Main Header */}
        <div>
          {/* Headings */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="Home page text" />
              </div>
            </div>
              <p>
                Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of. Get Your Dream Now!
              </p>
          </div>
            {/* Actions */}
            <div>
              <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            </div>
        </div>

        {/* Image */}
        <div></div>
      </div>
    </section>
  )
}

export default Home;


