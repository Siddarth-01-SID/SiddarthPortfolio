'use client'

export default function TixFlixCaseStudy() {
  return (
    <html className="scroll-smooth">
      <head>
        <title>TixFlix - Movie Ticket Booking Design System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Poppins', sans-serif;
            background: #000;
            overflow-x: hidden;
          }

          html, body {
            width: 100%;
            height: 100%;
          }

          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Sora:wght@700&family=Urbanist:wght@400;700&display=swap');

          /* Main Container */
          .design-container {
            width: 1440px;
            min-height: 100vh;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            padding: 0;
            background: #000;
          }

          /* Hero Section */
          .hero-section {
            width: 100%;
            height: 810px;
            background: #171717;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            overflow: hidden;
            flex-shrink: 0;
          }

          .hero-bg-gradient-1 {
            position: absolute;
            width: 582.75px;
            height: 380.84px;
            left: 340.5px;
            top: -392.25px;
            background: #12E6C8;
            opacity: 0.8;
            filter: blur(90.1974px);
            transform: rotate(-22.69deg);
            pointer-events: none;
          }

          .hero-bg-gradient-2 {
            position: absolute;
            width: 529.6px;
            height: 477.7px;
            left: 732.75px;
            top: 575.25px;
            background: #A287F4;
            opacity: 0.8;
            filter: blur(83.8589px);
            transform: rotate(-33.88deg);
            pointer-events: none;
          }

          .hero-content {
            position: relative;
            z-index: 2;
            padding-left: 135px;
            padding-top: 100px;
          }

          .hero-title {
            font-family: 'Sora', sans-serif;
            font-size: 150px;
            font-weight: 700;
            line-height: 189px;
            text-transform: uppercase;
            color: #FFFFFF;
            max-width: 1203px;
            margin: 0;
          }

          /* Secondary Hero */
          .secondary-hero {
            width: 100%;
            height: 810px;
            background: #171717;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            flex-shrink: 0;
          }

          .secondary-hero-gradient-1 {
            position: absolute;
            width: 582.75px;
            height: 380.84px;
            left: 340.5px;
            top: -392.25px;
            background: #12E6C8;
            opacity: 0.8;
            filter: blur(90.1974px);
            transform: rotate(-22.69deg);
          }

          .secondary-hero-gradient-2 {
            position: absolute;
            width: 529.6px;
            height: 477.7px;
            left: 732.75px;
            top: 575.25px;
            background: #A287F4;
            opacity: 0.8;
            filter: blur(83.8589px);
            transform: rotate(-33.88deg);
          }

          .secondary-hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            max-width: 1254px;
          }

          .secondary-hero-title {
            font-family: 'Sora', sans-serif;
            font-size: 90px;
            font-weight: 700;
            line-height: 113px;
            text-transform: uppercase;
            color: #FFFFFF;
            margin: 0;
          }

          /* Content Section */
          .content-section {
            width: 100%;
            background: #000000;
            padding: 80px 100px;
            flex-shrink: 0;
          }

          .content-wrapper {
            max-width: 1259px;
            display: flex;
            flex-direction: column;
            gap: 78px;
          }

          .intro-block {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .logo-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            margin-bottom: 20px;
          }

          .logo-text {
            font-family: 'Poppins', sans-serif;
            font-size: 48px;
            font-weight: 800;
            line-height: 58px;
            color: #FFFFFF;
            text-align: center;
          }

          .tagline {
            font-family: 'Poppins', sans-serif;
            font-size: 24px;
            font-weight: 500;
            line-height: 31px;
            color: #C7C7C7;
            text-align: center;
          }

          .description-text {
            font-family: 'Poppins', sans-serif;
            font-size: 24px;
            font-weight: 500;
            line-height: 31px;
            color: #FFFFFF;
            text-align: center;
          }

          /* Colors Section */
          .colors-section {
            width: 100%;
            background: #171414;
            padding: 118.588px;
            flex-shrink: 0;
          }

          .colors-header {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 67.7647px 118.588px;
            gap: 10.16px;
            width: 100%;
            background: #373737;
            margin: -118.588px -118.588px 0 -118.588px;
            margin-bottom: 67.76px;
          }

          .colors-title {
            font-family: 'Poppins', sans-serif;
            font-size: 47.4353px;
            font-weight: 600;
            line-height: 57px;
            color: #F2F4F7;
          }

          .colors-content {
            display: flex;
            flex-direction: column;
            gap: 67.76px;
            padding: 118.588px;
            background: #171414;
            margin: -118.588px;
            padding-top: 67.76px;
          }

          .color-group-title {
            font-family: 'Poppins', sans-serif;
            font-size: 40.6588px;
            font-weight: 600;
            line-height: 49px;
            color: #F2F4F7;
            margin-bottom: 40.66px;
          }

          .color-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 33.88px;
            margin-bottom: 67.76px;
          }

          .color-item {
            display: flex;
            flex-direction: column;
            gap: 13.55px;
          }

          .color-label-row {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10.16px;
            justify-content: space-between;
          }

          .color-label {
            font-family: 'Urbanist', sans-serif;
            font-weight: 700;
            font-size: 15.2471px;
            line-height: 18px;
            color: #F2F4F7;
          }

          .color-code {
            font-family: 'Urbanist', sans-serif;
            font-weight: 400;
            font-size: 13.5529px;
            line-height: 19px;
            text-align: right;
            letter-spacing: 0.169412px;
            color: #F5F5F5;
          }

          .color-swatch {
            width: 100%;
            height: 118.59px;
            border-radius: 0px 27.1059px 27.1059px 27.1059px;
            flex-shrink: 0;
          }

          /* Responsive Design */
          @media (max-width: 1440px) {
            .design-container {
              width: 100%;
            }

            .hero-section, .secondary-hero, .content-section, .colors-section {
              width: 100%;
            }

            .hero-title {
              font-size: clamp(80px, 10vw, 150px);
              line-height: 1.3;
            }

            .secondary-hero-title {
              font-size: clamp(50px, 8vw, 90px);
              line-height: 1.3;
            }

            .color-grid {
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            }

            .hero-content, .colors-header, .colors-content {
              padding-left: calc(max(20px, 5vw));
              padding-right: calc(max(20px, 5vw));
            }
          }
        `}</style>
      </head>
      <body>
        <div className="design-container">
          {/* First Hero Section */}
          <div className="hero-section">
            <div className="hero-bg-gradient-1" />
            <div className="hero-bg-gradient-2" />
            <div className="hero-content">
              <h1 className="hero-title">FMCG Order System</h1>
            </div>
          </div>

          {/* Second Hero Section */}
          <div className="secondary-hero">
            <div className="secondary-hero-gradient-1" />
            <div className="secondary-hero-gradient-2" />
            <div className="secondary-hero-content">
              <h2 className="secondary-hero-title">Movie ticket booking website design</h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="content-section">
            <div className="content-wrapper">
              <div className="intro-block">
                <div className="logo-section">
                  <div className="logo-text">TixFlix</div>
                  <div className="tagline">Movies made easy</div>
                </div>

                <div className="description-text">
                  TixFlix is your ultimate movie ticket booking app—where every movie moment begins. Discover the latest releases, explore nearby cinemas, check showtimes, and reserve your seats in just a tap. With a sleek interface, lightning-fast confirmations, and exciting offers, TixFlix turns movie booking into a smooth, enjoyable, and unforgettable experience.
                </div>

                <div className="description-text">
                  I've also designed a custom UI for TixFlix—crafted with a modern look, intuitive flow, and vibrant visuals. Please have a look below!
                </div>

                <div className="description-text">
                  The TixFlix design showcases a strong and modern visual identity built around the project's name, giving the interface a dynamic and memorable personality. The colour palette enhances the overall mood and helps create a cohesive atmosphere throughout the app. Carefully selected typography adds clarity, structure, and a refined look, while the minimal, consistent iconography ensures smooth and intuitive navigation. All these elements come together to form a unified and polished user experience. Now you are going to have a look at my design system.
                </div>
              </div>
            </div>
          </div>

          {/* Colors Section */}
          <div className="colors-section">
            <div className="colors-header">
              <h2 className="colors-title">Colors</h2>
            </div>

            <div className="colors-content">
              {/* Main Colours */}
              <div>
                <h3 className="color-group-title">Main Colours</h3>
                
                {/* First Row of Colors */}
                <div className="color-grid">
                  <div className="color-item">
                    <div className="color-label-row">
                      <span className="color-label">900</span>
                      <span className="color-code">#0C2A41</span>
                    </div>
                    <div className="color-swatch" style={{ backgroundColor: '#0C2A41' }} />
                  </div>

                  <div className="color-item">
                    <div className="color-label-row">
                      <span className="color-label">800</span>
                      <span className="color-code">#10456C</span>
                    </div>
                    <div className="color-swatch" style={{ backgroundColor: '#10456C' }} />
                  </div>

                  <div className="color-item">
                    <div className="color-label-row">
                      <span className="color-label">700</span>
                      <span className="color-code">#12639A</span>
                    </div>
                    <div className="color-swatch" style={{ backgroundColor: '#12639A' }} />
                  </div>

                  <div className="color-item">
                    <div className="color-label-row">
                      <span className="color-label">600</span>
                      <span className="color-code">#0E82CB</span>
                    </div>
                    <div className="color-swatch" style={{ backgroundColor: '#0E82CB' }} />
                  </div>

                  <div className="color-item">
                    <div className="color-label-row">
                      <span className="color-label">500</span>
                      <span className="color-code">#00A1FF</span>
                    </div>
                    <div className="color-swatch" style={{ backgroundColor: '#00A1FF' }} />
                  </div>
                </div>

                {/* Second Row of Colors */}
                <div className="color-grid">
                  <div className="color-item">
                    <div className="color-label-row">
                      <span className="color-label">400</span>
                      <span className="color-code">#60B2FF</span>
                    </div>
                    <div className="color-swatch" style={{ backgroundColor: '#60B2FF' }} />
                  </div>

                  <div className="color-item">
                    <div className="color-label-row">
                      <span className="color-label">300</span>
                      <span className="color-code">#89C2FF</span>
                    </div>
                    <div className="color-swatch" style={{ backgroundColor: '#89C2FF' }} />
                  </div>

                  <div className="color-item">
                    <div className="color-label-row">
                      <span className="color-label">200</span>
                      <span className="color-code">#ABD3FF</span>
                    </div>
                    <div className="color-swatch" style={{ backgroundColor: '#ABD3FF' }} />
                  </div>

                  <div className="color-item">
                    <div className="color-label-row">
                      <span className="color-label">100</span>
                      <span className="color-code">#D4E8FF</span>
                    </div>
                    <div className="color-swatch" style={{ backgroundColor: '#D4E8FF' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
