function ForeclosureBanner() {
  return (
    <section className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/3 flex justify-center">
          <img
            src="./CDPE.avif"
            alt="Foreclosure assistance icon"
            className="h-24 w-24 rounded-xl mx-auto"
          />
        </div>
        <div className="lg:w-2/3 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-primary italic mb-4">
            We can help you avoid foreclosure.
          </h2>
          <p className="text-white text-lg">
            We are certified distressed property experts. Give us a call!
          </p>
        </div>
      </div>
    </section>
  );
}

export default ForeclosureBanner;