import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const testimonials = [
  {
    quote:
      'I had an awesome experience after purchasing my 2 profitable investments. Michelle was beyond helpful and attentive, answered all my questions to the best of her abilities. I highly recommend her to anybody. I am very happy and thank you.',
    author: 'Maria Jo',
  },
  {
    quote:
      'We recently had the pleasure of working with Michelle Claborn during our search for a new home in Yuma, Arizona. Right from the beginning of the process Michelle gave us valuable advise and guided us in the search. All throughout the negotiation and closing Michelle was there quickly to handle any issues that arose. After buying the house we have continued to reach out to her with questions which she has always responded promptly. She is a true professional and we are grateful having her as our realtor. Michelle is amazing friend to the family, we love her energy. Thank you!',
    author: 'Michael and Joana',
  },
  {
    quote:
      'We called Michelle when we decided to sell our home of 20 years. We were looking for a professional to work with, Michelle was just that. She made the whole ordeal seamless. She soothed every worry, eased every doubt. She got us top dollar for our home. We then decided to sell our rental house. Due to her intense networking she actually had an investor before we had to place it on the market! Michelle also assisted us with finding our final place to call home. She has been there for us, to answer all our questions and put up with a tough husband. She was available to us 24/7, always with an answer. I HIGHLY recommend Michelle for anyone\'s realtor needs. She is AWESOME!',
    author: 'Larry and Liz Jackson',
  },
  {
    quote:
      'After over two years trying to sell my property in Yuma from across the country, I fired my realtor and luckily found Michelle. Michelle Claborn is an outstanding realtor! She is responsive, dedicated, knowledgeable and proactively worked to save me money. Prior to hiring her I asked her to assess the property and make recommendations. She noted a few maintenance issues, recommended cleaning up the appearance and proposed a low cost vendor to do the work. I hired her, had the recommended work done and in less than a week had an offer that recently closed! Michelle remained engaged after we were on contract. An agreed to concession included work done by a buyer selected contractor. Michelle learned of a less expensive contractor for the same work, coordinated with the buyer\'s agent and saved me $500! Michelle Claborn is a truly superb realtor and I would highly recommend her. It really was a pleasure to work with her and I thought she did an outstanding job selling our home in Yuma.',
    author: 'Phil & Laurie Edwards',
  },
  {
    quote:
      'Shout out for Michelle. Fred says you spoiled him in his real estate dealings with your complete super service. He had to take time off work today to sign closing papers on his & Lynn\'s home in Missouri. He said, "Michelle ALWAYS came to me". Loved your personal service. So KUDOS Michelle on your service So.....Buying or selling.....Call Michelle',
    author: 'Fred',
  },
  {
    quote:
      'I have to say that I hear so many horror stories about landlords and for a long time I was scared of that kind of landlord when I started renting. But I have to say I LOVE my landlord!!! Michelle Claborn you are the best! I text her last night @ 9:30 pm about my light fixture in the living room and today within an hour it was done. She is honest and truly looks after her renters. If anyone is looking to rent...... rent from Michelle!',
    author: 'Anonymous',
  },
  {
    quote:
      'Michelle was very helpful throughout my purchase, from the early pre-qualification to completing the purchase of my home. She was very thorough in explaining all of the details of the transaction. I highly recommend her for a first time buyer.',
    author: 'Ralph',
  },
  {
    quote:
      'Michelle Claborn has held our hands as my husband and I were looking for a new home. We had never before been through the house search process and were feeling very overwhelmed. She guided us with great patience and has always been immediately responsive to my calls with questions. She knows the area and works very well with other realtors. I would highly recommend Michelle to anyone, senior citizens like us or young couples starting out.',
    author: 'bleeper50',
  },
  {
    quote:
      'I had poor experiences with realtors in Yuma on my prior visits to find a house. Thank goodness my final visit to Yuma to look at houses brought me to Michelle. She understood exactly what I was looking for and had showings lined up the day I arrived. We purchased from out of state and she was there for every step making the process as smooth as purchasing a house can be. Thank you Michelle for not only helping us purchase a house but finding us our HOME.',
    author: 'Melody',
  },
  {
    quote:
      'Michelle has sold two houses for us in the past few years. She is a true professional that is there every step of the way. She will guide you through the difficult process of buying and selling your home. You will not be disappointed with Michelle Claborn as your realtor. She sells Yuma!',
    author: 'KG',
  },
  {
    quote:
      'Our house was on the market for about 6 months with a prior realtor with no offers. I then met Michelle who worked very hard and got our house sold in 2 months! Michelle is a people person, trustworthy and a hard worker. I don\'t think anyone else could have sold our house that fast! Thank you for your hard work, the extras and going the above and beyond for us.',
    author: 'Justin and Mary Whitworth',
  },
  {
    quote:
      'I\'ve known and worked with Michelle for over 13 years now and I can definitely say she is a great person to work with. I have used her as my Realtor a few times and I\'ve also recommend her to friends and family. The more I work with her, the more impressed I am with her. She is quick in finding what I need and has always been very helpful to me and my family. My mom and I are currently working with her and could not be happier with all that she\'s done! I would definitely recommend her to any one, she really is a great person to work with.',
    author: 'Liz',
  },
  {
    quote:
      'Getting ready to buy a second condo from Michele Claborn. I have purchased several homes in Yuma and I am happy to say she is very professional. Love that she is not a pushy realtor and does not Rush you to make a sale. Love love her professionalism!!!',
    author: 'Adriana',
  },
  {
    quote:
      'I\'d like to thank Michelle Claborn for her professional dedication to her customers. Michelle took care of our resent purchase and we are very satisfied with her work and would recommend her to my friends and family. I am looking forward to do another purchase in the next three months. Michelle is very trustworthy and professional.',
    author: 'Ramon',
  },
];

function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary text-center mb-12">
          Testimonials
        </h1>
        <div className="flex flex-col gap-8 max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-secondary text-center">
            What Our Clients Say
          </h2>
          <p className="text-lg text-secondary text-center">
            Hear from our satisfied clients about their experiences working with Hometown Advantage Real Estate.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" className="w-full">
            {testimonials.map((testimonial, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white shadow-apple rounded-xl mb-4 border-none hover:bg-gray-50 transition-colors"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex flex-col">
                    <span className="text-secondary font-semibold text-lg">
                      {testimonial.author}
                    </span>
                    <span className="text-secondary text-sm">
                      {testimonial.quote.slice(0, 50)}...
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-secondary text-base mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-secondary font-semibold text-right">
                    — {testimonial.author}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;