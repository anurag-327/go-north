const Navbar = () => {
  return (
    <nav className='flex justify-between w-full'>
        <div className='flex gap-8'>
            <a className='text-3xl font-semibold underline' href="#">home</a>
            <a className='text-3xl font-semibold no-underline' href="#">projects</a>
        </div>
        <div>
            <a className='text-3xl font-semibold underline' href="#">contact us</a>
        </div>
    </nav>
  )
}

export default Navbar