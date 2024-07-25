import { useEffect, useRef, useState } from 'react';

import Heading from "./Heading"
import LightText from './LightText';
import Link from './Link';

const OTPCard = () => {

    const VALID_OTP = '1234';
    const GREEN = '#23CF9B';
    const RED = '#EB2D5B';

    const inputsRef = useRef([]);
    const otpStatusRef = useRef(null);
    const [otp, setOtp] = useState(Array(4).fill(''));

    useEffect(() => {
        inputsRef.current[0].focus();
    }, []);

    const handleChange = (e, index) => {
        console.log('handleChange')
        const { value } = e.target;
        if (value.match(/[0-9]/)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (index < inputsRef.current.length - 1) {
                inputsRef.current[index + 1].focus();
            } else {
                checkOtp(newOtp.join(''));
            }
        }
    };

    const setFormStatus = (otpStatus) => {
        let borderColor,bgColor, text;
        if (otpStatus==='success') {
             borderColor=GREEN
             bgColor = GREEN
             text = 'Verified';
        } else if (otpStatus==='failed') {
            borderColor=RED
            bgColor = RED
            text = 'Verified';
        } else {
            borderColor='';
            bgColor='#112D4E';
            text='Verify Account'
        }
        inputsRef.current.forEach(e => {
            e.style.borderColor = borderColor
        });

        otpStatusRef.current.style.backgroundColor = bgColor
        otpStatusRef.current.innerText = text
    }

    const handleKeyDown = (e, index) => {
        console.log('handleKeyDown', e.key, e.target.value)
        if (e.key === 'Backspace') {
            e.target.value = ''
            if (index > 0) {
                inputsRef.current[index - 1].focus();
            }
            const newOtp = [...otp];
            newOtp[index] = '';
            setOtp(newOtp);
            console.log(newOtp)
            setFormStatus('active')
        }
    };

    const checkOtp = (otp) => {

        if (otp == VALID_OTP) {
            setFormStatus('success')
            console.log('Valid Otp');
        } else {
            setFormStatus('failed')
            console.log('Invalid Otp');
        }
    };

    return (
        <div className="flex justify-center mt-16 w-full">
            <div className="p-6 bg-[#F9F7F7] border-[F9F7F7] rounded-2xl shadow w-[50%] h-[50vh] max-w-[675px]">
                <Heading text={'Mobile Phone Verification'} />
                <LightText text={'Enter the 4-digit verification code that was sent to your phone number.'}></LightText>
                <form className="w-full mt-10">
                    <div className="flex justify-center gap-2 mb-6">
                        {Array(4).fill().map((_, index) => (
                            <input
                                key={index}
                                ref={(el) => inputsRef.current[index] = el}
                                className="w-[90px] h-[100px] text-center border rounded-md shadow-sm  focus:border-[#23CF9B]  outline-none bg-[#DBE2EF] text-[50px]"
                                type="text"
                                maxLength="1"
                                pattern="[0-9]"
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                required
                                onChange={(e) => handleChange(e, index)}
                                onFocus={(e) => e.target.select()}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                value={otp[index]}
                            />
                        ))}
                    </div>
                    <div className="flex-col items-center justify-center">
                        <div ref={otpStatusRef} className="text-3xl text-white bg-[#112D4E] px-10 py-4 mx-20 my-3 text-center font-thin rounded-lg">Verify Account</div>
                    </div>
                </form>
                <div className="flex justify-center">
                    <LightText text={`Didn't receive code?`}></LightText><Link text={'Resend'}></Link>
                </div>
            </div>
        </div>
    )
}

export default OTPCard