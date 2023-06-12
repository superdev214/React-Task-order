import { useState } from "react";
import WalkthroughStep from "./LoginSteps/WalkthroughStep";
import PhoneNumberStep from "./LoginSteps/PhoneNumberStep";
import VerifyCodeStep from "./LoginSteps/VerifyCodeStep";
import LocationAccessStep from "./LoginSteps/LocationAccessStep";
import AboutStep from "./LoginSteps/AboutStep";
import "./Login.scss";

export default function Login() {
  const [activeStep, setActiveStep] = useState("Walkthrough");
  let activeStepJsx = null;

  switch (activeStep) {
    case "Walkthrough":
      activeStepJsx = (
        <WalkthroughStep onContinue={() => setActiveStep("PhoneNumber")} />
      );
      break;
    case "PhoneNumber":
      activeStepJsx = (
        <PhoneNumberStep onContinue={() => setActiveStep("VerifyCode")} />
      );
      break;
    case "VerifyCode":
      activeStepJsx = (
        <VerifyCodeStep
          onContinue={() => setActiveStep("AboutStep")}
          onClose={() => setActiveStep("Walkthrough")}
        />
      );
      break;
    case "AboutStep":
      activeStepJsx = (
        <AboutStep
          onContinue={() => setActiveStep("LocationAccess")}
          onClose={() => setActiveStep("Walkthrough")}
        />
      );
      break;
    case "LocationAccess":
      activeStepJsx = <LocationAccessStep />;
      break;
    default:
      activeStepJsx = (
        <WalkthroughStep onContinue={() => setActiveStep("PhoneNumber")} />
      );
      break;
  }

  return <main id="login-main">{activeStepJsx}</main>;
}
