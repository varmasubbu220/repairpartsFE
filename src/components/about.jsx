import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const Aboutpage = () => {
  return (
    <div style={styles.aboutPage}>
      <div className="container py-5">
        <motion.h2 className="mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={styles.header}
        >
          About Us
        </motion.h2>

        {/* Company Description */}
        <motion.section className="mb-5"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.textLight}
        >
          <h4>Who We Are</h4>
          <p>
            We are a leading provider of high-quality automotive parts and accessories. Our mission is to offer the best products and services to our customers. With a wide range of products, we ensure that your vehicle runs smoothly and efficiently.
          </p>
        </motion.section>

        {/* Our Mission */}
        <motion.section className="mb-5"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.textLight}
        >
          <h4>Our Mission</h4>
          <p>
            Our mission is to provide top-notch automotive parts and exceptional customer service. We strive to innovate and continuously improve our products to meet the evolving needs of our customers.
          </p>
        </motion.section>

        {/* Our History */}
        <motion.section className="mb-5"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.textLight}
        >
          <h4>Our History</h4>
          <p>
            Founded in 1990, we have over 30 years of experience in the automotive industry. Our journey began with a small store and has grown into a large enterprise serving customers worldwide.
          </p>
        </motion.section>

        {/* Our Values */}
        <motion.section className="mb-5"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.textLight}
        >
          <h4>Our Values</h4>
          <ul>
            <li>Customer Satisfaction</li>
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Quality</li>
            <li>Teamwork</li>
          </ul>
        </motion.section>

        {/* Our Achievements */}
        <motion.section className="mb-5"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.textLight}
        >
          <h4>Our Achievements</h4>
          <p>
            We have been recognized as the best automotive parts provider for three consecutive years and have received numerous awards for our innovative products and excellent customer service.
          </p>
        </motion.section>

        {/* Our Team */}
        <motion.section className="mb-5"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.textLight}
        >
          <h4>Our Team</h4>
          <div className="row">
            <div className="col-md-4 mb-3">
              <motion.div
                className="card h-100"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={styles.card}
              >
                <img src="https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg" className="card-img-top" alt="Team Member 1" />
                <div className="card-body">
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">CEO</p>
                </div>
              </motion.div>
            </div>
            <div className="col-md-4 mb-3">
              <motion.div
                className="card h-100"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={styles.card}
              >
                <img src="https://i0.wp.com/www.steverrobbins.com/wp-content/uploads/ceo-midjourney-office.jpg?resize=1024%2C683&ssl=1" className="card-img-top" alt="Team Member 2" />
                <div className="card-body">
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">CTO</p>
                </div>
              </motion.div>
            </div>
            <div className="col-md-4 mb-3">
              <motion.div
                className="card h-100"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={styles.card}
              >
                <img src="https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg" className="card-img-top" alt="Team Member 3" />
                <div className="card-body">
                  <h5 className="card-title">Emily Johnson</h5>
                  <p className="card-text">COO</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section className="mb-5"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.textLight}
        >
          <h4>Contact Us</h4>
          <p>
            If you have any questions or need further information, please feel free to contact us at:
          </p>
          <ul>
            <li>Email: info@ourcompany.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 1234 Main St, Anytown, USA</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
};

const styles = {
  aboutPage: {
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
    backgroundColor: '#282c34',
    color: '#fff',
    minHeight: '100vh',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  header: {
    color: '#61dafb',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '15px',
  },
  textLight: {
    color: '#f8f9fa',
  },
};

export default Aboutpage;
