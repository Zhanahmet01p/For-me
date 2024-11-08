import React from 'react';
import Koala from '../components/images/Koala.png';
import Ratata from '../components/images/Ratata.png';
import Tiger from '../components/images/Tiger.png';
import Crock from '../components/images/Crock.png';

function Illustrations() {
  return (
    <React.Fragment>
      <section className="mt-[330px]">
        <div className="flex flex-wrap justify-between gap-y-[90px]">
          <div className="flex-col w-[49%]">
            <img src={Koala} alt="Koala" className="mb-[18px]" />
            <p className="text-2xl font-bold">Koala time illustration</p>
          </div>
          <div className="flex-col w-[49%]">
            <img src={Ratata} alt="Ratata" className="mb-[18px]" />
            <p className="text-2xl font-bold">Koala time illustration</p>
          </div>
          <div className="flex-col w-[49%]">
            <img src={Tiger} alt="Tiger" className="mb-[18px]" />
            <p className="text-2xl font-bold">Koala time illustration</p>
          </div>
          <div className="flex-col w-[49%]">
            <img src={Crock} alt="Alligator" className="mb-[18px]" />
            <p className="text-2xl font-bold">Koala time illustration</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Illustrations;
