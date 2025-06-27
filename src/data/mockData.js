export const investors = [
  {
    id: "i1",
    name: "Ali Khan",
    snippet: "FinTech investor",
    bio: "Investing in next-gen payment solutions.",
    interests: "FinTech, SaaS",
    portfolio: ["PayPro", "EasySend"]
  },
  {
    id: "i2",
    name: "Sarah Malik",
    snippet: "Healthcare VC",
    bio: "Focused on digital health startups.",
    interests: "HealthTech",
    portfolio: ["MediAI", "FitTrack"]
  },
  {
    id: "i3",
    name: "David Chen",
    snippet: "Crypto/blockchain expert",
    bio: "Investing in blockchain infrastructure.",
    interests: "Blockchain",
    portfolio: ["ChainLayer", "TokenHub"]
  },
  {
    id: "i4",
    name: "Ayesha Noor",
    snippet: "Social Impact investor",
    bio: "Supporting women-led startups.",
    interests: "Social Impact, EdTech",
    portfolio: ["LearnUp", "SafeStep"]
  },
  {
    id: "i5",
    name: "Imran Qureshi",
    snippet: "AI/ML innovator",
    bio: "Invests in AI tools & ML frameworks.",
    interests: "AI, Robotics",
    portfolio: ["BotBrain", "AutoVision"]
  }
];

export const entrepreneurs = [
  {
    id: "e1",
    name: "Hamza Rafiq",
    startup: "GreenTech",
    summary: "Eco-friendly energy solution",
    bio: "Engineer turned founder",
    fundingNeed: "$100K",
    pitch: "GreenTech aims to reduce energy cost by 30%",
    pitchDeck: "https://example.com/greentech-pitch.pdf"
  },
  {
    id: "e2",
    name: "Maria Tanveer",
    startup: "EduBridge",
    summary: "Accessible education for all",
    bio: "Educator from Lahore",
    fundingNeed: "$250K",
    pitch: "EduBridge is an EdTech platform for underserved regions",
    pitchDeck: "https://example.com/edubridge-deck.pdf"
  },
  {
    id: "e3",
    name: "Zainab Jamil",
    startup: "HealthMate",
    summary: "AI for personalized fitness",
    bio: "Fitness & tech enthusiast",
    fundingNeed: "$180K",
    pitch: "AI-based mobile health assistant",
    pitchDeck: "https://example.com/healthmate-deck.pdf"
  },
  {
    id: "e4",
    name: "Bilal Mehmood",
    startup: "AutoDex",
    summary: "Car repair made easy",
    bio: "Automobile expert",
    fundingNeed: "$80K",
    pitch: "AutoDex connects users to verified mechanics",
    pitchDeck: "https://example.com/autodex-pitch.pdf"
  },
  {
    id: "e5",
    name: "Fatima Nadeem",
    startup: "FoodGenie",
    summary: "Smart meal planning",
    bio: "Nutritionist & app dev",
    fundingNeed: "$120K",
    pitch: "FoodGenie builds custom diet plans using AI",
    pitchDeck: "https://example.com/foodgenie-deck.pdf"
  }
];

export const collaborationRequests = [
  {
    id: "r1",
    investorId: "i1",
    entrepreneurId: "e1",
    status: "pending",
    message: "Hi Hamza, I'd love to invest in GreenTech.",
    date: "2025-06-01"
  },
  {
    id: "r2",
    investorId: "i2",
    entrepreneurId: "e1",
    status: "accepted",
    message: "Hello! Can you share EduBridge's growth plans?",
    date: "2025-06-02"
  },
  {
    id: "r3",
    investorId: "i3",
    entrepreneurId: "e1",
    status: "rejected",
    message: "Is HealthMate looking for AI-specific funding?",
    date: "2025-06-03"
  },
  {
    id: "r4",
    investorId: "i4",
    entrepreneurId: "e1",
    status: "pending",
    message: "Hey, I'm interested in AutoDex's social impact angle.",
    date: "2025-06-04"
  },
  {
    id: "r5",
    investorId: "i5",
    entrepreneurId: "e1",
    status: "pending",
    message: "Fatima, tell me about FoodGenie's diet algorithms.",
    date: "2025-06-05"
  }
];

