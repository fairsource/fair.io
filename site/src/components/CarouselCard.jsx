const CarouselCard = ({company}) => {

  let background = company?.background ? `${company?.background}` : `#FFFFFF`;
  let tileStyling = `h-[15rem] w-[24rem] px-[6.3125rem] py-[6rem] rounded-small`

  return (
    <a href={company.url} target="_BLANK" className='carousel-item text-center relative'>
      <div className={tileStyling} style={{backgroundColor: background}}>
        <img src={company.logo} alt={company.name} />
      </div>
      <div>
        <p>{company.background}</p>
        <p>{company.name}</p>
        <p>Since {company.adoption}</p>
      </div>
    </a>
  )

}

export default CarouselCard;