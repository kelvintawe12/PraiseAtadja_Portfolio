import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Floating from '../components/Floating';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={styles.layout}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
      <Floating />
    </>
  );
};

export default Layout;
