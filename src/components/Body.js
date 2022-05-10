import React from "react";
import dp from "../assets/avatar.png";

function Body() {
  return (
    <div>
      <div className="resume-wrapper">
        <div className="header">
          <div className="user">
            <span className="designation">ui developer</span>
            <h1 className="user-name">mathew sunny</h1>
            <p className="about-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              velit suscipit vitae quas ad sapiente, unde harum nam! Labore amet
              velit, nulla accusantium inventore rerum reprehenderit itaque fuga
              quam.
            </p>

            <div className="contact-links">
              <a href="" target="_blank">
                Email
              </a>
              <a href="" target="_blank">
                Linkedin
              </a>
              <a href="" target="_blank">
                Phone
              </a>
            </div>
          </div>
          <div className="user-image">
            <img src={dp} alt="Mathew's image" />\
          </div>
        </div>

        <div className="details">
          <div className="card-wrapper">
            <div className="card">
              <h4 className="card-header">eduction</h4>
              <div className="card-body margin-top education">
                <div className="flex">
                  <div className="year">2018</div>
                  <div className="desc-wrap">
                    <div className="title">high school</div>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis nostrum repellendus quae.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="year">2020</div>
                  <div className="desc-wrap">
                    <div className="title">degree</div>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta repudiandae magnam reprehenderit ipsam qui
                      distinctio nemo atque commodi deserunt.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="year">2022</div>
                  <div className="desc-wrap">
                    <div className="title">high school</div>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis nostrum repellendus quae.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h4 className="card-header">work experience</h4>
              <div className="card-body margin-top education">
                <div className="flex">
                  <div className="year">2018</div>
                  <div className="desc-wrap">
                    <div className="title">company one - UI developer</div>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis nostrum repellendus quae.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="year">2022</div>
                  <div className="desc-wrap">
                    <div className="title">company one - UI developer</div>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit, aut. Officia velit libero pariatur quae at alias
                      asperiores sapiente iure! quae.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h4 className="card-header">achievments</h4>
              <div className="card-body margin-top education">
                <div className="flex">
                  <div className="year">2018</div>
                  <div className="desc-wrap">
                    <div className="title">company one - UI developer</div>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis nostrum repellendus quae.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="year">2022</div>
                  <div className="desc-wrap">
                    <div className="title">company one - UI developer</div>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit, aut. Officia velit libero pariatur quae at alias
                      asperiores sapiente iure! quae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skill-wrapper flex">
          <div className="skills">
            <h3>Skills</h3>
            <div className="grp">
              <label>html</label>
              <progress value="80" max="100"></progress>
            </div>

            <div className="grp">
              <label>css</label>
              <progress value="90" max="100"></progress>
            </div>

            <div className="grp">
              <label>javascript</label>
              <progress value="50" max="100"></progress>
            </div>

            <div className="grp">
              <label>figma</label>
              <progress value="95" max="100"></progress>
            </div>

            <div className="grp">
              <label>react</label>
              <progress value="32" max="100"></progress>
            </div>
          </div>

          <div className="lang">
            <h3>Languages</h3>
            <div className="grp">
              <label>malayalam</label>
              <progress value="100" max="100"></progress>
            </div>

            <div className="grp">
              <label>english</label>
              <progress value="86" max="100"></progress>
            </div>

            <div className="grp">
              <label>french</label>
              <progress value="50" max="100"></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
