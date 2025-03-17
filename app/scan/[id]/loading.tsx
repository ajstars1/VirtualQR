export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="text-6xl font-semibold text-gray-300 fixed h-screen w-screen z-50 flex justify-center items-center">
        <div className="flex flex-col gap-1">
        <p className="text-sm font-mono">Downloading the 3d model, Please Wait..</p>
        </div>
      </div>
    </>
  );
}
