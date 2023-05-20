import React from 'react';
import { SelectedPage } from '../../shared/types';
import ActionButton from '../../shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png';
import useMediaQuery from '../../hooks/useMediaQuery';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';



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
      <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
        {/* Main Header */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* Headings */}
          <div className='md:-mt-20'>
            <div className='relative'>
              <div className='before:absolute before:-top-20 md:before:content-evolvetext before:z-[-1] before:-left-20'>
                <img src={HomePageText} alt="Home page text" />
              </div>
            </div>
              <p className='mt-8 text-sm'>
                Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of. Get Your Dream Now!
              </p>
          </div>
            {/* Actions */}
            <div className='mt-8 flex items-center gap-8 md:justify-start'>
              <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              <AnchorLink
                className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                onClick={()=>setSelectedPage(SelectedPage.Contact)}
                href={`#${SelectedPage.Contact}`}
              >
                <p>Learn More</p>
              </AnchorLink>
            </div>
        </div>

        {/* Image */}
        <div>
          <img src={HomePageGraphic} alt="Home page graphic" />
        </div>
      </div>

      {/* Sponsors */}
      {isAboveMediumScreens&&(
        <div>
          <div>
            <div>
              <img src={SponsorRedBull} alt="Redbull" />
              <img src={SponsorForbes} alt="Forbes" />
              <img src={SponsorFortune} alt="Fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home;


