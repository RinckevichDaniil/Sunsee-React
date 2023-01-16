import '../styles/mainAbout.scss'
import video from '../images/video.MOV'

export default function AboutMain() {
    return (
        <section className="about-section">
        <div className="about-section__wrapp">
          <h4 className="big_title about-section__title">About Photographer</h4>
          <div className="content-wrapp">
            <video
            src={video}
              className="video"
              autoPlay
              loop
              muted
            ></video>
            <div className="content-wrapp--row">
              <p className="content__text text--main">
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui
                ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                velit, sed quia non numquam eius modi tempora incidunt ut
                labore et dolore magnam aliquam quaerat voluptatem
              </p>
              <div className="contacts-wrapp">
                <h5 className="title--caps">email:</h5>
                <a href="sunsee@gmail.com" className="email_link text--main"
                  >sunsee@gmail.com</a
                >
              </div>
              <div className="contacts-wrapp">
                <h5 className="title--caps">phone:</h5>
                <p className="text--main">+ 38093 222 22 22</p>
              </div>
              <div className="contacts-wrapp">
                <h5 className="title--caps">social:</h5>
                <a href="https://www.instagram.com/" className="text--main"
                  >Instagram</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}