import React, { useState } from 'react';
import { Upload, X, FileText, Check } from 'lucide-react';
import { mockPatients } from '../data/mockPatients';

interface UploadReportFormData {
  patientId: string;
  type: string;
  description: string;
  doctor: string;
  hospital: string;
  findings: string;
  recommendations: string;
  file?: File;
}

const reportTypes = [
  'Blood Test',
  'X-Ray',
  'MRI',
  'CT Scan',
  'Ultrasound',
  'ECG',
  'Pathology',
  'Dental',
  'Eye Test',
  'Other'
];

export default function UploadReport() {
  const [formData, setFormData] = useState<UploadReportFormData>({
    patientId: '',
    type: '',
    description: '',
    doctor: '',
    hospital: '',
    findings: '',
    recommendations: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', { ...formData, file: selectedFile });
    setUploadSuccess(true);
    setTimeout(() => {
      setUploadSuccess(false);
      // Reset form
      setFormData({
        patientId: '',
        type: '',
        description: '',
        doctor: '',
        hospital: '',
        findings: '',
        recommendations: '',
      });
      setSelectedFile(null);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <Upload className="h-6 w-6 text-blue-600 mr-2" />
            <h1 className="text-2xl font-semibold text-gray-900">Upload Medical Report</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Patient Selection */}
            <div>
              <label htmlFor="patientId" className="block text-sm font-medium text-gray-700">
                Select Patient
              </label>
              <select
                id="patientId"
                name="patientId"
                value={formData.patientId}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                required
              >
                <option value="">Select a patient</option>
                {mockPatients.map(patient => (
                  <option key={patient.id} value={patient.id}>
                    {patient.name} - {patient.id}
                  </option>
                ))}
              </select>
            </div>

            {/* Report Type */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Report Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                required
              >
                <option value="">Select report type</option>
                {reportTypes.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                required
              />
            </div>

            {/* Doctor */}
            <div>
              <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
                Doctor
              </label>
              <input
                type="text"
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                required
              />
            </div>

            {/* Hospital */}
            <div>
              <label htmlFor="hospital" className="block text-sm font-medium text-gray-700">
                Hospital
              </label>
              <input
                type="text"
                id="hospital"
                name="hospital"
                value={formData.hospital}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                required
              />
            </div>

            {/* Findings */}
            <div>
              <label htmlFor="findings" className="block text-sm font-medium text-gray-700">
                Findings
              </label>
              <textarea
                id="findings"
                name="findings"
                value={formData.findings}
                onChange={handleInputChange}
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                required
              />
            </div>

            {/* Recommendations */}
            <div>
              <label htmlFor="recommendations" className="block text-sm font-medium text-gray-700">
                Recommendations
              </label>
              <textarea
                id="recommendations"
                name="recommendations"
                value={formData.recommendations}
                onChange={handleInputChange}
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                required
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Report File
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <FileText className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, DOC, DOCX, JPG, JPEG, PNG up to 10MB
                  </p>
                  {selectedFile && (
                    <p className="text-sm text-gray-600">
                      Selected file: {selectedFile.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {uploadSuccess ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Uploaded Successfully
                  </>
                ) : (
                  <>
                    <Upload className="h-5 w-5 mr-2" />
                    Upload Report
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
