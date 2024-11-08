import React from 'react';
import Beehive from '../../shared/assets/icons/Beehive';
import Chemistry from '../../shared/assets/icons/Chemistry';
import Looksmart from '../../shared/assets/icons/Looksmart';
import Cloud from '../../shared/assets/icons/Cloud';

function Company() {
  return (
    <React.Fragment>
      <section className="mt-[126px] mb-[200px]">
        <div>
          <h5 className="text-[26px] font-semibold text-center mb-[72px]">
            I’m trusted by the best in the industry.
          </h5>
          <div className="flex justify-between">
            <div className="flex gap-[14px] items-center">
              <Beehive /> <p className="font-bold text-[32px]">Beehive</p>
            </div>
            <div className="flex gap-[10px] items-center">
              <Chemistry /> <p className="font-bold text-[32px]">Chemistry</p>
            </div>
            <div className="flex gap-[9px] items-center">
              <Looksmart /> <p className="font-bold text-[32px]">Looksmart</p>
            </div>
            <div className="flex items-center">
              <Cloud /> <p className="font-bold text-[32px]">Cloud</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Company;
