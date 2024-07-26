import Button from "@/components/Button/Button";
import LoginScreen from "@/containers/Auth/LoginScreen";

export default function Home() {
  return (
    <main className="flex">
      <div className="bg-[#F4F5FA]">
        {/* navbar */}
        <LoginScreen /> {/* dashboard */}
        {/* footer */}
        Hi
      </div>
    </main>
  );
}
