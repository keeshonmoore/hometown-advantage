import { Card } from '../components/ui/card';
import { ExternalLink } from 'lucide-react';

function AboutYuma() {
  const helpfulLinks = [
    { name: 'Yuma Sun Newspaper', url: 'https://www.yumasun.com' },
    { name: 'Yuma County Chamber of Commerce', url: 'https://www.yumachamber.org' },
    { name: 'Yuma Visitors Bureau', url: 'https://www.visityuma.com' },
    { name: 'Yuma Palms Regional Center', url: 'https://www.shopyumapalms.com' },
    { name: 'Yuma County Fairgrounds', url: 'https://www.yumafair.com' },
    { name: 'Official website for the City of Yuma, Arizona', url: 'https://www.yumaaz.gov' },
    { name: 'Arizona Western College', url: 'https://www.azwestern.edu' },
    { name: 'U.S. Army Yuma Proving Ground', url: 'https://www.yumamwr.com' },
    { name: 'Colorado River Pottery', url: 'https://www.coloradoriverpottery.com' },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary text-center mb-12">
          About Yuma
        </h1>
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-secondary text-center mb-4">
              IT'S NEVER BEEN A BETTER TIME TO PURCHASE A NEW HOME IN YUMA, ARIZONA
            </h2>
            <p className="text-lg text-secondary text-center">
              Home prices are attractive and there are many homes available for sale.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-4">
              Yuma
            </h3>
            <p className="text-lg text-secondary">
              Offers an enriching lifestyle in the heart of Arizona's rugged splendor. You'll love the sunshine, mild winters and all the history and activities Yuma offers. You can enjoy Yuma Palms Shopping Mall, Lutes Casino in Historic Downtown and the many other attractions in Yuma Arizona. If you're in the mood to explore the natural beauty of the region, you won't want to miss the Castle Dome and Palm Canyon, both just a short drive away.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-4">
              Here is why Yuma is an attractive place to live:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-secondary">
              <li>Located in the Southwest corner of Arizona, Yuma neighbors Mexico and California bordered by the Colorado River.</li>
              <li>More than 200,000 people live year-round in Yuma County and over 83,000 Winter Visitors make Yuma their winter home.</li>
              <li>Yuma's economy is fueled by Agriculture, Military and Tourism.</li>
              <li>Yuma's climate allows for a year-round growing season for crops such as lettuce, cotton, wheat and hundreds of other crops.</li>
              <li>A short 2-3 hour drive to San Diego CA or Phoenix AZ</li>
              <li>Two military bases, Yuma Proving Grounds and MCAS Yuma, are located in Yuma County.</li>
              <li>Tourism thrives in Yuma; not only with the Winter Visitors, but also visitors to play in the River & Sand Dunes.</li>
              <li>Yuma is noted in the Guiness Book of World Records for being the Sunniest Place on Earth.</li>
              <li>Outdoor activities are plentiful and range from boating, off-road adventures, hunting and fishing and golf.</li>
              <li>Many tourists travel to Los Algodones, Mexico or San Luis Rio Colorado Mexico to eat, drink and shop.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-4 text-center">
              Explore Yuma
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <iframe
                className="w-full h-64 sm:h-96 rounded-xl shadow-apple"
                src="https://www.youtube.com/embed/lGdlmeo-hr8"
                title="Yuma Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                aria-label="Embedded YouTube video about Yuma"
              ></iframe>
              <iframe
                className="w-full h-64 sm:h-96 rounded-xl shadow-apple"
                src="https://www.youtube.com/embed/vu7Gjyl-exc"
                title="Yuma Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                aria-label="Embedded YouTube video about Yuma"
              ></iframe>
              <iframe
                className="w-full h-64 sm:h-96 rounded-xl shadow-apple"
                src="https://www.youtube.com/embed/TV8fZ0c0_hs"
                title="Yuma Video 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                aria-label="Embedded YouTube video about Yuma"
              ></iframe>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-4">
              Helpful Yuma Links
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpfulLinks.map((link, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-xl shadow-apple transition-transform hover:scale-105 hover:bg-primary hover:text-white"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 text-secondary hover:text-white transition-colors"
                    aria-label={`Visit ${link.name}`}
                  >
                    <ExternalLink className="h-6 w-6 text-primary" />
                    <span className="text-base">{link.name}</span>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutYuma;