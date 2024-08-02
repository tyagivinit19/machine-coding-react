import OTPCard from "../components/OTPCard"
import MainHeading from "../components/MainHeading"

const OTP = () => {
  return (
    <div className="bg-[#3F72AF] w-[100%] h-[100vh]">
        <MainHeading text={'Chai aur Code'} color="#FFFFFF"></MainHeading>
        {/* <MainHeading text={''}></MainHeading> */}
        <OTPCard></OTPCard>
        <div className="pt-20 fixed bottom-10 right-10">
          <a href="https://chaicode.com/" target="_blank" className=""><img className="h-[150px] w-[140px] rounded-lg" src="/assets/images/cac_logo.png" alt="" /></a>
          
        </div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default OTP