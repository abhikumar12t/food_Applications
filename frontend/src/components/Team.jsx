import React, { useState } from "react";
import { data } from "../restApi.json";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>

        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
                {/* ===== BUTTON TO OPEN POPUP ===== */}
                <button
                  onClick={() => setSelectedMember(element)}
                  className="details_btn"
                >
                  View Details
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== POPUP (MODAL) ===== */}
      {selectedMember && (
        <div className="popup_overlay">
          <div className="popup">
            <button
              className="close_btn"
              onClick={() => setSelectedMember(null)}
            >
              ✖
            </button>
            <img src={selectedMember.image} alt={selectedMember.name} />
            <h2>{selectedMember.name}</h2>
            <p><strong>Designation: </strong> {selectedMember.designation}</p>
            <p><strong>Speciality: </strong> {selectedMember.speciality}</p>
            <p><strong>Experience: </strong> {selectedMember.experience}</p>
            <p><strong>Age: </strong> {selectedMember.age}</p>
            <p><strong>Ratting: </strong> {selectedMember.ratting} years</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
