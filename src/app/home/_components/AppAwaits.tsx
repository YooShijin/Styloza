import Image from "next/image";
const AppAwaits = () => {
  return (
    <div className="w-full m-4 p-2">
      <h2 className="text-4xl text-center mb-4 text-[#2c2409]">
        Your App Awaits
      </h2>
      <div className="flex justify-around">
        <div className="flex justify-between items-center gap-5">
          <Image
            src="/images/appAwaits1.png"
            alt="Placeholder image"
            width={500}
            height={400}
          />
          <Image
            src="/images/appAwaits2.png"
            alt="Placeholder image"
            width={500}
            height={400}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default AppAwaits;
