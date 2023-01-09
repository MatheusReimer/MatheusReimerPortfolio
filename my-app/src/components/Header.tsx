import { Bars3BottomRightIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import logo from "../blacklogo.png"


function Header() {
  return (
    <header className='flex pt-2 sticky h-[6vh]'>
        <div className='w-[30vw] md:w-[45vw]'>
            <img src={logo} alt="" className='w-[50] h-[50px] mr-4 ml-4 cursor-pointer'/>
            </div>
        <div className='w-[15vw] justify-end flex'>
            <a className='linksLeft' href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=matheusreimer1@gmail.com&subject=Hello+EZTRADER&body=Hello'>Gmail</a>
            <a className='linksLeft' href='https://github.com/MatheusReimer'>Github</a>
            <a className='linksLeft' href='https://www.linkedin.com/in/matheus-reimer-636b10187/'>Linkedin</a>
        </div>
        <div className='flex justify-end w-[45vw] mr-4'>
            <a className='linksRight' href="https://wa.me/5547991101803">Contact-me</a>
        </div>
        
    </header>
  )
}

export default Header