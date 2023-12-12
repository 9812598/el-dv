import Image from "next/image";
import MainCharacteristics from "./components/MainCharacteristics";
import AdditionalCaharacteristics from "./components/AdditionalCaharacteristics";
import MotorLayout from "./components/MotorLayout";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto text-lg font-medium">
      <h1 className="my-5">Motors</h1>
      <h2 className="">ЭЛЕКТРОДВИГАТЕЛЬ 5АИ 56 А4 - ЛАПЫ (1001/1081)</h2>
      <div className="flex">
        <div className="flex-1">
          <Image
            src="/Gost_Lapi(IM1001_IM1081_IMB3)-486x486.jpg"
            alt="Picture of motor"
            width={400}
            height={400}
          />
        </div>
        <div className="flex-1">
          <p className="">8 167 р.</p>
          <button className="border-black border-2 rounded-lg bg-slate-400 px-3 py-2">
            Buy
          </button>
          <button className="border-black border-2 rounded-lg bg-slate-400 px-3 py-2 ml-5">
            Print
          </button>
        </div>
      </div>

      <MainCharacteristics />
      <AdditionalCaharacteristics />
      <MotorLayout />
    </div>
  );
}
