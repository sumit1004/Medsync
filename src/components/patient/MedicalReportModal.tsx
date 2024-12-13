import React from 'react';
import { X, FileText, Download } from 'lucide-react';
import { MedicalReport } from '../../data/mockPatients';

interface MedicalReportModalProps {
  report: MedicalReport;
  isOpen: boolean;
  onClose: () => void;
}

export default function MedicalReportModal({ report, isOpen, onClose }: MedicalReportModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Medical Report Details</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Date</h3>
              <p className="mt-1 text-sm text-gray-900">{report.date}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Type</h3>
              <p className="mt-1 text-sm text-gray-900">{report.type}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-medium text-gray-500">Description</h3>
            <p className="mt-1 text-sm text-gray-900">{report.description}</p>
          </div>

          {/* Doctor & Hospital */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Doctor</h3>
              <p className="mt-1 text-sm text-gray-900">{report.doctor}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Hospital</h3>
              <p className="mt-1 text-sm text-gray-900">{report.hospital}</p>
            </div>
          </div>

          {/* Findings */}
          <div>
            <h3 className="text-sm font-medium text-gray-500">Findings</h3>
            <p className="mt-1 text-sm text-gray-900 whitespace-pre-line">{report.findings}</p>
          </div>

          {/* Recommendations */}
          <div>
            <h3 className="text-sm font-medium text-gray-500">Recommendations</h3>
            <p className="mt-1 text-sm text-gray-900 whitespace-pre-line">{report.recommendations}</p>
          </div>

          {/* Attachment */}
          {report.attachmentUrl && (
            <div>
              <h3 className="text-sm font-medium text-gray-500">Attachment</h3>
              <a
                href={report.attachmentUrl}
                download
                className="mt-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </a>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
