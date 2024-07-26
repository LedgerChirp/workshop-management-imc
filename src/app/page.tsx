import Button from "@/components/Button/Button";
import LoginScreen from "@/containers/Auth/LoginScreen";

export default function Home() {
  return (
    <main className="flex">
      <div className="bg-[#F4F5FA]">
        {/* navbar */}
        <LoginScreen /> {/* dashboard */}
        {/* footer */}
        {/* https://www.figma.com/design/YhdjTPHt3kQLTQsJ6xLu9K/Inventory-Management-System-(Community)?node-id=55-100475&t=7sv6RnPTeXgTBTCc-0 */}
      </div>
    </main>
  );
}
