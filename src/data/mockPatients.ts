import { v4 as uuidv4 } from 'uuid';

export interface MedicalReport {
  id: string;
  date: string;
  type: string;
  description: string;
  doctor: string;
  hospital: string;
  findings: string;
  recommendations: string;
  attachmentUrl?: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  bloodGroup: string;
  contactNumber: string;
  email: string;
  address: string;
  medicalHistory: string[];
  lastVisit: string;
  upcomingAppointment?: string;
  medicalReports: MedicalReport[];
}

export const mockPatients: Patient[] = [
  {
    id: uuidv4(),
    name: "Rajesh Kumar",
    age: 45,
    gender: "Male",
    bloodGroup: "O+",
    contactNumber: "+91 9876543210",
    email: "rajesh.kumar@email.com",
    address: "123 Gandhi Road, Mumbai",
    medicalHistory: ["Hypertension", "Type 2 Diabetes"],
    lastVisit: "2024-12-01",
    upcomingAppointment: "2024-12-20",
    medicalReports: [
      {
        id: uuidv4(),
        date: "2024-12-01",
        type: "Blood Test",
        description: "Comprehensive blood work including HbA1c and lipid profile",
        doctor: "Dr. Priya Mehta",
        hospital: "City General Hospital",
        findings: "- HbA1c: 7.2% (Target: <7.0%)\n- Total Cholesterol: 185 mg/dL\n- Blood Pressure: 138/88 mmHg",
        recommendations: "1. Continue current medication\n2. Increase physical activity\n3. Follow-up in 3 months",
        attachmentUrl: "/reports/blood_test_001.pdf"
      },
      {
        id: uuidv4(),
        date: "2024-11-15",
        type: "ECG",
        description: "Routine ECG checkup",
        doctor: "Dr. Suresh Patel",
        hospital: "Heart Care Center",
        findings: "Normal sinus rhythm\nNo significant ST-T wave changes",
        recommendations: "Continue current cardiac medications\nSchedule follow-up in 6 months",
        attachmentUrl: "/reports/ecg_001.pdf"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Priya Sharma",
    age: 32,
    gender: "Female",
    bloodGroup: "A+",
    contactNumber: "+91 9876543211",
    email: "priya.sharma@email.com",
    address: "456 Nehru Street, Delhi",
    medicalHistory: ["Asthma"],
    lastVisit: "2024-11-15",
    medicalReports: [
      {
        id: uuidv4(),
        date: "2024-11-15",
        type: "Pulmonary Function Test",
        description: "Comprehensive lung function assessment",
        doctor: "Dr. Rahul Verma",
        hospital: "Respiratory Care Institute",
        findings: "- FEV1: 75% of predicted\n- FVC: 80% of predicted\n- FEV1/FVC ratio: 0.85\n- Mild bronchial obstruction noted",
        recommendations: "1. Continue prescribed inhaler\n2. Avoid known triggers\n3. Follow-up in 3 months\n4. Consider allergy testing",
        attachmentUrl: "/reports/pft_001.pdf"
      },
      {
        id: uuidv4(),
        date: "2024-10-20",
        type: "Allergy Panel",
        description: "Comprehensive allergen testing",
        doctor: "Dr. Anjali Gupta",
        hospital: "Allergy & Immunology Center",
        findings: "Positive reactions to:\n- Dust mites\n- Pollen\n- Pet dander",
        recommendations: "1. Use HEPA air purifier\n2. Implement dust control measures\n3. Consider immunotherapy",
        attachmentUrl: "/reports/allergy_001.pdf"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Amit Patel",
    age: 28,
    gender: "Male",
    bloodGroup: "B+",
    contactNumber: "+91 9876543212",
    email: "amit.patel@email.com",
    address: "789 MG Road, Bangalore",
    medicalHistory: ["Allergies"],
    lastVisit: "2024-09-18",
    medicalReports: [
      {
        id: uuidv4(),
        date: "2024-09-18",
        type: "Skin Test",
        description: "Comprehensive skin allergy testing",
        doctor: "Dr. Priya Nair",
        hospital: "Allergy & Asthma Center",
        findings: "Positive reactions to:\n- Shellfish\n- Tree nuts\n- Wheat",
        recommendations: "1. Strict avoidance of identified allergens\n2. Carry emergency epinephrine\n3. Wear medical alert bracelet",
        attachmentUrl: "/reports/allergy_002.pdf"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Meera Singh",
    age: 55,
    gender: "Female",
    bloodGroup: "AB+",
    contactNumber: "+91 9876543213",
    email: "meera.singh@email.com",
    address: "321 Tagore Lane, Kolkata",
    medicalHistory: ["Arthritis", "High Cholesterol"],
    lastVisit: "2024-12-02",
    upcomingAppointment: "2024-12-25",
    medicalReports: [
      {
        id: uuidv4(),
        date: "2024-12-02",
        type: "Joint Assessment",
        description: "Comprehensive joint examination and X-ray",
        doctor: "Dr. Amit Roy",
        hospital: "Orthopedic Specialty Center",
        findings: "- Moderate osteoarthritis in both knees\n- Mild inflammation in finger joints\n- X-ray shows joint space narrowing",
        recommendations: "1. Start physical therapy\n2. Continue anti-inflammatory medication\n3. Consider weight management program",
        attachmentUrl: "/reports/joint_assessment_001.pdf"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Arjun Reddy",
    age: 35,
    gender: "Male",
    bloodGroup: "O-",
    contactNumber: "+91 9876543214",
    email: "arjun.reddy@email.com",
    address: "567 Anna Nagar, Chennai",
    medicalHistory: ["Migraine"],
    lastVisit: "2024-11-20",
    medicalReports: [
      {
        id: uuidv4(),
        date: "2024-11-20",
        type: "Neurological Assessment",
        description: "Migraine evaluation and brain imaging",
        doctor: "Dr. Sanjay Kapoor",
        hospital: "Neurology Institute",
        findings: "- MRI shows no structural abnormalities\n- Frequent episodes of migraine with aura\n- Associated symptoms: photophobia, nausea",
        recommendations: "1. Start preventive medication\n2. Maintain migraine diary\n3. Identify and avoid triggers\n4. Regular sleep schedule",
        attachmentUrl: "/reports/neuro_001.pdf"
      },
      {
        id: uuidv4(),
        date: "2024-10-05",
        type: "Vision Test",
        description: "Comprehensive eye examination",
        doctor: "Dr. Maya Iyer",
        hospital: "Vision Care Center",
        findings: "- Normal visual acuity\n- Mild astigmatism\n- No retinal abnormalities",
        recommendations: "1. Use computer glasses\n2. Take regular screen breaks\n3. Follow 20-20-20 rule",
        attachmentUrl: "/reports/vision_001.pdf"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Ananya Das",
    age: 42,
    gender: "Female",
    bloodGroup: "B-",
    contactNumber: "+91 9876543215",
    email: "ananya.das@email.com",
    address: "890 Park Street, Pune",
    medicalHistory: ["Thyroid disorder"],
    lastVisit: "2024-12-04",
    upcomingAppointment: "2024-12-25",
    medicalReports: [
      {
        id: uuidv4(),
        date: "2024-12-04",
        type: "Thyroid Function Test",
        description: "Complete thyroid profile",
        doctor: "Dr. Ravi Kumar",
        hospital: "Endocrine Care Center",
        findings: "- TSH: 4.8 mIU/L (High)\n- T4: 0.9 ng/dL (Normal)\n- T3: 120 ng/dL (Normal)\n- Anti-TPO antibodies: Positive",
        recommendations: "1. Adjust levothyroxine dosage\n2. Regular monitoring\n3. Follow-up in 6 weeks\n4. Continue lifestyle modifications",
        attachmentUrl: "/reports/thyroid_001.pdf"
      },
      {
        id: uuidv4(),
        date: "2024-11-01",
        type: "Bone Density Scan",
        description: "DEXA scan for bone health assessment",
        doctor: "Dr. Neha Shah",
        hospital: "Bone & Joint Center",
        findings: "- Spine T-score: -1.2\n- Hip T-score: -0.8\n- Osteopenia indicated",
        recommendations: "1. Calcium supplementation\n2. Vitamin D supplementation\n3. Weight-bearing exercises",
        attachmentUrl: "/reports/dexa_001.pdf"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Mohammed Khan",
    age: 50,
    gender: "Male",
    bloodGroup: "A-",
    contactNumber: "+91 9876543216",
    email: "mohammed.khan@email.com",
    address: "234 Civil Lines, Hyderabad",
    medicalHistory: ["Heart condition", "Diabetes"],
    lastVisit: "2024-08-16",
    medicalReports: [
      {
        id: uuidv4(),
        date: "2024-08-16",
        type: "Cardiac Stress Test",
        description: "Treadmill stress test with ECG monitoring",
        doctor: "Dr. Arun Sharma",
        hospital: "Heart Care Institute",
        findings: "- Achieved target heart rate\n- No significant ST changes\n- Normal blood pressure response\n- Good exercise tolerance",
        recommendations: "1. Continue cardiac rehabilitation\n2. Maintain current medications\n3. Regular exercise program\n4. Follow heart-healthy diet",
        attachmentUrl: "/reports/cardiac_001.pdf"
      },
      {
        id: uuidv4(),
        date: "2024-08-15",
        type: "Blood Test",
        description: "Comprehensive metabolic panel with HbA1c",
        doctor: "Dr. Priya Mehta",
        hospital: "Diabetes Care Center",
        findings: "- HbA1c: 7.5%\n- Fasting glucose: 145 mg/dL\n- Cholesterol: 190 mg/dL\n- Triglycerides: 150 mg/dL",
        recommendations: "1. Adjust insulin dosage\n2. Monitor blood sugar regularly\n3. Continue diet plan\n4. Regular exercise",
        attachmentUrl: "/reports/diabetes_001.pdf"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Sanjana Gupta",
    age: 29,
    gender: "Female",
    bloodGroup: "O+",
    contactNumber: "+91 9876543217",
    email: "sanjana.gupta@email.com",
    address: "432 Model Town, Lucknow",
    medicalHistory: ["Anemia"],
    lastVisit: "2024-12-02",
    medicalReports: []
  },
  {
    id: uuidv4(),
    name: "Vikram Malhotra",
    age: 48,
    gender: "Male",
    bloodGroup: "AB-",
    contactNumber: "+91 9876543218",
    email: "vikram.malhotra@email.com",
    address: "765 Sector 17, Chandigarh",
    medicalHistory: ["Back pain", "Insomnia"],
    lastVisit: "2024-11-19",
    upcomingAppointment: "2024-12-28",
    medicalReports: []
  },
  {
    id: uuidv4(),
    name: "Riya Kapoor",
    age: 31,
    gender: "Female",
    bloodGroup: "B+",
    contactNumber: "+91 9876543219",
    email: "riya.kapoor@email.com",
    address: "543 Banjara Hills, Hyderabad",
    medicalHistory: ["PCOD"],
    lastVisit: "2024-10-21",
    medicalReports: []
  },
  {
    id: uuidv4(),
    name: "Karthik Iyer",
    age: 37,
    gender: "Male",
    bloodGroup: "A+",
    contactNumber: "+91 9876543220",
    email: "karthik.iyer@email.com",
    address: "876 Koramangala, Bangalore",
    medicalHistory: ["Gastritis"],
    lastVisit: "2024-12-07",
    upcomingAppointment: "2024-12-22",
    medicalReports: []
  },
  {
    id: uuidv4(),
    name: "Zara Sheikh",
    age: 26,
    gender: "Female",
    bloodGroup: "O-",
    contactNumber: "+91 9876543221",
    email: "zara.sheikh@email.com",
    address: "198 Salt Lake, Kolkata",
    medicalHistory: ["Eczema"],
    lastVisit: "2024-11-23",
    medicalReports: []
  },
  {
    id: uuidv4(),
    name: "Rahul Verma",
    age: 52,
    gender: "Male",
    bloodGroup: "B-",
    contactNumber: "+91 9876543222",
    email: "rahul.verma@email.com",
    address: "654 Aundh, Pune",
    medicalHistory: ["High Blood Pressure", "Obesity"],
    lastVisit: "2024-09-18",
    upcomingAppointment: "2024-12-24",
    medicalReports: []
  },
  {
    id: uuidv4(),
    name: "Neha Saxena",
    age: 33,
    gender: "Female",
    bloodGroup: "AB+",
    contactNumber: "+91 9876543223",
    email: "neha.saxena@email.com",
    address: "321 Gomti Nagar, Lucknow",
    medicalHistory: ["Vitamin D deficiency"],
    lastVisit: "2024-12-04",
    medicalReports: []
  }
];
