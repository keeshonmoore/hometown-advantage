import { Button } from '../components/ui/button';

function AboutMichelleClaborn() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary text-center mb-12">
          About Michelle Claborn
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          <div className="lg:w-1/2">
            <img
              src="./michelleabout.avif"
              alt="Michelle Claborn headshot"
              className="w-full h-64 lg:h-96 lg:w-96 object-cover rounded-xl shadow-apple"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-secondary">
              The Realtor That Goes The Extra Mile
            </h2>
            <p className="text-secondary text-lg">
              I started my career in the Real Estate industry in 1999. I joined the team here with Hometown Advantage in Jan of 2012, then Received my Brokers license in Dec. of 2013. Specializing in Residential Resale/New Construction, Luxury & Custom homes, and Acreage.
            </p>
            <p className="text-secondary text-lg">
              As of July 2018, I became the owner of Hometown Advantage Real Estate.
            </p>
            <p className="text-secondary text-lg">
              I especially enjoy working with 1st time home buyers. I will market and sell your home as if it were my own. I strive to do the best job possible by providing quality customer service and making every transaction a positive one. Please contact me with any of your Real Estate needs!
            </p>
            <h2 className="text-3xl font-bold text-secondary">
              Michelle has all your real estate needs covered.
            </h2>
            <p className="text-secondary text-lg">
              Are you a home buyer in the Yuma area looking for the most qualified real estate agent to help you find your ideal home? The process of purchasing a home, especially your first home, can be an intimidating and overwhelming task. I can assist you throughout the entire process!
            </p>
            <Button
              className="bg-primary text-white hover:bg-opacity-90 rounded-xl w-fit"
              asChild
            >
              <a href="tel:9283297275">Contact Michelle</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMichelleClaborn;