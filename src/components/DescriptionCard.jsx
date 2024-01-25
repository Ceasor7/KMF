
const DescriptionCard = () => {
  return (
    <div className='flex-1 w-full rounded-[10px] shadow-3xl px-10 py-16 mb-2 '>
      <div className=' w-50 h-35 flex justify-center items-center outline outline-2 outline-white'>
        <img src="/KMF.jpg" alt="KMF LOGO" className='object-cover' />
      </div>
      <h3 className='mt-5 font-palanquin text-2xl leading-normal font-bold text-black'>
        Title one
      </h3>
      <p className='mt-3 break-words font-montserrat text-base leading-normal text-black'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur turpis et velit fermentum, vel cursus massa gravida.
      </p>
    </div>
  )
}

export default DescriptionCard