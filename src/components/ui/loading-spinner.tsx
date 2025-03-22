function LoadingSpinner() {
  return (
    <>
      <div className="loading-spinner">
        <div
          className="main flex justify-center items-center w-full h-[100vh] overflow-hidden
         fixed top-0 left-0 bg-black/50 z-20"
        >
          <Spinner />
        </div>
      </div>
    </>
  );
}

export default LoadingSpinner;

const Spinner = () => {
  return (
    <>
      <div className="loader-5">
        <span></span>
      </div>
    </>
  );
};
