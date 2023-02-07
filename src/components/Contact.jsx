const Contact = () => {
  return (
    <section id="contact" class="main style3 secondary">
      <div class="content">
        <header>
          <h2>Say Hello.</h2>
          <p>
            Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore
            condimentum.
          </p>
        </header>
        <div class="box">
          <form method="post" action="#">
            <div class="fields">
              <div class="field half">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div class="field half">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div class="field">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                ></textarea>
              </div>
            </div>
            <ul class="actions special">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
