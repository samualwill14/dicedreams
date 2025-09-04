// File: components/LinksTable.js

import { useState, useEffect } from 'react';

export default function LinksTable() {
  const [todayLinks, setTodayLinks] = useState([]);
  const [previousLinks, setPreviousLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = 'https://script.google.com/macros/s/AKfycbw6p17GawyYWxAXKq5LoP_p7nuKQqnwcseMRxx9pUtIPbSlYKnjoIVaaoVDFnCnwNZIRg/exec';

    fetch(API_URL)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        setTodayLinks(data.today.reverse());
        setPreviousLinks(data.previous.reverse());
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch Error:', err);
        setError('Sorry, could not load links at this time.');
        setLoading(false);
      });
  }, []);

  const handleCopyClick = (url, event) => {
    const button = event.currentTarget;
    navigator.clipboard.writeText(url).then(() => {
      const originalIcon = button.innerHTML;
      button.innerHTML = '<i class="fas fa-check" style="color: green;"></i>';
      setTimeout(() => {
        button.innerHTML = originalIcon;
      }, 2000);
    });
  };

  const renderTable = (title, links) => (
    links.length > 0 && (
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
                    <button className="copy-btn" title="Copy link" onClick={(e) => handleCopyClick(link.url, e)}>
                      <i className="far fa-copy"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
  );

  if (loading) {
    return (
      <div id="loading-state" style={{ textAlign: 'center', padding: '20px', fontStyle: 'italic', color: '#888' }}>
        <p>Loading latest links...</p>
      </div>
    );
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}><p>{error}</p></div>;
  }

  return (
    <div className="content-section links-section">
      <h2 className="info-title">Dice Dreams Links For Free Rolls Daily Updated Links</h2>
      <div className="update-status">
        <span className="dot"></span> Updated: <span id="update-time">Just Now</span>
      </div>
      {renderTable("Today's Links", todayLinks)}
      {renderTable("Previous Links", previousLinks)}
    </div>
  );
}
