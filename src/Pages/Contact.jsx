import "../assets/Contact.css";
function Contact() {
  return (
    <>
      <article>
        <h1 id="name">Terry J. Valcin</h1>
        <h2>Here's how you can contact me</h2>

        <p>
          Email:{" "}
          <a href="mailto:tjvalcin0@students.ntc.edu">
            tjvalcin0@students.ntc.edu
          </a>
          <br />
        </p>

        <p>
          Tel:{" "}
          <a href="tel:+17155397295">(704) 555-1151</a>
          <br />
        </p>
      </article>

      <div id="form">
        <div id="error"></div>

        <form id="cusinfo" method="post" action="/submit">
          <fieldset id="Business Information">
            <legend>Your Information</legend>

            <div className="areas" id="companyP">
              <label htmlFor="company">Company *</label>
              <input name="companyName" id="company" type="text" />
              <small>error message</small>
            </div>

            <div className="areas" id="fNameP">
              <label htmlFor="fName">First Name *</label>
              <input name="cusFname" id="fName" type="text" />
              <small>error message</small>
            </div>

            <div className="areas" id="lNameP">
              <label htmlFor="lName">Last Name *</label>
              <input name="cusLname" id="lName" type="text" />
              <small>error message</small>
            </div>

            <div className="areas">
              <label htmlFor="City">City</label>
              <input name="cusCity" id="City" type="text" defaultValue="Wausau" />
            </div>

            <div className="areas">
              <label htmlFor="state">State</label>
              <input name="cusState" id="state" type="text" defaultValue="WI" />
            </div>

            <div className="areas">
              <label htmlFor="zip">Zip Code</label>
              <input
                name="cusZip"
                id="zip"
                type="text"
                placeholder="nnnnn"
              />
              <small>error message</small>
            </div>

            <div className="areas">
              <label htmlFor="phone">Tel</label>
              <input
                name="cusPhone"
                id="phone"
                type="tel"
                placeholder="(999) 999-9999"
              />
              <small>error message</small>
            </div>

            <div className="areas">
              <label htmlFor="mail">E-mail *</label>
              <input name="cusName" id="mail" type="email" />
              <small>error message</small>
            </div>

            <div className="areas" id="commentP">
              <label htmlFor="comment">
                Write your question or comment.
              </label>
              <textarea name="cusComent" id="comment"></textarea>
              <small>error message</small>
            </div>

            <div id="buttons" className="areas">
              <input type="submit" value="Submit" />
            </div>
          </fieldset>
        </form>

        <p>
          I’m looking forward to help make your website, what you did not expect!
        </p>
      </div>
    </>
  );
}

export default Contact;