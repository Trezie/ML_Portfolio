import React from "react";
import "./Certificates.css";

const certificates = [
  {
    title: "Understanding Machine Learning",
    issuer: "Datacamp",
    year: "2025",
    links: [{ text: "View Certificate", url: "https://drive.google.com/file/d/1Ky70193QG1XAeQk46AKybVrfQZz7_aSa/view?usp=sharing", icon: "📜" }],
  },
  {
    title: "Artificial Intelligence Governance",
    issuer: "Datacamp",
    year: "2025",
    links: [{ text: "View Certificate", url: "https://drive.google.com/file/d/18eNrXVVDcr2ahLjHxtswyygV77VLNmf8/view?usp=sharing", icon: "📜" }],
  },
    {
    title: "Data Analytics Job Simulation",
    issuer: "Delloitte",
    year: "2025",
    links: [{ text: "View Certificate", url: "https://drive.google.com/file/d/1jOG47lTPTvnney2wFSGMNf08bvXfv1t3/view?usp=sharing", icon: "📜" }],
  },
  {
    title: "Data Ethics Certificate",
    issuer: "Datacamp",
    year: "2024",
    links: [{ text: "View Certificate", url: "https://drive.google.com/file/d/1wr9AZzxiQ7yHXFvucytK1gi6tnAGr_69/view?usp=sharing", icon: "📜" }],
  },
  {
    title: "Communicating Data Insights",
    issuer: "Datacamp",
    year: "2024",
    links: [{ text: "View Certificate", url: "https://drive.google.com/file/d/1dWw5CV9uQIp3Wbv-PX36UD2WXAL9UnjB/view?usp=sharing", icon: "📜" }],
  },
];

const Certificates = () => {
  return (
    <section className="certificates-section">
      <h2 className="certificates-title">Certificates</h2>

      {certificates.map((certificate, index) => (
        <div key={index} className="certificate">
          <h3 className="certificate-title">{certificate.title}</h3>
          <p className="certificate-issuer">
            {certificate.issuer}, {certificate.year}
          </p>
          <div className="certificate-links">
            {certificate.links.map((link, i) => (
              <a key={i} href={link.url} className="certificate-link">
                {link.text} {link.icon && <span>{link.icon}</span>}
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Certificates;
