import React, { useState } from 'react';
import { Search, Filter, Plus, FileText, Calendar, Activity, ClipboardList } from 'lucide-react';
import { Patient, mockPatients, MedicalReport } from '../data/mockPatients';
import MedicalReportModal from '../components/patient/MedicalReportModal';
import MedicalReportsList from '../components/patient/MedicalReportsList';

export default function PatientRecords() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>(mockPatients);
  const [selectedReport, setSelectedReport] = useState<MedicalReport | null>(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isReportsListOpen, setIsReportsListOpen] = useState(false);
  const [selectedPatientReports, setSelectedPatientReports] = useState<MedicalReport[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = mockPatients.filter(patient =>
      patient.name.toLowerCase().includes(term) ||
      patient.id.toLowerCase().includes(term) ||
      patient.medicalHistory.some(condition => condition.toLowerCase().includes(term))
    );
    setFilteredPatients(filtered);
  };

  const handleViewReports = (reports: MedicalReport[]) => {
    setSelectedPatientReports(reports);
    setIsReportsListOpen(true);
  };

  const handleSelectReport = (report: MedicalReport) => {
    setSelectedReport(report);
    setIsReportsListOpen(false);
    setIsReportModalOpen(true);
  };

  const handleViewReport = (report: MedicalReport) => {
    setSelectedReport(report);
    setIsReportModalOpen(true);
  };

  const getStatusColor = (lastVisit: string) => {
    const lastVisitDate = new Date(lastVisit);
    const today = new Date('2024-12-12'); // Using current date from context
    const diffTime = today.getTime() - lastVisitDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 30) return 'bg-green-100 text-green-800'; // Active
    if (diffDays <= 90) return 'bg-yellow-100 text-yellow-800'; // Regular
    return 'bg-red-100 text-red-800'; // Inactive
  };

  const getStatus = (lastVisit: string) => {
    const lastVisitDate = new Date(lastVisit);
    const today = new Date('2024-12-12'); // Using current date from context
    const diffTime = today.getTime() - lastVisitDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 30) return 'Active';
    if (diffDays <= 90) return 'Regular';
    return 'Inactive';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">Patient Records</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage and view all patient records in one place
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Add New Patient
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1 relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search patients by name, ID, or medical condition..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="h-5 w-5 mr-2 text-gray-500" />
              Filters
            </button>
          </div>
        </div>

        {/* Patient Records Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medical History
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Visit
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Next Appointment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medical Reports
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPatients.map((patient) => (
                  <tr key={patient.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                          <div className="text-sm text-gray-500">ID: {patient.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {patient.medicalHistory.join(', ')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{patient.lastVisit}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {patient.upcomingAppointment || 'No upcoming appointment'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(patient.lastVisit)}`}>
                        {getStatus(patient.lastVisit)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleViewReports(patient.medicalReports)}
                          className="text-blue-600 hover:text-blue-700"
                          disabled={patient.medicalReports.length === 0}
                        >
                          <ClipboardList className="h-5 w-5" />
                        </button>
                        <span className="text-sm text-gray-500">
                          {patient.medicalReports.length} reports
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-3">
                        <button className="text-blue-600 hover:text-blue-700">
                          <FileText className="h-5 w-5" />
                        </button>
                        <button className="text-blue-600 hover:text-blue-700">
                          <Calendar className="h-5 w-5" />
                        </button>
                        <button className="text-blue-600 hover:text-blue-700">
                          <Activity className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Medical Reports List */}
      <MedicalReportsList
        reports={selectedPatientReports}
        isOpen={isReportsListOpen}
        onClose={() => setIsReportsListOpen(false)}
        onSelectReport={handleSelectReport}
      />

      {/* Medical Report Modal */}
      {selectedReport && (
        <MedicalReportModal
          report={selectedReport}
          isOpen={isReportModalOpen}
          onClose={() => {
            setIsReportModalOpen(false);
            setSelectedReport(null);
          }}
        />
      )}
    </div>
  );
}
