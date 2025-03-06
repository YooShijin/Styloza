import Image from "next/image";
const AppAwaits = () => {
  return (
    <div className="w-full py-4 bg-[#FFE086]">
      <h2 className="text-4xl text-center font-bold my-4 text-[#161204]">
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
          />
        </div>
      </div>
    </div>
  );
};

export default AppAwaits;
