import { Button } from './ui/button';

function AboutYumaBanner() {
  return (
    <section
      className="bg-[url('https://images.unsplash.com/photo-1594765384592-d54ca27fe5a4?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-fixed bg-cover bg-center py-16 relative min-h-[400px] flex items-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1594765384592-d54ca27fe5a4?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          There's so much to love about Yuma!
        </h2>
        <p className="text-white text-lg mb-6 max-w-2xl">
          Yuma offers an enriching lifestyle in the heart of Arizona's rugged splendor. You'll love the sunshine, mild winters and all the history and activities Yuma offers.
        </p>
        <Button className="bg-primary text-white hover:bg-opacity-90 rounded-xl">
          More About Yuma
        </Button>
      </div>
    </section>
  );
}

export default AboutYumaBanner;