import React from 'react';

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className=" flex justify-between  border-[#072047] border-t-[1px] px-[160px] py-[32px] ">
          <div>
            <p>© 2023, Vijay Singh Design. All Rights Reserved.</p>
          </div>
          <div className="flex gap-[32px]">
            <a href="#">Privacy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
