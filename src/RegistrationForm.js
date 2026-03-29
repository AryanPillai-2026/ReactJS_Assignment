import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', rollNo: '', course: '' });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  const validateAndSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.rollNo || !formData.course) {
      setError('All fields are required');
      return;
    }
    if (isNaN(formData.rollNo)) {
      setError('Roll Number must be a numeric value');
      return;
    }
    setError('');
    setSubmittedData(formData);
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={validateAndSubmit}>
        <div>
          <input
            placeholder="Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <input
            placeholder="Roll No"
            onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
          />
        </div>
        <div>
          <input
            placeholder="Course"
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {submittedData && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Submitted Details:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Roll No: {submittedData.rollNo}</p>
          <p>Course: {submittedData.course}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;