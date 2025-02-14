import styles from "./About.module.css"; // We'll create this CSS file for styling

function About() {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.introduction}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.subheading}>We are passionate about learning and growth.</p>
        <p className={styles.description}>
          Our mission is to provide high-quality education, making learning accessible for everyone,
          no matter where they are or what their background is. We aim to create a learning environment
          that encourages curiosity and growth.
        </p>
      </section>

      <section className={styles.mission}>
        <h2 className={styles.sectionHeading}>Our Mission</h2>
        <p className={styles.sectionContent}>
          Our mission is to empower learners by providing them with the knowledge and skills to succeed in
          today’s rapidly evolving world. We strive to deliver comprehensive, practical, and user-friendly
          courses that can transform lives.
        </p>
      </section>

      <section className={styles.team}>
        <h2 className={styles.sectionHeading}>Meet Our Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            {/* Display the image with src */}
            <img
              className={styles.teamImage}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IKCLGCzCv9Al0o2LcxWyXwHaFj%26pid%3DApi&f=1&ipt=1d6325a03e0792afcb5870bb10d870015b399ed5c4f2599c9b4ed64a0f9d6249&ipo=images"
              alt="Team member Atuya Saurav Abhisanchit"
            />
            <h3>Atuya Saurav Abhisanchit</h3>
            <p>Developer</p>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.sectionHeading}>Contact Us</h2>
        <p className={styles.sectionContent}>Have questions? Reach out to us at <a href="mailto:atulyasaurav1@example.com">atulyasaurav1@gmail.com</a>.</p>
      </section>
    </div>
  );
}

export default About;
