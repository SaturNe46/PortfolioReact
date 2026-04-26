import { Link } from "react-router-dom";

function Resume() {
  return (
    <article>
      <h2>Do Not miss a valuable asset.</h2>

      <p><strong>Name:</strong> Terry Valcin</p>
      <p><strong>Phone:</strong> +1 (715) 539-7295</p>
      <p><strong>Email:</strong> tjvalcin0@students.ntc.edu</p>
      <p><strong>Address:</strong> 1221 2nd Ave</p>
      <p><strong>Objective:</strong> Make this world easier, faster, with technology</p>
      <p>
        <strong>Work experience:</strong> I worked as a substitute director for 3 months.
        As a seasonal general operator in a lumber company for 10 months.
        I did a lot of volunteer work.
      </p>
      <p><strong>Education:</strong> I got a High School diploma.</p>
      <p><strong>Skills:</strong> I speak French, and Creole</p>
      <p>
        <strong>Philosophy:</strong> I strongly believe a good website must incorporate
        the values, the brand, the emotions of the company while meeting the need of its users.
      </p>

      <Link to="/contact">Contact Me</Link>
    </article>
  );
}

export default Resume;