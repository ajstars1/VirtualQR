export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="text-6xl font-semibold text-gray-300 fixed h-screen w-screen z-50 flex justify-center items-center">
        <div className="flex flex-col gap-1">
          <div className="animate-pulse">
            <div className="bg-gray-400  h-4 w-1/2"></div>
          </div>
          <div className="animate-pulse">
            <div className="bg-gray-400 h-4 w-1/3"></div>
          </div>
          <div className="animate-pulse">
            <div className="bg-gray-400 h-4 w-3/4"></div>
          </div>
          <div className="animate-pulse">
            <div className="bg-gray-400 h-4 w-1/2"></div>
            Loading...
          </div>
        <p className="text-sm font-mono">Downloading the 3d model, Please Wait..</p>
        </div>
      </div>
      <div className="text-gray-300 bg-gray-900 z-20 fixed h-screen w-screen ">
        <div className="tracking-[10rem] animate-bounce">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          eveniet soluta odit error animi sed fugit ab natus maxime quos
          facilis, voluptatibus itaque recusandae aspernatur molestiae repellat
          esse! Sed, aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Amet animi praesentium non nostrum consequatur veritatis
          deleniti. Deleniti sunt quia porro repudiandae temporibus doloremque
          nam facilis magnam. Quidem reiciendis quae nostrum.
        </div>
      </div>
    </>
  );
}
