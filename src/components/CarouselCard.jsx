import React from "react";

const CarouselCard = ({company, border = false}) => {

  let background = company?.background ? `${company?.background}` : `#FFFFFF`;
  let tileStyling = `lg:h-[15rem] h-[7.5rem] w-[12rem] lg:w-[24rem] lg:px-[6.3125rem] lg:py-[6rem] px-[2rem] py-[3rem] rounded-small mb-[1.5rem] flex items-center justify-center ${border && !company?.background ? 'border-2 border-borderGray' : ''}`

  return (
    <a href={company.url} target="_BLANK" className='no-underline carousel-item text-center relative snap-start'>
      <div className={tileStyling} style={{backgroundColor: background}}>
        <img src={company.logo} alt={company.name} />
      </div>
      <div className="text-left">
        <p className="mb-2 text-[1rem] lg:mb-0 lg:text-[1.375rem] text-black font-[700] leading-[120%] tracking-[-0.03438rem] flex items-center">{company.name}
          <span className="ml-[0.69rem]">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M1 2H13M13 2V14M13 2L1 14" stroke="#191919" stroke-width="2.3"/>
          </svg>
          </span>
        </p>
        <p className="text-[1rem] lg:text-[1.375rem] text-black font-[500] leading-[120%] tracking-[-0.03438rem]">Since {company.adoption}</p>
      </div>
    </a>
  )

}

export default CarouselCard;
