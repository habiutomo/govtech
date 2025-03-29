import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">About GovTech</h1>
            <p className="text-neutral-medium">
              GovTech is a government initiative to modernize public services and enhance citizen experience through technology.
            </p>
          </div>
          
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              Our mission is to leverage technology to improve the delivery of government services, increase transparency, and enhance citizen engagement.
            </p>
            <p className="mb-4">
              We believe that government services should be accessible, efficient, and user-friendly. By using innovative technology solutions, we aim to simplify complex bureaucratic processes and make government more responsive to citizens' needs.
            </p>
            <p>
              GovTech serves as the central portal for citizens to access a wide range of government services, find information, and engage with public institutions efficiently and transparently.
            </p>
          </Card>
          
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <i className="fas fa-user-shield text-primary text-3xl mb-3"></i>
                <h3 className="font-bold text-lg mb-2">Citizen-Centric</h3>
                <p className="text-neutral-medium">Putting citizens' needs first in all our services and decisions</p>
              </div>
              
              <div className="text-center p-4">
                <i className="fas fa-lock text-primary text-3xl mb-3"></i>
                <h3 className="font-bold text-lg mb-2">Security & Privacy</h3>
                <p className="text-neutral-medium">Ensuring the highest standards of data protection and privacy</p>
              </div>
              
              <div className="text-center p-4">
                <i className="fas fa-universal-access text-primary text-3xl mb-3"></i>
                <h3 className="font-bold text-lg mb-2">Accessibility</h3>
                <p className="text-neutral-medium">Making services accessible to all citizens regardless of ability</p>
              </div>
              
              <div className="text-center p-4">
                <i className="fas fa-sync-alt text-primary text-3xl mb-3"></i>
                <h3 className="font-bold text-lg mb-2">Innovation</h3>
                <p className="text-neutral-medium">Continuously improving and modernizing government services</p>
              </div>
              
              <div className="text-center p-4">
                <i className="fas fa-handshake text-primary text-3xl mb-3"></i>
                <h3 className="font-bold text-lg mb-2">Transparency</h3>
                <p className="text-neutral-medium">Being open and accountable in all operations and decisions</p>
              </div>
              
              <div className="text-center p-4">
                <i className="fas fa-chart-line text-primary text-3xl mb-3"></i>
                <h3 className="font-bold text-lg mb-2">Efficiency</h3>
                <p className="text-neutral-medium">Optimizing resources to deliver better services at lower costs</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="mb-4">
              GovTech is led by a team of experienced professionals with backgrounds in public administration, technology, user experience design, and digital transformation.
            </p>
            <p className="mb-6">
              Our diverse team works collaboratively with government agencies at all levels to implement innovative solutions that improve service delivery and citizen satisfaction.
            </p>
            
            <div className="text-center mt-8">
              <h3 className="font-bold text-lg mb-2">Join Our Team</h3>
              <p className="text-neutral-medium mb-4">
                We're always looking for talented individuals who are passionate about using technology to improve government services.
              </p>
              <Button className="bg-primary text-white hover:bg-primary-light">
                View Career Opportunities
              </Button>
            </div>
          </Card>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
            <p className="text-neutral-medium mb-4">
              If you have any questions about GovTech or would like to learn more about our services,
              our team is here to help.
            </p>
            <Link href="/contact">
              <Button className="bg-primary text-white hover:bg-primary-light">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
