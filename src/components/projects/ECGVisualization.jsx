import React, { useState, useEffect } from 'react';
import './ECGVisualization.css';

const ECGVisualization = () => {
  const [ecgData, setEcgData] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [showNormal, setShowNormal] = useState(true);

  // Generate sample ECG data
  useEffect(() => {
    const generateECGData = () => {
      const data = [];
      for (let i = 0; i < 200; i++) {
        // Basic ECG waveform with some variability
        const x = i / 20;
        let y = 0;
        
        if (showNormal) {
          // Normal sinus rhythm
          y = Math.sin(x * Math.PI) * 0.8 + 
              Math.sin(x * Math.PI * 5) * 0.1 + 
              Math.random() * 0.05;
        } else {
          // Abnormal rhythm (simulating PVC)
          if (i > 80 && i < 120) {
            y = Math.sin(x * Math.PI) * 1.5 + 
                Math.sin(x * Math.PI * 10) * 0.3 + 
                Math.random() * 0.1;
          } else {
            y = Math.sin(x * Math.PI) * 0.8 + 
                Math.sin(x * Math.PI * 5) * 0.1 + 
                Math.random() * 0.05;
          }
        }
        data.push({ x: i, y });
      }
      setEcgData(data);
    };

    generateECGData();
  }, [showNormal]);

  const analyzeECG = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisResult({
        diagnosis: showNormal ? 'Normal Sinus Rhythm' : 'Premature Ventricular Contraction (PVC)',
        confidence: (Math.random() * 20 + 80).toFixed(1),
        recommendations: showNormal 
          ? ['No significant abnormalities detected', 'Continue regular monitoring'] 
          : ['Consult with cardiologist', 'Consider additional testing', 'Monitor for symptoms']
      });
    }, 2000);
  };

  return (
    <div className="ecg-visualization">
      <h3>ECG Analysis Demo</h3>
      
      <div className="ecg-controls">
        <button 
          onClick={() => setShowNormal(!showNormal)}
          className="toggle-btn"
        >
          {showNormal ? 'Show Abnormal Rhythm' : 'Show Normal Rhythm'}
        </button>
        
        <button 
          onClick={analyzeECG} 
          disabled={isAnalyzing}
          className="analyze-btn"
        >
          {isAnalyzing ? 'Analyzing...' : 'Analyze ECG'}
        </button>
      </div>

      <div className="ecg-graph-container">
        <svg className="ecg-graph" viewBox="0 0 200 100">
          {/* Grid lines */}
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <line x1={0} y1={i * 10} x2={200} y2={i * 10} stroke="#eee" />
              <line x1={i * 20} y1={0} x2={i * 20} y2={100} stroke="#eee" />
            </React.Fragment>
          ))}
          
          {/* ECG Line */}
          <polyline
            fill="none"
            stroke="#d32f2f"
            strokeWidth="1.5"
            points={ecgData.map(d => `${d.x},${50 - d.y * 20}`).join(' ')}
          />
          
          {/* Annotations */}
          {!showNormal && (
            <g>
              <rect x={80} y={10} width={40} height={80} fill="rgba(211, 47, 47, 0.1)" />
              <text x={100} y={20} textAnchor="middle" fill="#d32f2f" fontWeight="bold">
                Abnormal Rhythm Detected
              </text>
            </g>
          )}
        </svg>
      </div>

      {analysisResult && (
        <div className={`analysis-result ${!showNormal ? 'abnormal' : ''}`}>
          <h4>AI Analysis Results</h4>
          <div className="result-diagnosis">
            <span>Diagnosis:</span>
            <strong>{analysisResult.diagnosis}</strong>
          </div>
          <div className="result-confidence">
            <span>Confidence:</span>
            <strong>{analysisResult.confidence}%</strong>
          </div>
          <div className="result-recommendations">
            <span>Recommendations:</span>
            <ul>
              {analysisResult.recommendations.map((rec, i) => (
                <li key={i}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ECGVisualization;
