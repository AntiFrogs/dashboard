import { useState } from "react"
import "./signUp.css"
import { FaCheck } from "react-icons/fa6";
import { validateEmail, validateBirthDate , validatePassword , validateUsername , vaildateProfession } from "../../Utils/utils";

export default function SignUp() {
    const [errorMesseage , setErrorMessage ] = useState("");
    const [signUpStep , setSignUpStep] = useState(1);
    const [formData , setFormData] = useState(new Map([["email" , ""] , ["username" , ""] , ["profession" , ""] , ["birthDate" , ""] , ["sex" , ""] , ["password" , ""] , ["re-password" , ""] ]));


    function inputFocusHandler(event) {
        event.target.previousSibling.style.color =  "#000"
        event.target.previousSibling.style.transform =  "scale(1.1)"
    }

    function inputBlurHandler(event) {
        event.target.previousSibling.style.color =  "#7A7A73"
        event.target.previousSibling.style.transform =  "scale(1)"
    }

    function inputValueHandler(event) {
        let newFormData = new Map(formData);
        newFormData.set(event.target.dataset.inputType , event.target.value);
        setFormData(newFormData);
    }

    function checkBoxHandler(event) {
        let currValue = event.target.dataset.checkboxValue;
        let newFormData = new Map(formData);
        if((event.target.checked && currValue === "Female") || (event.target.checked && currValue === "Male")) {
            newFormData.set("sex" , "");
        }
        else if(!event.target.checked && currValue === "Male") {
            newFormData.set("sex" , "Male");
        }
        else if(!event.target.checked && currValue === "Female") {
                newFormData.set("sex" , "Female");
        }

        setFormData(newFormData);
        
    }

    function nextClickHandler() {
        if(signUpStep === 1) {
            if( validateEmail(formData.get("email")) ) {
                setSignUpStep(n => n + 1);
                setErrorMessage("");
            } 
            else setErrorMessage("Please Enter a valid email !");
        }

        else if(signUpStep === 2) {
            if(validateUsername(formData.get("username")) &&
                vaildateProfession(formData.get("profession")) &&
                validateBirthDate(formData.get("birthDate"))
                ) {
                    setSignUpStep(n => n + 1);
                    setErrorMessage("");
                }
                else {
                    setErrorMessage("Please Enter valid inputs !");
                }
        }

        else if(signUpStep === 3) {
            if(formData.get("password") === formData.get("re-password")) {
                if(validatePassword(formData.get("password"))) {
                    setSignUpStep(n => n + 1);
                    setErrorMessage("");
                }
                else {
                    setErrorMessage("Your password must contain at least 8 characters !");
                }
            }
            else {
                setErrorMessage("The two passwords above don't match !");
            }
        }
        else if(signUpStep === 4) {
            setFormData(new Map(new Map([["email" , ""] , ["username" , ""] , ["profession" , ""] , ["birthDate" , ""] , ["sex" , ""] , ["password" , ""] , ["re-password" , ""] ])));
            setSignUpStep(1);
        }
    }


    return (
        <div className="sign-up-container">
            <div className="sign-up-box">
                <div className="sign-up-header">
                    <h3>Create an account</h3>
                    <span>Already have an account? <a href="#">Log in</a> </span>
                </div>
                <div className="sign-up-steps">
                    <span data-title="Enter yout email address" 
                        className={"step-number " + (signUpStep !== 1 ? signUpStep < 1 ? "" : "completed-step"  : "current-step"  ) }>
                            {signUpStep > 1 ?
                                <FaCheck />
                            :
                                1
                            }
                    </span>

                    <div className="empty-space"></div>

                    <span data-title="Provide your basic info" 
                        className={"step-number " + (signUpStep !== 2 ? signUpStep < 2 ? "" : "completed-step"  : "current-step"  ) }>
                            {signUpStep > 2 ?
                                <FaCheck />
                            :
                                2
                            }
                    </span>

                    <div className="empty-space"></div>

                    <span data-title="Create your password" 
                    className={"step-number " + (signUpStep !== 3 ? signUpStep < 3 ? "" : "completed-step"  : "current-step"  ) }>
                            {signUpStep > 3 ?
                                <FaCheck />
                            :
                                3
                            }
                    </span>
                </div>
                <div className="sign-up-inputs">
                    {signUpStep === 1 &&
                        <div className="full-width-input-container">
                            <label htmlFor="email-input">What's your email? </label>
                            <input value={formData.get("email")} data-input-type="email" type="email" id="email-input" onFocus={inputFocusHandler} onBlur={inputBlurHandler} onInput={inputValueHandler} />
                        </div>
                    }
                    {signUpStep === 2 &&
                        <>
                            <div className="full-width-input-container half-width-input-container">
                                <label htmlFor="usesrname-input">What should we call you? </label>
                                <input value={formData.get("username")} data-input-type="username" type="text" id="usesrname-input" onFocus={inputFocusHandler} onBlur={inputBlurHandler} onInput={inputValueHandler} />
                            </div>
                            <div className="full-width-input-container half-width-input-container">
                                <label htmlFor="profession-input">What is your profession? </label>
                                <input value={formData.get("profession")} data-input-type="profession" type="text" id="profession-input" onFocus={inputFocusHandler} onBlur={inputBlurHandler} onInput={inputValueHandler} />
                            </div>
                            <div className="input-row-container">
                                <div className="full-width-input-container quarter-width-input-container">
                                    <label htmlFor="birth-date-input">When were you born? </label>
                                    <input value={formData.get("birthDate")} data-input-type="birthDate" type="text" id="birth-date-input" placeholder="YYYY/MM/DD" onFocus={inputFocusHandler} onBlur={inputBlurHandler} onInput={inputValueHandler} />
                                </div>
                                <div className="sex-input-container quarter-width-input-container">
                                    <p>Sex</p>
                                        <div className="checkboxs-container">
                                        <div className="sex-input">
                                            <label htmlFor="female-input">Female</label>
                                            <input checked={formData.get("sex") === "Female"} data-checkbox-value="Female" type="checkbox" name="" id="female-input" onInput={checkBoxHandler} onChange={() => {}}/>
                                        </div>
                                        <div className="sex-input">
                                            <label htmlFor="male-input">Male</label>
                                            <input  checked={formData.get("sex") === "Male" } data-checkbox-value="Male" type="checkbox" name="" id="male-input"  onInput={checkBoxHandler} onChange={() => {}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    {signUpStep === 3 &&    
                        <>
                            <div className="full-width-input-container half-width-input-container">
                                <label htmlFor="password-input">Enter a password </label>
                                <input value={formData.get("password")} data-input-type="password" type="password" id="password-input" onFocus={inputFocusHandler} onBlur={inputBlurHandler} onInput={inputValueHandler} />
                            </div>

                            <div className="full-width-input-container half-width-input-container re-password-input-container" style={formData.get("password") ? {opacity : 1} : {opacity: 0}} >
                                <label htmlFor="re-password-input">Enter the password again</label>
                                <input value={formData.get("re-password")} data-input-type="re-password" type="password" id="re-password-input" onFocus={inputFocusHandler} onBlur={inputBlurHandler} onInput={inputValueHandler} />
                            </div>

                        </>
                    }
                    {signUpStep === 4 && 
                        <p id="result-text">Congrats! Account created successfully</p>
                    }
                </div>
                <div className="sign-up-btns">
                    {errorMesseage !== "" &&
                        <span id="error-message">{errorMesseage}</span>
                    }
                    <button 
                    onClick={nextClickHandler}
                    className={"next-step-btn " + ((signUpStep === 1 && formData.get("email") ||
                                                    (signUpStep === 2 && formData.get("username") && formData.get("profession") && formData.get("birthDate") && formData.get("sex")) ||
                                                    (signUpStep === 3 && formData.get("password") && formData.get("re-password")) ||
                                                    (signUpStep === 4)
                                                    ) 
                                                    ? "active" : "")}>
                    {signUpStep !== 4 ?
                        "Next"
                    :
                        "Make a new account"
                    }
                    </button>
                </div>
            </div>
        </div>
    );
}