import Layout from "./components/objects/Layout";
import Sidebar from "./components/sections/Sidebar";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <Layout>
        <Sidebar />
        <div className={styles.div}>Router and pages</div>
      </Layout>
    </div>
  );
};

export default App;
