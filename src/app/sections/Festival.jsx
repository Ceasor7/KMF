
const Festival = () => {
    return (
      <div className="min-h-screen flex flex-col ">
      <div className="flex flex-col sm:flex-row">
      
      <div className="flex-1 p-4">
        <section>
          <img src="/home.jpg" alt="Image 1" className="w-90 h-32 object-cover mb-4" />
          <h1 className="text-xl font-bold font-custom mb-2">Title 1</h1>
          <p className="font-custom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consectetur turpis et velit fermentum, vel cursus massa gravida.</p>
        </section>
      </div>
  
      
      <div className="flex-1 p-4">
        <section>
          <img src="/home.jpg" alt="Image 2" className="w-90 h-32 object-cover mb-4" />
          <h1 className="text-xl font-bold font-custom mb-2">Title 2</h1>
          <p className="font-custom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consectetur turpis et velit fermentum, vel cursus massa gravida.</p>
        </section>
      </div>
  
      
      <div className="flex-1 p-4">
        <section>
          <img src="/home.jpg" alt="Image 3" className="w-90 h-32 object-cover mb-4" />
          <h1 className="text-xl font-bold font-custom mb-2">Title 3</h1>
          <p className="font-custom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consectetur turpis et velit fermentum, vel cursus massa gravida.</p>
        </section>
      </div>
    </div>
    <hr className="text-black py-3 px-3"/>
    <div className="flex flex-row items-center justify-center">
    <img src="/home.jpg" alt="Image 3" className="w-40 h-32 object-cover mb-4" />
    <img src="/home.jpg" alt="Image 3" className="w-40 h-32 ml-5 object-cover mb-4" />
    <img src="/home.jpg" alt="Image 3" className="w-40 h-32 ml-5 object-cover mb-4" />
    <img src="/home.jpg" alt="Image 3" className="w-40 h-32 ml-5 object-cover mb-4" />
    <img src="/home.jpg" alt="Image 3" className="w-40 h-32 ml-5 object-cover mb-4" />
    <img src="/home.jpg" alt="Image 3" className="w-40 h-32 ml-5 object-cover mb-4" />
  
    </div>
    <hr/>
  </div>
     
    )
  }
  
  export default Festival