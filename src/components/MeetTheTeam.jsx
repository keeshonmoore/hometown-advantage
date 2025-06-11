import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';

const teamMembers = {
  yuma: [
    {
      name: 'MICHELLE CLABORN',
      position: 'Designated Broker / Owner',
      phone: '928-941-2116',
      image: './team/MichelleC.avif',
    },
    {
      name: 'JESSICA HOLBROOK',
      position: 'Realtor® / Office Manager',
      phone: '928-941-4046',
      image: './team/jessica.avif',
    },
    {
      name: 'ARYANA VERDUGO',
      position: 'Property Management Assistant',
      phone: '',
      image: './team/IMG_3379.avif',
    },
    {
      name: 'JODY RODRIGUEZ',
      position: 'Realtor® / Branch Manager',
      phone: '928-581-4036',
      image: './team/jody.avif',
    },
    {
      name: 'CAREN STANLEY',
      position: 'Realtor®',
      phone: '719-469-4791',
      image: './team/CarenS2-2.avif',
    },
    {
      name: 'CARLA WILLIAMS',
      position: 'Realtor®',
      phone: '928-581-3588',
      image: './team/Carla_copy_2.avif',
    },
    {
      name: 'DONNA CURRY',
      position: 'Realtor®',
      phone: '928-580-5946',
      image: './team/DonnaCurry.avif',
    },
    {
      name: 'RONDA YANCEY',
      position: 'Realtor® GRI',
      phone: '928-581-7536',
      image: './team/rhonda-yancey.avif',
    },
  ],
  phoenix: [
    {
      name: 'TERESA GODEK',
      position: 'Realtor / Phoenix Office Manager',
      phone: '520-471-1864',
      image: './team/teresaG.avif',
    }
  ],
};

function MeetTheTeam() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-secondary text-center mb-12">
          Meet Our Team
        </h2>
        <Tabs defaultValue="yuma" className="w-full">
          <TabsList className="flex justify-center gap-4 mb-8">
            <TabsTrigger
              value="yuma"
              className="text-secondary hover:text-primary data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Yuma
            </TabsTrigger>
            <TabsTrigger
              value="phoenix"
              className="text-secondary hover:text-primary data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Phoenix
            </TabsTrigger>
          </TabsList>
          <TabsContent value="yuma">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.yuma.map((member, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-apple rounded-xl transition-transform hover:scale-105 flex flex-col h-full"
                >
                  <CardHeader className="p-0">
                    <img
                      src={member.image}
                      alt={`${member.name} headshot`}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow p-4 text-center">
                    <h3 className="text-xl font-semibold text-secondary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-secondary mb-2">{member.position}</p>
                    <div className="flex items-center justify-center gap-2 text-secondary">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Button className="bg-primary text-white hover:bg-opacity-90 rounded-xl w-full">
                      Read Full Bio
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="phoenix">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.phoenix.map((member, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-apple rounded-xl transition-transform hover:scale-105 flex flex-col h-full"
                >
                  <CardHeader className="p-0">
                    <img
                      src={member.image}
                      alt={`${member.name} headshot`}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow p-4 text-center">
                    <h3 className="text-xl font-semibold text-secondary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-secondary mb-2">{member.position}</p>
                    <div className="flex items-center justify-center gap-2 text-secondary">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Button className="bg-primary text-white hover:bg-opacity-90 rounded-xl w-full">
                      Read Full Bio
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default MeetTheTeam;