// components/LinksTable.js
import { useState, useEffect } from 'react';

export default function LinksTable() {
  // State to hold our data
  const [todayLinks, setTodayLinks] = useState([]);
  const [previousLinks, setPreviousLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Your Google Apps Script URL
    const API_URL = 'https://script.google.com/macros/s/AKfycbw6p17GawyYWxAXKq5LoP_p7nuKQqnwcseMRxx9pUtIPbSlYKnjoIVaaoVDFnCnwNZIRg/exec';

    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          // This helps catch server errors like 500
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Reverse the arrays to show newest first
        setTodayLinks(data.today.reverse());
        setPreviousLinks(data.previous.reverse());
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch Error:', err);
        setError('Sorry, could not load links at this time.');
        setLoading(false);
      });
  }, []); // The empty array [] means this runs only once when the component mounts

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '20px', fontStyle: 'italic', color: '#888' }}>
        <p>Loading latest links...</p>
    </div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
        <p>{error}</p>
    </div>;
  }

  const renderTable = (title, links) => (
    <>
      <h3 className="table-title" style={{ marginTop: title.includes('Previous') ? '40px' : '0' }}>{title}</h3>
      <div className="links-table-container">
        <table className="links-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th><i className="fas fa-link"></i> Free Dice Dreams Rolls</th>
            </tr>
          </thead>
          <tbody>
            {links.map((link, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{link.date}</td>
                <td>
                  <a href={link.url} className="claim-link" target="_blank" rel="noopener noreferrer">
                    Claim Free Rolls
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  return (
    <div className="content-section links-section">
      <h2 className="info-title">Dice Dreams Links For Free Rolls Daily Updated Links</h2>
      <div className="update-status">
        <span className="dot"></span> Updated: <span>Just Now</span>
      </div>
      {todayLinks.length > 0 && renderTable("Today's Links", todayLinks)}
      {previousLinks.length > 0 && renderTable("Previous Links", previousLinks)}
    </div>
  );
}