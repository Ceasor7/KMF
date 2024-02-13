import Button from './button'

const Theme = () => {
  return (
    <div className="mx-8 text-lg mb-6 sm:mb-2 lg:p-6">
      <p className="font-custom text-lg">
        <span className="font-bold text-[#D82026]">
          THEME:
        </span> Development For The Growth Of The Creative Economy</p>
      <div className=" flex flex-col">
        <div>
          <p className="mb-5 font-semibold font-custom py-6"> 3rd - 14th August 2024 <br /><span className='text-[#D82026]'> Moi Girls Eldoret</span> </p>
        </div>
        <div className=''>
          <Button className=" font-custom">
            Learn More
          </Button>
        </div>

      </div>
    </div>
  )
}

export default Theme