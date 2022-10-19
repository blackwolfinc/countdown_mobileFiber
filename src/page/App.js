import moment from "moment";
import Countdown from "react-countdown";

import "../css/App.css";
import LOGO from "../image/icons/LogoMobile.svg";
import Typewriter from "typewriter-effect";

function App() {
  const DateCustom = new Date("12 12, 2022 01:15:00");

  const handleRenderMoment = () => {
    const a = moment();
    const b = moment([2022, 11, 13]);
    const hasil = a.diff(b, "days");
    return -hasil;
  };

  return (
    <div className="flex flex-col  items-center justify-center w-full h-screen">
      <div className="flex flex-col px-10 py-10 justify-center items-center rounded-lg  ">
        <img className=" w-[10rem] sm:w-[20rem]" src={LOGO} alt=""></img>
        <div className="flex justify-center flex-col items-center text-center mt-[-1rem] sm:mt-[-1.9rem]">
          <h1 className="font-Header text-[2rem] sm:text-[3rem] ">
            {" "}
            Coming Soon{" "}
          </h1>

          <h1 className="text-[4rem] sm:text-[6rem] font-Body text-[#003D83] mt-[-1rem] sm:mt-[-2rem] flex ">
            {" "}
            {handleRenderMoment()}
            <div className="text-[1.5rem] sm:text-[3rem] items-end mt-[2rem] sm:mt-[2.6rem]">
              <Typewriter
                changeDeleteSpeed={100}
                options={{
                  strings: ["Days", "We Ready", "To Start"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
