import {Link, NavLink} from 'react-router-dom'
import './Donate.css'
import DonateCard from './Donatecard'
export default function Donate() {
  return (
    <div>
    <div
    className="eevnt"
    >
    <div className="d1 font-grotesk">
    Fundraising 
      <div className="d2 font-grotesk ">
      Choose a Cause below that Inspires you to make a Meaningful Contribution
      </div>
    </div>
    <div className="eventp2 font-grotesk  ">
    {/* <h1>Upcoming Donate</h1>
    <DonateCard
  
  imageSrc="https://lnct.ac.in/wp-content/uploads/2023/05/LifeatLNCT-12.jpg"
  description="Ahmedabad City meet for Alumni | 30 September 2024"
/>
 </div>

 <div className="eventp2 e2p2 font-grotesk "> */}
    <h1 className=' text-[#B71061]'>CONTRIBUTE TODAY</h1>
    
    <div className='flex '>
    <NavLink  to="Payment"  ><DonateCard
  
  imageSrc="https://th.bing.com/th/id/OIP.UZosAdHus8-Ed8ydTKngBQHaDl?rs=1&pid=ImgDetMain"
  description="Undergraduate Labs"
/></NavLink>
<NavLink  to="Payment"  ><DonateCard
  
  imageSrc="https://th.bing.com/th/id/OIP.TRcMco_syL5plvnK2aVv_gHaE6?w=272&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  description="Hostel Projects"
/></NavLink>
<NavLink  to="Payment"  ><DonateCard
  
  imageSrc="https://th.bing.com/th/id/OIP.xwaRQMs2_k-LyAVYGc_5hQHaE8?rs=1&pid=ImgDetMain"
  description="Scholarship/Student Programs"
/></NavLink>

 </div>
 <div className='flex'>
    <NavLink  to="Payment"  ><DonateCard
  
  imageSrc="https://th.bing.com/th/id/OIP.Gbu4qMXR3jCpuzYaNaw1AQHaE8?rs=1&pid=ImgDetMain"
  description="Faculty/Memorial Programs"
/></NavLink>
<NavLink  to="Payment"  ><DonateCard
  
  imageSrc="https://th.bing.com/th/id/OIP.vfjyQ6tLqcKWcSLXtHfLkQHaEo?rs=1&pid=ImgDetMain"
  description="Special Projects"
/></NavLink>
<NavLink  to="Payment"  ><DonateCard
  
  imageSrc="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201610/women-college_647_102716014609.jpg?VersionId=eFTfy_AXcqj195WFL21EFBCTpoIDXc.d&size=690:388"
  description="Woman Programs"
/></NavLink>

 </div>
 <div className='flex'>
    <NavLink  to="Payment"  ><DonateCard
  
  imageSrc="https://th.bing.com/th/id/OIP.UZosAdHus8-Ed8ydTKngBQHaDl?rs=1&pid=ImgDetMain"
  description="Undergraduate Labs"
/></NavLink>
<NavLink  to="Payment"  ><DonateCard
  
  imageSrc="https://th.bing.com/th/id/OIP.TRcMco_syL5plvnK2aVv_gHaE6?w=272&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  description="Hostel Projects"
/></NavLink>
<NavLink  to="Payment"  ><DonateCard
  
  imageSrc="https://th.bing.com/th/id/OIP.xwaRQMs2_k-LyAVYGc_5hQHaE8?rs=1&pid=ImgDetMain"
  description="Scholarship/Student Programs"
/></NavLink>

 </div>
 <div className='flex'>
    <NavLink  to="Payment"  ><DonateCard
  
  imageSrc="https://th.bing.com/th/id/OIP.Gbu4qMXR3jCpuzYaNaw1AQHaE8?rs=1&pid=ImgDetMain"
  description="Faculty/Memorial Programs"
/></NavLink>
<NavLink  to="Payment"  ><DonateCard
  
  imageSrc="https://th.bing.com/th/id/OIP.vfjyQ6tLqcKWcSLXtHfLkQHaEo?rs=1&pid=ImgDetMain"
  description="Special Projects"
/></NavLink>
<NavLink  to="Payment"  ><DonateCard
  
  imageSrc="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201610/women-college_647_102716014609.jpg?VersionId=eFTfy_AXcqj195WFL21EFBCTpoIDXc.d&size=690:388"
  description="Woman Programs"
/></NavLink>

 </div>
 </div>



 


 </div>
 

  </div>
  
  )
}


