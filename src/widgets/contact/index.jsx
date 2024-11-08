import React from 'react';
import Button from '../../shared/ui/button';

function Contact() {
  return (
    <React.Fragment>
      <section className="bg-[#E5BA8733] mt-[50px] mb-[60px]">
        <div className=" flex-col items-center justify-center py-[108px] px-[300px] text-center">
          <h3 className="font-bold text-[54px] leading-[70px] mb-[20px]">
            Need an illustration or have an idea for a website?
          </h3>
          <h6 className="text-2xl font-medium mb-[40px]">
            Simple get in touch and tell me all about it.
          </h6>
          <Button size={'base'} variant={'secondary'} className="mx-auto">
            Contact us
          </Button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
