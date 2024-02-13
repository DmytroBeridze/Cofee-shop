import "./more.scss";

export default function More() {
  return (
    <>
      <section className="more">
        <div className="more__main">
          <h1 className="more__title">More about</h1>
        </div>
        <div className="more__galrery-wrapper">
          {/* person 1 */}
          <div className="more__person-1_info more__grid-elem">
            <div className="more__person-1_name">Stephanie Olejarnik</div>
            <div className="more__person-1_prof">Art Director</div>
          </div>
          {/* person 1 photo */}
          <div className="more__person-1_photo more__grid-elem"></div>
          {/* person occupation */}
          <div className="more__person-1_occupation more__grid-elem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            reprehenderit dolor sequi voluptates tempore veniam eligendi quo est
            sint sapiente ex sit amet ducimus in porro dolorem
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae reprehenderit dolor sequi voluptates tempore veniam
              eligendi quo est sint sapiente
            </p>
          </div>
          {/* person data block */}
          <div className="more__data more__grid-elem">
            <div className="number">
              <div className="number__data">4</div>
              <span className="number__text">Lorem ipsum dolor sit amet </span>
            </div>
            <div className="number">
              <div className="number__data">97</div>
              <span className="number__text">
                Lorem ipsum dolor sit amet consectetu
              </span>
            </div>
            <div className="number">
              <div className="number__data">5</div>
              <span className="number__text">Lorem ipsum dolor sit </span>
            </div>
          </div>
          {/* person description block */}
          <div className="more__person-1_description more__grid-elem">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            labore velit harum praesentium enim impedit dolore id consequatur
            <p>
              Fugit possimus? Nulla impedit porro aspernatur voluptatem natus
              optio officia quasi. Dignissimos? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Recusandae reprehenderit dolor sequi
              voluptates tempore veniam eligendi
            </p>
          </div>
          {/* person experience block */}
          <div className="more__person-1_experience more__grid-elem">
            <p>
              Fugit possimus? Nulla impedit porro aspernatur voluptatem natus
              optio officia quasi. Dignissimos? Lorem ipsum dolor sit amet
              voluptatem natus
            </p>
          </div>

          {/* person 2 */}
          <div className="more__person-2 more__grid-elem">
            <div className="more__person-2_desc">
              <div className="more__person-2_text">
                Lorem ipsum dolor sit, amet consectetur adipisicing natus optio
                officia quasi. Dignissimos? Lorem ipsum dolor sit amet
                consecteturelit.
              </div>
              <div className="more__person-2_contacts">
                officia quasi. Dignissimo
              </div>
            </div>
            <div className="more__person-2_photo">
              {/* <img src="" alt="person-2" /> */}
            </div>
          </div>
          {/* person 3 */}
          <div className="more__person-3 more__grid-elem">
            <div className="more__person-3_photo"></div>
            <div className="more__person-3_desc">
              <div className="more__person-3_text">
                Lorem ipsum dolor sit, amet consectetur adipisicing voluptatem
                natus optio officia quasi. Dignissimos? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Recusandae reprehenderit
                dolor sequielit.
              </div>
              <div className="more__person-3_contacts">
                officia quasi. Dignissimo
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
