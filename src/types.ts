import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export type WorkerStatus = 'pending' | 'verified' | 'rejected';
export type ClaimStatus = 'Approved' | 'Pending' | 'Rejected' | 'Paid' | 'Processing' | 'Failed';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  platform: string;
  workerId: string;
  avgDailyIncome: number;
  workingHours: number;
  status: WorkerStatus;
  isLoggedIn: boolean;
  role: 'worker' | 'admin';
}

export interface Policy {
  id: string;
  name: string;
  premium: number;
  coverage: number;
  description: string;
}

export interface Claim {
  id: string;
  workerId: string;
  workerName: string;
  eventType: string;
  city: string;
  amount: number;
  status: ClaimStatus;
  date: string;
}

export const MOCK_POLICIES: Policy[] = [
  { id: 'p1', name: 'Basic Plan', premium: 15, coverage: 300, description: 'Essential protection for light disruptions.' },
  { id: 'p2', name: 'Standard Plan', premium: 25, coverage: 500, description: 'Balanced coverage for frequent weather events.' },
  { id: 'p3', name: 'Premium Plan', premium: 40, coverage: 800, description: 'Maximum protection including heat and curfews.' },
];

export const MOCK_CLAIMS: Claim[] = [
  { id: 'CLM-001', workerId: 'W-123', workerName: 'Rahul Sharma', eventType: 'Heavy Rain', city: 'Mumbai', amount: 500, status: 'Approved', date: '2024-03-10' },
  { id: 'CLM-002', workerId: 'W-124', workerName: 'Priya Patel', eventType: 'Extreme Heat', city: 'Delhi', amount: 300, status: 'Pending', date: '2024-03-12' },
  { id: 'CLM-003', workerId: 'W-125', workerName: 'Curfew', city: 'Bangalore', eventType: 'Curfew', amount: 800, status: 'Rejected', date: '2024-03-08' },
];

export const MOCK_WORKERS: User[] = [
  { id: 'W-123', name: 'Rahul Sharma', email: 'rahul@example.com', phone: '9876543210', city: 'Mumbai', platform: 'Zomato', workerId: 'ZOM-998', avgDailyIncome: 1200, workingHours: 10, status: 'verified', isLoggedIn: false, role: 'worker' },
  { id: 'W-124', name: 'Priya Patel', email: 'priya@example.com', phone: '9876543211', city: 'Delhi', platform: 'Swiggy', workerId: 'SWI-442', avgDailyIncome: 1500, workingHours: 8, status: 'pending', isLoggedIn: false, role: 'worker' },
];
