import React, { useState } from 'react';
import { X, FileText, Calendar, Search } from 'lucide-react';
import { MedicalReport } from '../../data/mockPatients';

interface MedicalReportsListProps {
  reports: MedicalReport[];
  isOpen: boolean;
  onClose: () => void;
  onSelectReport: (report: MedicalReport) => void;
}

export default function MedicalReportsList({ reports, isOpen, onClose, onSelectReport }: MedicalReportsListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  if (!isOpen) return null;

  // Get unique report types
  const reportTypes = ['all', ...new Set(reports.map(report => report.type))];

  // Filter reports based on search term and type
  const filteredReports = reports.filter(report => {
    const matchesSearch = 
      report.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === 'all' || report.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Medical Reports</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Search and Filter Bar */}
        <div className="p-4 border-b space-y-4">
          <div className="relative">
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {reportTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedType === type
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Reports List */}
        <div className="flex-1 overflow-y-auto p-4">
          {filteredReports.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              {reports.length === 0 ? 'No medical reports available' : 'No reports match your search'}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredReports.map((report) => (
                <button
                  key={report.id}
                  onClick={() => onSelectReport(report)}
                  className="w-full text-left p-4 rounded-lg border hover:border-blue-500 hover:shadow-md transition-all group"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                        {report.type}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {report.description}
                      </p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {report.date}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <div className="text-gray-600">
                      {report.doctor} • {report.hospital}
                    </div>
                    <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details →
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-gray-50">
          <div className="text-sm text-gray-500 text-center">
            Showing {filteredReports.length} of {reports.length} reports
          </div>
        </div>
      </div>
    </div>
  );
}
