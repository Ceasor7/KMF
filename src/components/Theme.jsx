import Button from './button'

const Theme = () => {
  return (
    <div className="mx-8 text-lg mb-5 sm:mb-0">
     <p className="font-custom text-lg">
     <span className="font-bold text-[#D82026]">
        THEME:
      </span> Development For The Growth Of The Creative Economy</p>
      <div className=" flex flex-col sm:flex-row">
      <div>
      <p className="mb-5 font-semibold font-custom"> 3rd - 14th August 2024 <br /><span className='text-[#D82026]'> Moi Girls Eldoret</span> </p>
      </div>
      <div className='sm:ml-7'>
      <Button className="mx-2 font-custom">
            Learn More
      </Button>
      </div>
       
      </div>
     </div>
  )
}

export default Theme