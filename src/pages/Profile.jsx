import { useState, useEffect } from "react";
import { getUser } from "../utils/getUser"; // Your function to fetch user data
import styles from "./Profile.module.css";

import { requireAuth } from "../utils/requireAuth";

export async function profileLoader({ request }) {
  // Get the current pathname of the request
  const pathname = new URL(request.url).pathname;

  // Check if the user is authenticated, if not, redirect them
  await requireAuth({ redirectTo: `/login?redirect=${pathname}` });

  return null; // This is for the loader function, no data is returned since it's just a check.
}

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const userData = await getUser(); // Replace with actual API call or context
        setUser(userData);
      } catch (err) {
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          {/* Wrap the profile picture with a regular anchor (<a>) tag */}
          <a href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VTBzGQySOYLDke_xg2OfEQHaFj%26pid%3DApi%26h%3D160&f=1&ipt=7907d174bd190bb25bb898ad9200e42f2d6acbf5915dab5503903e98d7e1c06e&ipo=images" className={styles.profilePicLink}>

          </a>
          <h1 className={styles.profileName}>{user.name}</h1>
        </div>

        <div className={styles.profileDetails}>
          <p>
            <strong>Email: atulyasaurav1@gmail.com</strong> {user.email}
          </p>
          <p>
            <strong>Username: Atulya Saurav Abhisanchit</strong> {user.username}
          </p>
          <p>
            <strong>Joined on: 9/11/2024</strong> 
          </p>
        </div>

        <a href="/profile/edit">
          <button className={styles.editButton}>Edit Profile</button>
        </a>
      </div>
    </div>
  );
}

export default Profile;
