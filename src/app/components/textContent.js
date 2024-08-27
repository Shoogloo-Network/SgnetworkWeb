import React from "react";

const TextContent = () => {
  return (
    <>
      <section className="bg-[#FFF8F1] block sm:flex items-center justify-between w-full py-4 px-2 sm:p-14">
        <div className="block sm:flex items-start flex-col w-full sm:w-2/5 p-5 pl-2 sm:pl-10 ml-0 sm:ml-5 h-auto sm:h-[270px]">
          <h2 className="text-xl text-orange-600 uppercase ml-1 text-left sm:text-center">About Us</h2>
          <p className="my-2 uppercase text-[28px] sm:text-5xl m-0">
            <span className="py-2 inline-block">Shoogloo</span>  <span className="py-2 inline-block font-bold">Network</span>
          </p>
        </div>
        <div className="block sm:flex items-center justify-center w-full sm:w-3/5 h-auto sm:h-[270px]">
          <p className="text-[14px] sm:text-lg leading-[30px] sm:leading-[42px] tracking-normal text-left font-normal px-2 sm:px-20 ">
          Our Strength Lies in Providing Quality Conversions to Our Clients in
          Ecommerce, Travel, Mobile, Software & Banking Segments. We Aim to
          Provide Complete Transparency to Our Partners & Encourage Them to Do
          the Same. With Over 30 Years Of Experience In Digital Marketing Our
          Ideas And Suggestions Have Helped Many Clients To Grow Their Business
          By 5x Or More.
          </p>
        </div>
      </section>
    </>
  );
};

export default TextContent;
