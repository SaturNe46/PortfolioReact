import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="sec1">
        <div id="installNotif"></div>

        <article className="hero">
          <h1>Owned the website of your dream</h1>

          <link to="/Pages/Resume" className="profile-link">
            <img
              src="/pt_profile (2).png"
              alt="Terry Valcin"
              className="profile-pic"
            />
          </link>

          <p className="intro">
            You want a amazing website but you don’t know where to start?
            There is a guy I would like to introduce you
          </p>

          <p>
            Hi there! I’m Terry, and I’d like to take you on a little journey through my life, from childhood to the present. 
            Growing up in Haiti I was always curious about how things work. 
            I was always seeking for novelty. 
            These moments sparked my love for the IT world.
            I was always asking how does this game was made? 
            how does the phone, the computer can do all those awesome things?
          </p>

          <p>
            As I moved through my teenage years, I began to explore the software part of IT. 
            I started trying to build website, try to learn some computer languages etc.
          </p>

          <p>
            Throughout my journey I heard a quote. 
            These words are still resonating in my head:  
            “if you can imagine it you can code it”.  
            That was enough to light my desire, to pursue the path of a software developer.
          </p>

          <p>
             An Important fact about Terry is as good he can work by himself it is as good that he can work on team.
            If that is not enough to convince you:
            <br />
            <Link to="/resume" className="learn-more">
              Learn more
            </Link>
          </p>
        </article>
      </section>

      <section className="sec2">
        <h2 className="section-title">Other Interesting Facts</h2>

        <aside className="asideText">
          <h2><strong>My expertise</strong></h2>
          <ul className="expertise-list">
            <li>Ecommerce</li>
            <li>Blog</li>
            <li><strong>Portfolio</strong></li>
            <li>Personal website</li>
            <li>News</li>
            <li>Education</li>
            <li>Nonprofit website</li>
            <li>Membership website</li>
            <li>Social media</li>
          </ul>
        </aside>
         <aside class="aside2">
        <h3>What you should consider</h3>
        <ol class="consider-list">
            <li>
                If you want to promote or sell product(s) the best type of website will be:
                <ol type="a">
                    <li>Ecommerce</li>
                    <li>Blog</li>
                </ol>
            </li>

            <li>
                If your goal is to provide information… the best fit will be:
                <ol type="a">
                    <li>News</li>
                    <li>Blog</li>
                    <li>Education</li>
                </ol>
            </li>

            <li>
                You want to promote yourself — I will propose you these types:
                <ol type="a">
                    <li>Portfolio</li>
                    <li>Personal website</li>
                </ol>
            </li>

            <li>
                You are a business owner and want to expand online — these types will suit you:
                <ol type="a">
                    <li>Business website</li>
                    <li>Ecommerce</li>
                    <li>Membership website</li>
                </ol>
            </li>
        </ol>
    </aside>
      </section>

      <table className="home">
        <caption>More About Me</caption>
        <colgroup>
          <col id="firstcol" />
          <col className="SecCols" span="2" />
        </colgroup>

        <thead>
          <tr>
            <th>Other Skills</th>
            <th>About the Skill</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Data Analyst</th>
            <td>collect, process, and analyze data...</td>
          </tr>
           <tr>
                    <th>Sofware developer</th>
                    <td rowspan="2"> designs, creates, and maintains software and applications
                        (programmer don't designs)
                    </td>
                </tr>
                <tr>
                    <th>Programer</th>
                </tr>
        </tbody>
      </table>
    </>
  );
}

export default Home;