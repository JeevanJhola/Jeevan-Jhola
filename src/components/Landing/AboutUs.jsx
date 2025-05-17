import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaUsers, FaLeaf, FaRecycle, FaChartLine, FaHandsHelping, FaEnvelope, FaPhone, FaCalendarAlt, FaSeedling, FaUserCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Tilt } from "react-tilt";

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const controls = useAnimation();

  // Team data
  const teamMembers = [
    {
      id: 1,
      name: "Akash Kumar",
      role: "Company Representative",
      skills: ["Hiring", "Team Management", "Content Creation"],
      department: "Management",
      email: "hrakashchauhan@gmail.com",
      phone: "9709799899",
      joiningDate: "01/04/2025"
    },
    {
      id: 2,
      name: "Ramya",
      role: "HR Specialist",
      skills: ["Hiring", "HR Operations"],
      department: "Organization",
      email: "ramyarao4043@gmail.com",
      phone: "-",
      joiningDate: "02/04/2025"
    },
    {
      id: 3,
      name: "Pralhad Saw",
      role: "Content Manager",
      skills: ["Content Creation", "LinkedIn Management"],
      department: "Social Media",
      email: "savpralhad@gmail.com",
      phone: "8928396744",
      joiningDate: "17/05/2025"
    },
    {
      id: 4,
      name: "Noel Manoj",
      role: "Tech Support",
      skills: ["Web Development", "Automation Tools", "Maintenance"],
      department: "Execution",
      email: "noelmanoj5809@gmail.com",
      phone: "9746584726",
      joiningDate: "02/04/2025"
    },
    {
      id: 5,
      name: "Adithyan K",
      role: "Research Analyst",
      skills: ["Data Analysis", "Trend Research"],
      department: "Execution",
      email: "adithyankoonoth@gmail.com",
      phone: "9562099491",
      joiningDate: "02/04/2025"
    }
  ];

  const squads = [
    {
      name: "Management Squad",
      icon: <FaHandsHelping className="text-3xl text-white" />,
      color: "from-emerald-600 to-teal-500",
      roles: ["Squad Lead", "People Coach", "Task Matcher", "Problem Solver", "Comms Liaison"]
    },
    {
      name: "Organization Squad",
      icon: <FaRecycle className="text-3xl text-white" />,
      color: "from-teal-600 to-cyan-500",
      roles: ["Systems Builder", "Progress Tracker", "Doc Master", "Meeting Manager", "Task Cleaner"]
    },
    {
      name: "Planning Squad",
      icon: <FaChartLine className="text-3xl text-white" />,
      color: "from-amber-500 to-orange-400",
      roles: ["Roadmapper", "Dependency Tracker", "Risk Planner", "Resource Allocator", "Feedback Loop Owner"]
    },
    {
      name: "Execution Squad",
      icon: <FaUsers className="text-3xl text-white" />,
      color: "from-green-600 to-emerald-500",
      roles: ["Design Lead", "Social Media Coordinator", "Tech Support", "Research Analyst", "Outreach Specialist"]
    }
  ];

  const stats = [
    { id: 1, label: "Bags Circulated", value: "1.2M+", icon: <FaLeaf className="text-emerald-500" /> },
    { id: 2, label: "Plastic Reduced", value: "85%", icon: <FaRecycle className="text-teal-500" /> },
    { id: 3, label: "Active Volunteers", value: "1K+", icon: <FaUsers className="text-amber-500" /> },
    { id: 4, label: "Partner Shops", value: "200+", icon: <FaHandsHelping className="text-green-500" /> }
  ];

  // Handle resize to determine mobile or desktop view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate team members
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  // Animate squad cards on hover
  const squadVariants = {
    hover: {
      y: -10,
      rotate: Math.random() * 4 - 2,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  // Determine visible cards based on screen size
  const visibleCards = isMobile ? 1 : 3;
  const visibleIndices = Array.from({ length: visibleCards }, (_, i) => (activeIndex + i) % teamMembers.length);

  // Calculate translation for carousel
  const translationX = isMobile ? `-${activeIndex * 100}%` : `calc(-${activeIndex * (100 / 3)}%)`;

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      {/* Floating leaves decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-200"
            initial={{ y: -10, x: Math.random() * 100 }}
            animate={{ y: [0, -20, 0], rotate: [0, 180] }}
            transition={{ duration: 4 + i*2, repeat: Infinity }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            <FaLeaf className="text-4xl" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="mb-6 inline-flex items-center bg-emerald-100 px-6 py-2 rounded-full"
          >
            <FaSeedling className="mr-2 text-emerald-600" />
            <span className="text-emerald-700 font-medium">Our Story</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
            Building India's Reusable Future
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're a passionate collective driving systemic change through innovation, collaboration, 
            and community-powered solutions. Our squads work in harmony to create India's largest 
            plastic-free network.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <Tilt key={stat.id} options={{ max: 15, scale: 1.05 }}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Enhanced Team Carousel */}
        <div className="mb-20 overflow-hidden px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">Meet Our Changemakers</h2>
          
          <div className="relative">
            {/* Carousel Container */}
            <motion.div 
              className="flex gap-2 md:gap-6"
              animate={{ x: translationX }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id} 
                  className="flex-shrink-0 w-full md:w-1/3 px-2"
                >
                  <motion.div
                    animate={{
                      opacity: visibleIndices.includes(index) ? 1 : 0.7,
                      scale: visibleIndices.includes(index) ? 1.05 : 0.95
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Tilt options={{ max: 10, scale: 1.03 }}>
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100 hover:border-emerald-200 transition-all h-full">
                        {/* Profile Photo */}
                        <div className="relative w-28 h-28 mx-auto mb-4">
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-md" />
                          <div className="relative rounded-full overflow-hidden w-24 h-24 mx-auto mt-2 border-4 border-white">
                            <FaUserCircle className="w-full h-full text-emerald-100" />
                          </div>
                        </div>

                        {/* Member Info */}
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                          <p className="text-emerald-600 font-medium mt-1 text-sm">{member.role}</p>
                          <span className="text-xs text-gray-500">{member.department}</span>
                        </div>

                        {/* Skills */}
                        <div className="mt-4 flex flex-wrap gap-1 justify-center">
                          {member.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>

                        {/* Contact Info */}
                        <div className="mt-4 space-y-1 text-center text-sm">
                          {!member.email.includes('xxx') && (
                            <div className="flex items-center justify-center text-gray-600">
                              <FaEnvelope className="mr-1 text-emerald-600 text-xs" />
                              <a href={`mailto:${member.email}`} className="hover:underline truncate">{member.email}</a>
                            </div>
                          )}
                          
                          {!member.phone.includes('xxx') && (
                            <div className="flex items-center justify-center text-gray-600">
                              <FaPhone className="mr-1 text-emerald-600 text-xs" />
                              <span className="truncate">{member.phone}</span>
                            </div>
                          )}

                          <div className="flex items-center justify-center text-gray-600">
                            <FaCalendarAlt className="mr-1 text-emerald-600 text-xs" />
                            <span className="truncate">Joined: {member.joiningDate}</span>
                          </div>
                        </div>
                      </div>
                    </Tilt>
                  </motion.div>
                </div>
              ))}
            </motion.div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => setActiveIndex(prev => (prev > 0 ? prev - 1 : teamMembers.length - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-emerald-100 transition-colors"
            >
              <FaChevronLeft className="text-emerald-700" />
            </button>
            <button 
              onClick={() => setActiveIndex(prev => (prev < teamMembers.length - 1 ? prev + 1 : 0))}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-emerald-100 transition-colors"
            >
              <FaChevronRight className="text-emerald-700" />
            </button>
          </div>
        </div>

        {/* Enhanced Squad Cards */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">Our Operational Squads</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {squads.map((squad, index) => (
              <motion.div
                key={index}
                variants={squadVariants}
                whileHover="hover"
                className={`relative overflow-hidden rounded-3xl shadow-xl group h-full`}
              >
                <div className={`absolute inset-0 ${squad.color.replace("from-", "bg-gradient-to-br from-")} opacity-90`} />
                
                <div className="relative p-8 h-full backdrop-blur-sm">
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="p-4 bg-white/20 rounded-2xl border-2 border-white/20"
                    >
                      {squad.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">{squad.name}</h2>
                      <div className="space-y-3">
                        {squad.roles.map((role, i) => (
                          <div key={i} className="flex items-center group">
                            <div className="w-2 h-2 bg-emerald-300 rounded-full mr-3" />
                            <span className="text-white/90 group-hover:text-white transition-colors">
                              {role}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Elements */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="absolute -right-20 -top-20 text-white/10">
                      <FaLeaf className="w-48 h-48" />
                    </div>
                    <div className="absolute -left-20 -bottom-20 text-white/10">
                      <FaRecycle className="w-48 h-48" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-emerald-900 text-white rounded-2xl p-12 text-center relative overflow-hidden mb-20"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-geometric.png')]" />
          <h2 className="text-3xl font-bold mb-8">Our Operating Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-semibold mb-2">Circular Systems</h3>
              <p className="text-emerald-200">Closed-loop processes that eliminate waste</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-emerald-200">Decentralized network powered by local action</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Radical Innovation</h3>
              <p className="text-emerald-200">Tech-enabled solutions for scale</p>
            </div>
          </div>
        </motion.div>

        {/* Animated Timeline */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">Our Journey</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-200 transform -translate-x-1/2" />
            
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-4">
              <motion.div 
                initial={{ scaleY: 0 }} 
                whileInView={{ scaleY: 1 }}
                className="origin-bottom w-4 h-24 bg-gradient-to-t from-emerald-400 to-emerald-200"
              />
              <FaSeedling className="text-4xl text-emerald-600 -mt-8" />
            </div>

            {[2025, 2026, 2027, 2028].map((year, index) => (
              <div key={year} className={`mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex items-center`}>
                <div className="md:w-1/2 p-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-emerald-100"
                  >
                    <h3 className="text-xl font-bold text-emerald-700 mb-2">Milestone {index + 1}</h3>
                    <p className="text-gray-600">Breakthrough achievement in {year}</p>
                  </motion.div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;