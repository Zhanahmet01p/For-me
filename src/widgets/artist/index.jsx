import React from 'react';
import Button from '../../shared/ui/button.jsx';
import Profileimg from '../components/images/profile.png';

function Artist() {
  return (
    <React.Fragment>
      <section className="mt-[95px] flex justify-between items-center">
        <div className="w-[80%]">
          <h1 className="text-8xl font-bold mb-[26px] ">Hi, introducing me, a Digital Artist</h1>
          <div className="text-[26px] font-semibold mb-[26px] leading-10 w-[70%]">
            Illustrator and designer extraordinaire, please browse my works and let’s talk.
          </div>
          <Button size={'base'} variant={'primary'}>
            My Portfolio
          </Button>
        </div>
        <div>
          <img className="w-full h-full" src={Profileimg} alt="Profile" />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Artist;
