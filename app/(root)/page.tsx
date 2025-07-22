import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-[100vh] w-full">
  <div className="absolute inset-0 flex items-center justify-center ">
    <Button className="red-400">Centered Button</Button>
  </div>
</div>

  );
}
