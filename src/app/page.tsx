import Button from "@/components/Button/Button";
import LoginScreen from "@/containers/Auth/LoginScreen";
import SignupScreen from "@/containers/Auth/SignupScreen";

export default function Home() {
  return (
    <main className="flex">
      <div className="bg-[#F4F5FA]">
        {/* navbar */}
        <SignupScreen /> {/* dashboard */}
        {/* footer */}
      </div>
    </main>
  );
}
