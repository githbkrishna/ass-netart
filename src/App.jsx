import './App.css'
import './index.css'
import prize from './assets/1.png'
import logo from './assets/logo.png'
import photo from './assets/2.png'
import machines from './assets/3.png'

function App() {

  return (
    <section>
      <div className="main">

        <div className="hero">

          <div className="prize">
            <img src={prize} alt="" />
          </div>

          <div className="content">

            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className='photo'>
              <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
              <div className='photolist'>
                <ul>
                  <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                  <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </ul>
                <div>
                  <img src={photo} alt="" />
                </div>
                <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="container">
          <h3>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h3>
          <div className="machines">
            <img src={machines} alt="" />
          </div>
          <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        </div>

        <footer>
          <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
          <p>CHEMICALS & PROCESS <span>POWER</span> WATER & WASTE WATER <span>OILS & GAS</span> PHARMA <span>SUGARS & DISTILLERIES</span> PAPER & PULP <span>MARINE & DEFENCE</span> METAL & MINING  PETROCHEMICAL <span>FOOD & BEVERAGE</span></p>
          <p>REFINERIES <span>SOLAR</span> BUILDING <span>HVAC</span> FIRE FIGHTING <span>AGRICULTURE & RESIDENTIAL</span></p>   

          <div className="foots">
            <div>
              <i class="fa-brands fa-github"></i>
              github.com/githbkrishna
              </div>
            <div>
              <i class="fa-brands fa-linkedin"></i>
              @hariom-singh-170671275
            </div>
            <div>
              <i class="fa-solid fa-envelope"></i>
              krishna636471@gmail.com
            </div>
          </div>
        </footer>

      </div>
    </section>
  )
}

export default App
