import { Container } from '../container';
import AboutImage from './AboutImage';
import AboutInfo from './AboutInfo';
import DecorationsAbout from './DecorationsAbout';
import Values from './Values';

const AboutSection = () => {
  return (
    <>
      <div className='relative z-[3] overflow-hidden bg-[#FAFAFA] px-4 pb-[30px] pt-[50px] sm:gap-[40px] sm:px-6 sm:pb-[40px]'>
        <DecorationsAbout />
        <Container className=''>
          <div className='flex flex-col items-center justify-center gap-[30px] sm:pt-[70px] lg:flex-row lg:gap-[50px] lg:px-0 lg:pb-[50px] lg:pt-[100px]'>
            <AboutInfo />
            <AboutImage />
          </div>
        </Container>
      </div>
      <Values />
    </>
  );
};

export default AboutSection;
