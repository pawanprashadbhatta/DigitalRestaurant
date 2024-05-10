import { FaFacebookF, FaInstagram, FaYoutube ,FaMapMarkerAlt,FaEnvelope,FaPhone } from 'react-icons/fa';

const Footer2 = () => {
    return (
        <>
      
      <footer className="bg-white text-gray-400 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
            <img src="https://swiftholidays.com.np/images/logo.png" alt="image" className="w-[110px] h-auto" />

           
                <ul className="flex">
  <li className="mr-4"><a href="#"><FaFacebookF size={24} /></a></li>
  <li className="mr-4"><a href="#"><FaInstagram size={24} /></a></li>
  <li><a href="#"><FaYoutube size={24} /></a></li>
</ul>

           
            </div>
  
            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-900">Quick Links</h4>
              <ul className='text-xl list-disc cursor-pointer'>
                <li>About Us</li>
                <li>Our Motto & Vision</li>
                <li>Our Services</li>
                <li>Term & Condition</li>
                <li>Privacy Policy</li>
              
              </ul>
            </div>
  
            {/* Column 3 */}
            <div>
              <h4 className="text-lg font-semibold mb-4  text-purple-900">Contact Info</h4>
             <div className='flex flex-row p-1 gap-2'> <FaMapMarkerAlt size={18}/> <p>Khusibu Linkroad, Kathmandu 44600</p></div>
             <hr />
             <div  className='flex flex-row p-2 gap-2 m-2'><FaPhone  size={18}/> <p>+977 9851310236/37/38/39</p></div>
             <hr />
              <div className='flex flex-row p-2 gap-2'><FaEnvelope  size={18}/> <p>swiftholidaysnepal@gmail.com</p></div>
            </div>
  
            {/* Column 4 */}
            <div>
              <h4 className="text-lg font-semibold mb-4  text-purple-900">Development Partner</h4>
              <img src="https://swiftholidays.com.np/images/kit.jpg" className='w-[180px] h-auto' alt="image" />
              <p> Kunwar I.T. And Design Pvt.Ltd.</p>
              <p className="text-lg font-semibold m-4">Payment Partner </p>
              <img src="https://swiftholidays.com.np/images/payment.jpg" className='w-[180px] h-auto' alt="payment" />
            </div>
          </div>
        </div>
        {/* Copyright section */}
       
        <div className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://swiftholidays.com.np/images/nepal.svg")' }}>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Khusibu Linkroad, Kathmandu 44600
+977 9851191095

swiftholidaysnepal@gmail.com</h2>
        <p className="text-gray-600">Card content goes here. You can add any text, images, or other elements inside the card.</p>
      </div>
    </div>


      </footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
  <path fill="#3D405B" fillOpacity="1" d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path> 
  <text x="20" y="250" className="bg-gray-800 text-white text-md text-left pl-8">
    <tspan className="italic">Copyright</tspan> © Swift Holidays. All Rights Reserved.
  </text>
</svg>

       
     
      </>
    );
  };
  
  export default Footer2;
  