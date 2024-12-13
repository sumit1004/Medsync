import React from 'react';
import { X, Github, Linkedin, Mail, Globe, Twitter } from 'lucide-react';

interface DeveloperPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DeveloperInfo {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    website?: string;
    twitter?: string;
  };
}

const developers: DeveloperInfo[] = [
  {
    name: 'Shubh Raj Gupta',
    role: 'Developer',
    bio: '',
    image: '/assets/developers/shubh.jpg',
    social: {
      github: 'https://github.com/shubhrajgupta',
      linkedin: 'https://www.linkedin.com/in/shubh-raj-gupta-466907279?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2xR0mfmyTRCr8So0q9tzOA%3D%3D',
      email: 'shubhrajgupta.1@gmail.com',
      twitter: 'https://twitter.com/shubhrajgupta'
    }
  },
  {
    name: 'Sumit kumar',
    role: 'Lead Developer',
    bio: '',
    image: '/assets/developers/sumit.jpg',
    social: {
      github: 'https://github.com/sumit1004',
      linkedin: 'https://www.linkedin.com/in/sumit-kumar-685954329?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bkd6msY%2BWRIKqjV79QdvkkA%3D%3D',
      email: 'sumitkumar042006@gmail.com',
      website: 'https://sumit.dev'
      
    }
  },
  {
    name: 'Roshank Chandraker',
    role: 'UI/UX Specialist',
    bio: '',
    image: '/assets/developers/roshank.jpg',
    social: {
      github: 'https://github.com/Roshan-x-arc',
      linkedin: 'https://www.linkedin.com/in/roshan-chandraker-187a06327?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT6zmh6aTR1S32C7997T1tg%3D%3D',
      email: 'roshanchandraker286@gmail.com',
      twitter: 'https://twitter.com/roshankc'
    }
  }
];

export default function DevelopersPopup({ isOpen, onClose }: DeveloperPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">Meet Our Developers</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6 grid md:grid-cols-3 gap-6">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-200">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      dev.name
                    )}&background=0D8ABC&color=fff`;
                  }}
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{dev.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{dev.role}</p>
              <p className="text-gray-600 mb-4 text-sm">{dev.bio}</p>
              
              <div className="flex space-x-3">
                {dev.social.github && (
                  <a
                    href={dev.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {dev.social.linkedin && (
                  <a
                    href={dev.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {dev.social.email && (
                  <a
                    href={`mailto:${dev.social.email}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                )}
                {dev.social.website && (
                  <a
                    href={dev.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Website"
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                )}
                {dev.social.twitter && (
                  <a
                    href={dev.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
